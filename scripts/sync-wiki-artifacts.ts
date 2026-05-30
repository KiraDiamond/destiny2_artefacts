import fs from 'node:fs/promises'
import path from 'node:path'

type ArtifactModRecord = {
  column: number
  cost: number | null
  description: string
  iconPath: string | null
  name: string
  row: number
  source: string
  tags: {
    champions: string[]
    elements: string[]
    mechanics: string[]
    subclasses: string[]
    weapons: string[]
  }
  type: string | null
}

type WikiConfig = {
  confidence: 'medium' | 'high'
  id: string
  label: string
  notes: string
  provider: 'd2wiki' | 'destinypedia'
  title: string
  url: string
}

type ParsedRow = {
  column: number
  cost: number | null
  description: string
  detailPageTitle: string | null
  iconFile: string | null
  name: string
  row: number
  type: string | null
}

const OUTPUT_FILE = path.resolve(process.cwd(), 'src/data/wikiArtifactOverrides.ts')
const ICON_OUTPUT_DIR = path.resolve(process.cwd(), 'public/artifact-icons')
const ICON_LOOKUP_OUTPUT_FILE = path.resolve(process.cwd(), 'src/data/iconLookup.ts')
const BUNGIE_BASE_URL = 'https://www.bungie.net'
const EXTRA_ICON_HARVEST_NAMES = [
  'Authorized Mod: Scavenger',
  'Crystalized Auto Loader',
  'Defilbrillating Blast',
  'Limiting Break',
  'Impact, Shock, Gravity',
  'Gravitic-Voltaic Charge',
  'Expert Handling',
  'Fastest Draw',
  'Kinetic Synthesis',
  'Reload at Range',
  'Riposte',
  'Power from Pain',
  'Armorsmith',
  'Counter Energy',
  'Combination Argent Blade',
  'Singularity Blade',
  'Kinetic Rupture',
  "Sniper's Meditation",
  'Sword Storm Combo',
  'Void Infestation',
] as const
const MANIFEST_NAME_ALIASES: Record<string, string[]> = {
  [normalizeIconLookupKey('Authorized Mod: Scavenger')]: ['Authorized Mods: Scavenger'],
  [normalizeIconLookupKey('Defilbrillating Blast')]: ['Defibrillating Blast'],
  [normalizeIconLookupKey('Limiting Break')]: ['Limit Break'],
}

const ELEMENT_ORDER = ['Solar', 'Arc', 'Void', 'Stasis', 'Strand', 'Prismatic', 'Kinetic', 'Mixed', 'Unknown']
const WEAPON_ORDER = [
  'Auto Rifle',
  'Bow',
  'Scout Rifle',
  'Pulse Rifle',
  'Hand Cannon',
  'Sidearm',
  'SMG',
  'Shotgun',
  'Sniper Rifle',
  'Fusion Rifle',
  'Glaive',
  'Grenade Launcher',
  'Rocket Launcher',
  'Sword',
  'Machine Gun',
  'Trace Rifle',
  'Linear Fusion Rifle',
  'Mixed',
  'Unknown',
]
const CHAMPION_ORDER = ['Anti-Barrier', 'Overload', 'Unstoppable']

