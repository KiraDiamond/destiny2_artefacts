import fs from 'node:fs/promises'
import path from 'node:path'
import { DESTINY_ICON_BASE_URL, destinyIconTargets } from '../src/data/destinyIconTargets.ts'

type AnyDef = {
  hash?: number
  index?: number
  displayProperties?: {
    name?: string
    description?: string
    icon?: string
    hasIcon?: boolean
  }
  itemTypeDisplayName?: string
}

const BUNGIE_MANIFEST_URL = 'https://www.bungie.net/Platform/Destiny2/Manifest/'
const RETRYABLE_STATUS_CODES = new Set([429, 500, 502, 503, 504])

async function fetchJson(url: string) {
  let lastError: Error | null = null

  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(url)

    if (response.ok) {
      return response.json()
    }

    if (!RETRYABLE_STATUS_CODES.has(response.status) || attempt === 3) {
      throw new Error(`${response.status} ${response.statusText}: ${url}`)
    }

    lastError = new Error(`${response.status} ${response.statusText}: ${url}`)
    await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)))
  }

  throw lastError ?? new Error(`Failed to fetch ${url}`)
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/episode:\s*/g, '')
    .replace(/season of the /g, 'season of ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function findByName(table: Record<string, AnyDef>, wantedName: string) {
  const wanted = normalize(wantedName)

  const exact = Object.values(table).find((def) => {
    const name = def.displayProperties?.name
    return name && normalize(name) === wanted && def.displayProperties?.icon
  })

  if (exact) {
    return exact
  }

  return (
    Object.values(table).find((def) => {
      const name = def.displayProperties?.name
      return name && normalize(name).includes(wanted) && def.displayProperties?.icon
    }) ?? null
  )
}

function findWeaponType(table: Record<string, AnyDef>, wantedName: string) {
  const wanted = normalize(wantedName)

  return (
    Object.values(table).find((def) => {
      const displayName = def.displayProperties?.name
      const itemType = def.itemTypeDisplayName

      return (
        def.displayProperties?.icon &&
        ((displayName && normalize(displayName) === wanted) || (itemType && normalize(itemType) === wanted))
      )
    }) ?? null
  )
}

function withUrl(icon?: string) {
  if (!icon) {
    return null
  }

  return icon.startsWith('http') ? icon : `${DESTINY_ICON_BASE_URL}${icon}`
}

async function main() {
  const manifest = await fetchJson(BUNGIE_MANIFEST_URL)
  const paths = manifest.Response.jsonWorldComponentContentPaths.en as Record<string, string>

  const tablesToLoad = {
    classes: 'DestinyClassDefinition',
    damageTypes: 'DestinyDamageTypeDefinition',
    inventoryItems: 'DestinyInventoryItemDefinition',
    itemCategories: 'DestinyItemCategoryDefinition',
    presentationNodes: 'DestinyPresentationNodeDefinition',
    seasons: 'DestinySeasonDefinition',
    records: 'DestinyRecordDefinition',
  } as const

  const tables: Record<string, Record<string, AnyDef>> = {}

  for (const [key, tableName] of Object.entries(tablesToLoad)) {
    const tablePath = paths[tableName]

    if (!tablePath) {
      tables[key] = {}
      continue
    }

    tables[key] = await fetchJson(`${DESTINY_ICON_BASE_URL}${tablePath}`)
  }

  const output = {
    classes: destinyIconTargets.classes.map((target) => {
      const def =
        findByName(tables.classes, target.name) ||
        findByName(tables.presentationNodes, target.name) ||
        findByName(tables.records, target.name)

      return {
        ...target,
        hash: def?.hash ?? null,
        icon: def?.displayProperties?.icon ?? null,
        iconUrl: withUrl(def?.displayProperties?.icon),
      }
    }),

    elements: destinyIconTargets.elements.map((target) => {
      const def =
        findByName(tables.damageTypes, target.name) ||
        findByName(tables.inventoryItems, target.name) ||
        findByName(tables.presentationNodes, target.name)

      return {
        ...target,
        hash: def?.hash ?? null,
        icon: def?.displayProperties?.icon ?? null,
        iconUrl: withUrl(def?.displayProperties?.icon),
      }
    }),

    subclasses: destinyIconTargets.subclasses.map((target) => {
      const def =
        findByName(tables.inventoryItems, target.name) ||
        findByName(tables.presentationNodes, target.name) ||
        findByName(tables.records, target.name)

      return {
        ...target,
        hash: def?.hash ?? null,
        icon: def?.displayProperties?.icon ?? null,
        iconUrl: withUrl(def?.displayProperties?.icon),
      }
    }),

    weaponTypes: destinyIconTargets.weaponTypes.map((target) => {
      const def =
        findByName(tables.itemCategories, target.name) ||
        findWeaponType(tables.inventoryItems, target.name) ||
        findByName(tables.presentationNodes, target.name)

      return {
        ...target,
        hash: def?.hash ?? null,
        icon: def?.displayProperties?.icon ?? null,
        iconUrl: withUrl(def?.displayProperties?.icon),
      }
    }),

    seasons: destinyIconTargets.seasons.map((target) => {
      const def =
        findByName(tables.seasons, target.name) ||
        findByName(tables.presentationNodes, target.displayName ?? target.name) ||
        findByName(tables.records, target.displayName ?? target.name)

      return {
        ...target,
        hash: def?.hash ?? null,
        icon: def?.displayProperties?.icon ?? null,
        iconUrl: withUrl(def?.displayProperties?.icon),
      }
    }),

    expansions: destinyIconTargets.expansions.map((target) => {
      const def =
        findByName(tables.presentationNodes, target.name) ||
        findByName(tables.inventoryItems, target.name) ||
        findByName(tables.records, target.name)

      return {
        ...target,
        hash: def?.hash ?? null,
        icon: def?.displayProperties?.icon ?? null,
        iconUrl: withUrl(def?.displayProperties?.icon),
      }
    }),
  }

  const outputPath = path.join(process.cwd(), 'src/data/destinyIcons.generated.json')
  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, JSON.stringify(output, null, 2))

  console.log(`Wrote ${outputPath}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
