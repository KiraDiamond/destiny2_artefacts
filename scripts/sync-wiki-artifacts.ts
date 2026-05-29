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
  const entries = await mapWithConcurrency(WIKI_CONFIGS, 6, async (config) => {
    const raw = await fetchRaw(config)
    const rows =
      config.provider === 'd2wiki'
        ? parseD2WikiRows(raw)
        : parseDestinypediaRows(raw)

    const mods = rows.map((row) => buildModRecord(config, row))
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
  })

  const overrides = Object.fromEntries(entries)

  const fileContents = [
    "import type { Artifact } from './types'",
    '',
    "type ArtifactOverride = Partial<Omit<Artifact, 'id'>>",
    '',
    `export const WIKI_ARTIFACT_OVERRIDES: Record<string, ArtifactOverride> = ${JSON.stringify(overrides, null, 2)}`,
    '',
  ].join('\n')

  await fs.writeFile(OUTPUT_FILE, fileContents, 'utf8')
  console.log(`Wrote ${Object.keys(overrides).length} artifact overrides to ${OUTPUT_FILE}`)
}

async function fetchRaw(config: WikiConfig) {
  const baseUrl =
    config.provider === 'd2wiki'
      ? 'https://d2.destinygamewiki.com/wiki/'
      : 'https://www.destinypedia.com/'
  const response = await fetch(`${baseUrl}${config.title}?action=raw`)
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

function buildModRecord(config: WikiConfig, row: ParsedRow): ArtifactModRecord {
  const tags = inferTags(row.name, row.description, row.type)

  return {
    column: row.column,
    cost: row.cost,
    description: row.description,
    iconPath: row.iconFile
      ? `https://d2.destinygamewiki.com/wiki/Special:FilePath/${encodeURIComponent(row.iconFile).replace(/%20/g, '_')}`
      : null,
    name: row.name,
    row: row.row,
    source: config.label,
    tags,
    type: row.type,
  }
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