const WIKI_CONFIGS: WikiConfig[] = [
  {
    id: 'season-of-the-undying',
    title: 'The_Gate_Lord%27s_Eye',
    label: "Destiny 2 Wiki The Gate Lord's Eye page",
    url: 'https://d2.destinygamewiki.com/wiki/The_Gate_Lord%27s_Eye',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-dawn',
    title: 'The_Lantern_of_Osiris',
    label: 'Destiny 2 Wiki The Lantern of Osiris page',
    url: 'https://d2.destinygamewiki.com/wiki/The_Lantern_of_Osiris',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-worthy',
    title: 'Warmind_Khanjali',
    label: 'Destiny 2 Wiki Warmind Khanjali page',
    url: 'https://d2.destinygamewiki.com/wiki/Warmind_Khanjali',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-arrivals',
    title: 'Seed_of_Silver_Wings',
    label: 'Destiny 2 Wiki Seed of Silver Wings page',
    url: 'https://d2.destinygamewiki.com/wiki/Seed_of_Silver_Wings',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-hunt',
    title: 'Fang_of_Xivu_Arath',
    label: 'Destiny 2 Wiki Fang of Xivu Arath page',
    url: 'https://d2.destinygamewiki.com/wiki/Fang_of_Xivu_Arath',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-chosen',
    title: 'Bell_of_Conquests',
    label: 'Destiny 2 Wiki Bell of Conquests page',
    url: 'https://d2.destinygamewiki.com/wiki/Bell_of_Conquests',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-splicer',
    title: 'Paradrome_Cube',
    label: 'Destiny 2 Wiki Paradrome Cube page',
    url: 'https://d2.destinygamewiki.com/wiki/Paradrome_Cube',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-lost',
    title: 'Wayfinder%27s_Compass',
    label: "Destiny 2 Wiki Wayfinder's Compass page",
    url: 'https://d2.destinygamewiki.com/wiki/Wayfinder%27s_Compass',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-risen',
    title: 'Synaptic_Spear',
    label: 'Destiny 2 Wiki Synaptic Spear page',
    url: 'https://d2.destinygamewiki.com/wiki/Synaptic_Spear',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-haunted',
    title: 'Nightmare_Harvester',
    label: 'Destiny 2 Wiki Nightmare Harvester page',
    url: 'https://d2.destinygamewiki.com/wiki/Nightmare_Harvester',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-plunder',
    title: 'Skeleton_Key',
    label: 'Destiny 2 Wiki Skeleton Key page',
    url: 'https://d2.destinygamewiki.com/wiki/Skeleton_Key',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-seraph',
    title: 'Seraph_Cipher',
    label: 'Destiny 2 Wiki Seraph Cipher page',
    url: 'https://d2.destinygamewiki.com/wiki/Seraph_Cipher',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-defiance',
    title: 'Ascendant_Scepter',
    label: 'Destiny 2 Wiki Ascendant Scepter page',
    url: 'https://d2.destinygamewiki.com/wiki/Ascendant_Scepter',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-deep',
    title: 'NPA_Repulsion_Regulator',
    label: 'Destiny 2 Wiki NPA Repulsion Regulator page',
    url: 'https://d2.destinygamewiki.com/wiki/NPA_Repulsion_Regulator',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-witch',
    title: 'Acolyte%27s_Staff',
    label: "Destiny 2 Wiki Acolyte's Staff page",
    url: 'https://d2.destinygamewiki.com/wiki/Acolyte%27s_Staff',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'season-of-the-wish',
    title: 'Queensfoil_Censer',
    label: 'Destiny 2 Wiki Queensfoil Censer page',
    url: 'https://d2.destinygamewiki.com/wiki/Queensfoil_Censer',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'episode-echoes',
    title: 'Hunter%27s_Journal',
    label: "Destiny 2 Wiki Hunter's Journal page",
    url: 'https://d2.destinygamewiki.com/wiki/Hunter%27s_Journal',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'episode-revenant',
    title: 'Slayer_Baron_Apothecary_Satchel',
    label: 'Destiny 2 Wiki Slayer Baron Apothecary Satchel page',
    url: 'https://d2.destinygamewiki.com/wiki/Slayer_Baron_Apothecary_Satchel',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'episode-heresy',
    title: 'Tablet_of_Ruin',
    label: 'Destiny 2 Wiki Tablet of Ruin page',
    url: 'https://d2.destinygamewiki.com/wiki/Tablet_of_Ruin',
    provider: 'd2wiki',
    confidence: 'medium',
    notes: 'The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.',
  },
  {
    id: 'ash-and-iron',
    title: 'Encrypted_Data_Disk',
    label: 'Destinypedia Encrypted Data Disk page',
    url: 'https://www.destinypedia.com/Encrypted_Data_Disk',
    provider: 'destinypedia',
    confidence: 'medium',
    notes: 'The perk grid is sourced from Destinypedia and should be cross-checked against Bungie previews and first-party archival captures as more references stabilize.',
  },
]

