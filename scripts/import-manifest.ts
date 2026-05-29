/**
 * Optional manifest importer.
 *
 * This script is not required for the website to run. It exists to bootstrap or
 * refresh artifact metadata from a local Bungie manifest export that you review
 * manually before merging into src/data.
 *
 * Usage examples:
 *   npm run import:manifest -- --inventory ./DestinyInventoryItemDefinition.json
 *   npm run import:manifest -- --sqlite ./world_sql_content.content
 *
 * Notes:
 * - Bungie API requests for downloading the manifest may require an API key,
 *   depending on the tooling you use around this script.
 * - Generated output should always be reviewed by a human before replacing the
 *   curated dataset in src/data/artifacts.ts.
 */

import fs from 'node:fs'
import path from 'node:path'

type InventoryEntry = {
  displayProperties?: {
    name?: string
    description?: string
    icon?: string
  }
  inventory?: {
    bucketTypeHash?: number
    stackUniqueLabel?: string
  }
  itemTypeDisplayName?: string
  hash?: number
}

type ManifestRecord = Record<string, InventoryEntry>

type Args = {
  inventory?: string
  sqlite?: string
  out: string
}

const args = parseArgs(process.argv.slice(2))

if (!args.inventory && !args.sqlite) {
  console.error('Provide --inventory <json-path> or --sqlite <sqlite-path>.')
  process.exit(1)
}

const inventoryDefinitions = args.inventory
  ? readInventoryJson(args.inventory)
  : await readInventoryFromSqlite(args.sqlite!)

const normalized = Object.values(inventoryDefinitions)
  .filter((entry) => entry.inventory?.bucketTypeHash === 1506418338)
  .filter((entry) => entry.inventory?.stackUniqueLabel?.includes('.artifact'))
  .map((entry) => {
    const seasonMatch = entry.inventory?.stackUniqueLabel?.match(/season(\d+)/)
    return {
      seasonNumber: seasonMatch ? Number(seasonMatch[1]) : null,
      stackUniqueLabel: entry.inventory?.stackUniqueLabel ?? null,
      artifactName: entry.displayProperties?.name ?? '',
      description: entry.displayProperties?.description ?? '',
      iconPath: entry.displayProperties?.icon ?? null,
      itemHash: entry.hash ?? null,
      itemType: entry.itemTypeDisplayName ?? '',
    }
  })
  .filter((entry) => entry.artifactName)
  .sort((left, right) => (left.seasonNumber ?? 0) - (right.seasonNumber ?? 0))

fs.writeFileSync(args.out, JSON.stringify(normalized, null, 2))
console.log(`Wrote ${normalized.length} generated records to ${args.out}`)

function parseArgs(argv: string[]): Args {
  const args: Args = {
    out: path.resolve(process.cwd(), 'artifacts.generated.json'),
  }

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    const nextValue = argv[index + 1]

    if (!token.startsWith('--')) {
      continue
    }

    if (token === '--inventory' && nextValue) {
      args.inventory = path.resolve(process.cwd(), nextValue)
      index += 1
      continue
    }

    if (token === '--sqlite' && nextValue) {
      args.sqlite = path.resolve(process.cwd(), nextValue)
      index += 1
      continue
    }

    if (token === '--out' && nextValue) {
      args.out = path.resolve(process.cwd(), nextValue)
      index += 1
    }
  }

  return args
}

function readInventoryJson(filePath: string): ManifestRecord {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as ManifestRecord
}

async function readInventoryFromSqlite(filePath: string): Promise<ManifestRecord> {
  const dynamicImport = new Function(
    'specifier',
    'return import(specifier)',
  ) as (specifier: string) => Promise<unknown>

  let databaseModule: unknown

  try {
    databaseModule = await dynamicImport('better-sqlite3')
  } catch {
    console.error(
      'SQLite support requires the optional package "better-sqlite3". Install it before using --sqlite.',
    )
    process.exit(1)
  }

  const Database = (databaseModule as { default: new (file: string, options?: object) => unknown })
    .default
  const database = new Database(filePath, { readonly: true }) as {
    prepare: (query: string) => { all: () => Array<{ id: number; json: string }> }
  }

  const rows = database
    .prepare('SELECT id, json FROM DestinyInventoryItemDefinition')
    .all()

  const manifest: ManifestRecord = {}

  for (const row of rows) {
    manifest[String(row.id)] = JSON.parse(row.json) as InventoryEntry
  }

  return manifest
}