await main()

async function main() {
  await fs.mkdir(ICON_OUTPUT_DIR, { recursive: true })
  const iconCache = new Map<string, Promise<string | null>>()
  const localIconLookup = await buildLocalIconLookup()
  const manifestIconLookup = await buildManifestIconLookup()

  const entries = (
    await mapWithConcurrency(WIKI_CONFIGS, 4, async (config) => {
      try {
        const raw = await fetchRaw(config)
        const rows =
          config.provider === 'd2wiki'
            ? parseD2WikiRows(raw)
            : parseDestinypediaRows(raw)

        const mods = await Promise.all(
          rows.map((row) => buildModRecord(config, row, iconCache, localIconLookup, manifestIconLookup)),
        )
        return [config.id, {
          championFocus: collectFocus(mods.flatMap((mod) => mod.tags.champions), CHAMPION_ORDER, []),
          confidence: config.confidence,
          elementFocus: collectFocus(
            mods.flatMap((mod) => mod.tags.elements),
            ELEMENT_ORDER,
            ['Unknown'],
          ),
          mods,
          notes: config.notes,
          sources: [{ label: config.label, url: config.url }],
          weaponFocus: collectFocus(
            mods.flatMap((mod) => mod.tags.weapons),
            WEAPON_ORDER,
            ['Unknown'],
          ),
        }] as const
      } catch (error) {
        console.warn(`Skipping ${config.id}: ${String(error)}`)
        return null
      }
    })
  ).filter(Boolean)

  const overrides = Object.fromEntries(entries)
  await harvestExtraIcons(iconCache, manifestIconLookup)

  const fileContents = [
    "import type { Artifact } from './types'",
    '',
    "type ArtifactOverride = Partial<Omit<Artifact, 'id'>>",
    '',
    `export const WIKI_ARTIFACT_OVERRIDES: Record<string, ArtifactOverride> = ${JSON.stringify(overrides, null, 2)}`,
    '',
  ].join('\n')

  await fs.writeFile(OUTPUT_FILE, fileContents, 'utf8')
  await writeIconLookupFile(await buildLocalIconLookup())
  console.log(`Wrote ${Object.keys(overrides).length} artifact overrides to ${OUTPUT_FILE}`)
}

async function fetchRaw(config: WikiConfig) {
  const baseUrl =
    config.provider === 'd2wiki'
      ? 'https://d2.destinygamewiki.com/wiki/'
      : 'https://www.destinypedia.com/'
  const response = await fetchWithRetry(`${baseUrl}${config.title}?action=raw`)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${config.title}: ${response.status}`)
  }

  return response.text()
}

function parseD2WikiRows(raw: string) {
  const sectionMatch = raw.match(/==(Mods|Perks)==([\s\S]*?)(?:\n==[^=]|$)/)
  if (!sectionMatch) {
    throw new Error('Could not find Mods/Perks section.')
  }

  const tierRegex = /===Tier\s+(\d+)===([\s\S]*?)(?=\n===Tier\s+\d+===|$)/g
  const rows: ParsedRow[] = []
  let tierMatch: RegExpExecArray | null

  while ((tierMatch = tierRegex.exec(sectionMatch[2]))) {
    const column = Number(tierMatch[1])
    const tableMatch = tierMatch[2].match(/\{\|[\s\S]*?\|\}/)
    if (!tableMatch) {
      continue
    }

    const tableRows = tableMatch[0]
      .split('\n|-')
      .map((entry) => entry.trim())
      .filter((entry) => entry.startsWith('|'))

    let rowIndex = 1
    for (const tableRow of tableRows) {
      const normalized = tableRow
        .replace(/\r/g, '')
        .replace(/\n\|\|(?![}-])/g, ' || ')
        .replace(/\n\|(?![}!-])/g, ' || ')
        .replace(/\n+/g, ' ')
        .trim()

      const cells = normalized
        .replace(/^\|/, '')
        .split(/\s*\|\|\s*/)
        .map((cell) => cell.trim())
        .filter(Boolean)

      if (cells.length < 3) {
        continue
      }

      const nameCell = parseWikiLink(cells[0])
      const iconFile = parseIconFile(cells[1])
      const description = cleanWikiText(cells[cells.length - 1])
      const type = cells.length >= 4 ? cleanWikiText(cells[2]) : 'Artifact Perk'

      rows.push({
        column,
        cost: null,
        description,
        detailPageTitle: nameCell.target,
        iconFile,
        name: nameCell.label,
        row: rowIndex,
        type,
      })
      rowIndex += 1
    }
  }

  return rows
}

function parseDestinypediaRows(raw: string) {
  const sectionMatch = raw.match(/==Seasonal Artifact Mods==([\s\S]*?)(?:\n==Lore==|$)/)
  if (!sectionMatch) {
    throw new Error('Could not find Seasonal Artifact Mods section.')
  }

  const columnRegex = /===Column\s+(\d+)===([\s\S]*?)(?=\n===Column\s+\d+===|$)/g
  const rows: ParsedRow[] = []
  let columnMatch: RegExpExecArray | null

  while ((columnMatch = columnRegex.exec(sectionMatch[1]))) {
    const column = Number(columnMatch[1])
    const bulletLines = columnMatch[2]
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith("*'''"))

    let rowIndex = 1
    for (const bulletLine of bulletLines) {
      const match = bulletLine.match(/\*'''(.+?)''':\s*(.+)$/)
      if (!match) {
        continue
      }

      rows.push({
        column,
        cost: null,
        description: cleanWikiText(match[2]),
        detailPageTitle: null,
        iconFile: null,
        name: cleanWikiText(match[1]),
        row: rowIndex,
        type: 'Artifact Perk',
      })
      rowIndex += 1
    }
  }

  return rows
}

async function buildModRecord(
  config: WikiConfig,
  row: ParsedRow,
  iconCache: Map<string, Promise<string | null>>,
  localIconLookup: Map<string, string>,
  manifestIconLookup: Map<string, string>,
): Promise<ArtifactModRecord> {
  const tags = inferTags(row.name, row.description, row.type)
  const resolvedIconFile = row.iconFile ?? await resolveIconFileFromModPage(row.name)
  const cachedWikiIconPath = resolvedIconFile
    ? await cacheIcon(resolvedIconFile, iconCache)
    : null
  const iconPath =
    cachedWikiIconPath
    ?? localIconLookup.get(normalizeIconLookupKey(row.name))
    ?? await resolveManifestIconPath(row.name, iconCache, manifestIconLookup)

  return {
    column: row.column,
    cost: row.cost,
    description: row.description,
    iconPath,
    name: row.name,
    row: row.row,
    source: config.label,
    tags,
    type: row.type,
  }
}

async function cacheIcon(
  iconFile: string,
  iconCache: Map<string, Promise<string | null>>,
) {
  const existing = iconCache.get(iconFile)
  if (existing) {
    return existing
  }

  const task = downloadIcon(iconFile)
  iconCache.set(iconFile, task)
  return task
}

async function downloadIcon(iconFile: string) {
  const remoteUrl = `https://d2.destinygamewiki.com/wiki/Special:FilePath/${encodeURIComponent(iconFile).replace(/%20/g, '_')}`
  const response = await fetchWithRetry(remoteUrl)
  if (!response.ok) {
    return null
  }

  const outputName = sanitizeIconFileName(iconFile)
  const outputPath = path.join(ICON_OUTPUT_DIR, outputName)
  const buffer = Buffer.from(await response.arrayBuffer())
  await fs.writeFile(outputPath, buffer)
  return `/artifact-icons/${outputName}`
}

function sanitizeIconFileName(fileName: string) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, '_')
}

async function buildLocalIconLookup() {
  const lookup = new Map<string, string>()
  const entries = await fs.readdir(ICON_OUTPUT_DIR, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isFile()) {
      continue
    }

    const key = normalizeIconLookupKey(entry.name)
    if (!lookup.has(key)) {
      lookup.set(key, `/artifact-icons/${entry.name}`)
    }
  }

  return lookup
}

async function harvestExtraIcons(
  iconCache: Map<string, Promise<string | null>>,
  manifestIconLookup: Map<string, string>,
) {
  for (const name of EXTRA_ICON_HARVEST_NAMES) {
    const iconFile = await resolveIconFileFromModPage(name)
    if (iconFile) {
      await cacheIcon(iconFile, iconCache)
      continue
    }

    await resolveManifestIconPath(name, iconCache, manifestIconLookup)
  }
}

async function writeIconLookupFile(lookup: Map<string, string>) {
  const sorted = Object.fromEntries(
    Array.from(lookup.entries()).sort(([left], [right]) => left.localeCompare(right)),
  )

  const contents = [
    'export const ICON_LOOKUP: Record<string, string> = ',
    `${JSON.stringify(sorted, null, 2)}`,
    '',
  ].join('\n')

  await fs.writeFile(ICON_LOOKUP_OUTPUT_FILE, contents, 'utf8')
}

async function resolveIconFileFromModPage(name: string) {
  for (const title of buildModPageTitleVariants(name)) {
    const response = await fetchWithRetry(
      `https://d2.destinygamewiki.com/wiki/${encodeURIComponent(title)}?action=raw`,
      2,
    )
    if (!response.ok) {
      continue
    }

    const raw = await response.text()
    const imageMatch = raw.match(/\|\s*Image\s*=\s*\[\[File:(.+?\.(?:png|jpg|jpeg|webp|svg))/i)
    if (imageMatch) {
      return imageMatch[1].trim().replace(/ /g, '_')
    }
  }

  return null
}

async function buildManifestIconLookup() {
  const manifestResponse = await fetchWithRetry(`${BUNGIE_BASE_URL}/Platform/Destiny2/Manifest/`)
  if (!manifestResponse.ok) {
    throw new Error(`Failed to fetch Bungie manifest index: ${manifestResponse.status}`)
  }

  const manifest = await manifestResponse.json() as {
    Response?: {
      jsonWorldComponentContentPaths?: {
        en?: Record<string, string>
      }
    }
  }
  const perkPath = manifest.Response?.jsonWorldComponentContentPaths?.en?.DestinySandboxPerkDefinition
  if (!perkPath) {
    throw new Error('Bungie manifest index did not include DestinySandboxPerkDefinition.')
  }

  const perkResponse = await fetchWithRetry(`${BUNGIE_BASE_URL}${perkPath}`)
  if (!perkResponse.ok) {
    throw new Error(`Failed to fetch Bungie perk manifest: ${perkResponse.status}`)
  }

  const definitions = await perkResponse.json() as Record<string, {
    displayProperties?: {
      icon?: string
      name?: string
    }
  }>

  const lookup = new Map<string, string>()
  for (const definition of Object.values(definitions)) {
    const name = definition.displayProperties?.name?.trim()
    const icon = definition.displayProperties?.icon?.trim()
    if (!name || !icon) {
      continue
    }

    const key = normalizeIconLookupKey(name)
    if (!lookup.has(key)) {
      lookup.set(key, icon)
    }
  }

  return lookup
}

async function resolveManifestIconPath(
  name: string,
  iconCache: Map<string, Promise<string | null>>,
  manifestIconLookup: Map<string, string>,
) {
  for (const candidate of getManifestLookupCandidates(name)) {
    const remotePath = manifestIconLookup.get(candidate)
    if (!remotePath) {
      continue
    }

    return cacheManifestIcon(name, remotePath, iconCache)
  }

  return null
}

function cacheManifestIcon(
  name: string,
  remotePath: string,
  iconCache: Map<string, Promise<string | null>>,
) {
  const cacheKey = `manifest:${remotePath}`
  const existing = iconCache.get(cacheKey)
  if (existing) {
    return existing
  }

  const task = downloadManifestIcon(name, remotePath)
  iconCache.set(cacheKey, task)
  return task
}

async function downloadManifestIcon(name: string, remotePath: string) {
  const remoteUrl = remotePath.startsWith('http') ? remotePath : `${BUNGIE_BASE_URL}${remotePath}`
  const response = await fetchWithRetry(remoteUrl)
  if (!response.ok) {
    return null
  }

  const extensionMatch = remotePath.match(/\.(png|jpg|jpeg|webp|svg)(?:\?|$)/i)
  const extension = extensionMatch?.[1] ?? 'png'
  const outputName = sanitizeIconFileName(`${name}_icon.${extension}`)
  const outputPath = path.join(ICON_OUTPUT_DIR, outputName)
  const buffer = Buffer.from(await response.arrayBuffer())
  await fs.writeFile(outputPath, buffer)
  return `/artifact-icons/${outputName}`
}

function getManifestLookupCandidates(name: string) {
  const normalized = normalizeIconLookupKey(name)
  return [
    normalized,
    ...(MANIFEST_NAME_ALIASES[normalized] ?? []).map((alias) => normalizeIconLookupKey(alias)),
  ]
}

function buildModPageTitleVariants(name: string) {
  const variants = new Set<string>()
  const base = name.replaceAll(' ', '_')
  variants.add(base)
  variants.add(base.replaceAll(':', ''))
  variants.add(base.replace('Authorized_Mod:_', 'Authorized_Mods:_'))
  variants.add(base.replace('Submachine_Gun', 'SMG'))
  variants.add(base.replace('Breechloaded_Grenade_Launcher', 'Grenade_Launcher'))
  variants.add(base.replace('Argent_Blade', 'Combination_Argent_Blade'))
  variants.add(base.replace('Shieldcrush', 'Shield_Crush'))
  variants.add(base.replace('Concussive_Reload', 'Concussive_Reloader'))
  variants.add(base.replace('Crystalized', 'Crystallized'))
  variants.add(base.replace('Defilbrillating', 'Defibrillating'))
  return Array.from(variants)
}

async function fetchWithRetry(url: string, attempts = 3) {
  let lastError: unknown

  for (let index = 0; index < attempts; index += 1) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000)

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'user-agent': 'destiny2-artefacts-sync/1.0',
        },
      })
      clearTimeout(timeout)

      if ((response.status === 429 || response.status >= 500) && index < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, 750 * (index + 1)))
        continue
      }

      return response
    } catch (error) {
      clearTimeout(timeout)
      lastError = error
      await new Promise((resolve) => setTimeout(resolve, 750 * (index + 1)))
    }
  }

  throw lastError
}

function normalizeIconLookupKey(value: string) {
  return value
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/['’]/g, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\bicon\d*\b/gi, ' ')
    .replace(/\bseasonal\b/gi, ' ')
    .replace(/[()]/g, ' ')
    .replace(/[^a-z0-9 ]+/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function parseWikiLink(value: string) {
  const match = value.match(/\[\[(.+?)\]\]/)
  if (!match) {
    const cleaned = cleanWikiText(value)
    return { label: cleaned, target: cleaned || null }
  }

  const inner = match[1]
  const [target, label] = inner.split('|')
  return {
    label: cleanWikiText(label ?? target),
    target: target?.trim() ?? null,
  }
}

function parseIconFile(value: string) {
  const match = value.match(/File:(.+?\.(?:png|jpg|jpeg|webp|svg))/i)
  return match ? match[1].trim().replace(/ /g, '_') : null
}

function cleanWikiText(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/\{\{Icon\|([^}]+)\}\}/gi, '$1 ')
    .replace(/\{\{([^}]+)\}\}/g, '$1')
    .replace(/\[\[File:[^\]]+\]\]/gi, '')
    .replace(/\[\[(.+?)\|(.+?)\]\]/g, '$2')
    .replace(/\[\[(.+?)\]\]/g, '$1')
    .replace(/'{2,}/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function inferTags(name: string, description: string, type: string | null) {
  const text = `${name} ${description} ${type ?? ''}`
  const lower = text.toLowerCase()

  const elements = ELEMENT_ORDER.filter((element) => {
    if (element === 'Mixed' || element === 'Unknown') {
      return false
    }

    return lower.includes(element.toLowerCase())
  })

  const weapons = WEAPON_ORDER.filter((weapon) => {
    if (weapon === 'Mixed' || weapon === 'Unknown') {
      return false
    }

    if (weapon === 'SMG') {
      return lower.includes('smg') || lower.includes('submachine gun')
    }

    return lower.includes(weapon.toLowerCase())
  })

  const champions = CHAMPION_ORDER.filter((champion) =>
    lower.includes(champion.toLowerCase()) ||
    (champion === 'Anti-Barrier' && lower.includes('shield-piercing')) ||
    (champion === 'Overload' && lower.includes('disrupt')) ||
    (champion === 'Unstoppable' && lower.includes('stuns unshielded')),
  )

  const mechanics = [
    'Armor Charge',
    'Orb of Power',
    'Scorch',
    'Ignite',
    'Jolt',
    'Blind',
    'Weaken',
    'Devour',
    'Volatile',
    'Radiant',
    'Amplified',
    'Woven Mail',
    'Frost Armor',
    'Freeze',
    'Slow',
    'Suspend',
    'Unravel',
    'Threadling',
    'Tangle',
    'Bolt Charge',
    'Elemental Orb',
    'Elemental Pickup',
    'Overcharged',
    'Damage Resistance',
    'Damage Buff',
    'Reload',
    'Heal',
    'Void Overshield',
    'Restoration',
    'Finisher',
    'Origin Trait',
  ].filter((mechanic) => lower.includes(mechanic.toLowerCase()))

  const subclasses = ['Solar', 'Arc', 'Void', 'Stasis', 'Strand', 'Prismatic'].filter((subclass) =>
    lower.includes(`${subclass.toLowerCase()} subclass`),
  )

  if (elements.length > 1 && !elements.includes('Mixed')) {
    elements.push('Mixed')
  }

  if (weapons.length > 1 && !weapons.includes('Mixed')) {
    weapons.push('Mixed')
  }

  return {
    champions,
    elements: uniqueOrdered(elements, ELEMENT_ORDER),
    mechanics: unique(mechanics),
    subclasses,
    weapons: uniqueOrdered(weapons, WEAPON_ORDER),
  }
}

function collectFocus(values: string[], order: string[], fallback: string[]) {
  const result = uniqueOrdered(values, order)
  return result.length > 0 ? result : fallback
}

function unique(values: string[]) {
  return Array.from(new Set(values))
}

function uniqueOrdered(values: string[], order: string[]) {
  const found = new Set(values)
  return order.filter((entry) => found.has(entry))
}

async function mapWithConcurrency<T, R>(
  values: T[],
  concurrency: number,
  mapper: (value: T) => Promise<R>,
) {
  const results: R[] = new Array(values.length)
  let currentIndex = 0

  await Promise.all(
    Array.from({ length: Math.min(concurrency, values.length) }, async () => {
      while (currentIndex < values.length) {
        const index = currentIndex
        currentIndex += 1
        results[index] = await mapper(values[index])
      }
    }),
  )

  return results
}
