import { ARTIFACTS } from './artifacts'
import { ARTIFACT_EDITORIAL_NOTES } from './artifactEditorial'
import type { Artifact, ChampionTag, ElementTag, WeaponTag } from './types'

export type ArchiveRoleTag = 'Support' | 'DPS'
export type ArchiveDpsContext = 'Solo' | 'Fireteam'
export type ArchiveView = 'artifacts' | 'timeline' | 'perks'

export type WeaponChampionPair = {
  id: string
  weapon: WeaponTag
  weaponIconPath: string | null
  championTarget: ChampionTag
  championIconPath: string
  label: string
}

export type ArchiveArtifactCard = {
  id: string
  name: string
  artifactIconPath: string | null
  seasonCoverPath: string | null
  seasonCoverAssetStatus: 'official' | 'placeholder'
  perkCount: number
  seasonNumber: number | null
  seasonLabel: string
  dlcLabel: string
  primaryElement: ElementTag | 'Unknown'
  elementIconPath: string | null
  elementTags: ElementTag[]
  elementCounts: Partial<Record<ElementTag, number>>
  roleTags: ArchiveRoleTag[]
  dpsContexts: ArchiveDpsContext[]
  summary: string
  keyPerks: string[]
  weaponChampionPairs: WeaponChampionPair[]
  sourceArtifact: Artifact
}

export type TimelineEntry = {
  id: string
  label: string
  type: 'DLC' | 'Season'
  iconOrArtPath: string | null
  ordering: number
  assetStatus: 'official' | 'placeholder'
}

export type TimelineSection = {
  id: string
  label: string
  type: 'DLC'
  iconOrArtPath: string | null
  ordering: number
  assetStatus: 'official' | 'placeholder'
  relatedSeasons: TimelineEntry[]
}

export type TimelineNode = {
  id: string
  label: string
  type: 'DLC' | 'Season'
  iconOrArtPath: string | null
  ordering: number
  assetStatus: 'official' | 'placeholder'
  lane: 'top' | 'bottom'
  depth: 'near' | 'far'
}

const LEGACY_TIMELINE_SECTIONS: TimelineSection[] = [
  {
    id: 'timeline-destiny-2',
    label: 'Destiny 2',
    type: 'DLC',
    iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-1-destiny-2-base-game.jpg',
    ordering: 1,
    assetStatus: 'placeholder',
    relatedSeasons: [
      {
        id: 'timeline-red-war',
        label: 'The Red War',
        type: 'Season',
        iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-1-destiny-2-base-game.jpg',
        ordering: 1,
        assetStatus: 'placeholder',
      },
    ],
  },
  {
    id: 'timeline-curse-of-osiris',
    label: 'Curse of Osiris',
    type: 'DLC',
    iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-2-curse-of-osiris-destiny-2.jpg',
    ordering: 2,
    assetStatus: 'placeholder',
    relatedSeasons: [],
  },
  {
    id: 'timeline-warmind',
    label: 'Warmind',
    type: 'DLC',
    iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-3-warmind-destiny-2.jpg',
    ordering: 3,
    assetStatus: 'placeholder',
    relatedSeasons: [],
  },
  {
    id: 'timeline-forsaken',
    label: 'Forsaken',
    type: 'DLC',
    iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-4-forsaken-destiny-2.jpg',
    ordering: 4,
    assetStatus: 'placeholder',
    relatedSeasons: [
      {
        id: 'timeline-season-4',
        label: 'Season of the Outlaw',
        type: 'Season',
        iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-4-forsaken-destiny-2.jpg',
        ordering: 4,
        assetStatus: 'placeholder',
      },
      {
        id: 'timeline-season-5',
        label: 'Season of the Forge',
        type: 'Season',
        iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-5-season-of-the-forge-destiny-2.jpg',
        ordering: 5,
        assetStatus: 'placeholder',
      },
      {
        id: 'timeline-season-6',
        label: 'Season of the Drifter',
        type: 'Season',
        iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-6-season-of-the-drifter-destiny-2.jpg',
        ordering: 6,
        assetStatus: 'placeholder',
      },
      {
        id: 'timeline-season-7',
        label: 'Season of Opulence',
        type: 'Season',
        iconOrArtPath: 'https://shacknews-www.s3.amazonaws.com/assets/editorial/2020/07/season-7-season-of-opulence-destiny-2.jpg',
        ordering: 7,
        assetStatus: 'placeholder',
      },
    ],
  },
]

const ELEMENT_DISPLAY_ORDER: ElementTag[] = ['Arc', 'Solar', 'Void', 'Stasis', 'Strand', 'Prismatic', 'Kinetic']
const CHAMPION_DISPLAY_ORDER: ChampionTag[] = ['Anti-Barrier', 'Overload', 'Unstoppable']
const DLC_DISPLAY_ORDER = [
  'The Edge of Fate',
  'The Final Shape',
  'Lightfall',
  'The Witch Queen',
  'Beyond Light',
  'Shadowkeep',
] as const
const TIMELINE_DLC_ORDER = [
  'Shadowkeep',
  'Beyond Light',
  'The Witch Queen',
  'Lightfall',
  'The Final Shape',
  'The Edge of Fate',
] as const

export const ELEMENT_ICON_PATHS: Partial<Record<ElementTag, string>> = {
  Arc: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_092d066688b879c807c3b460afdd61e6.png',
  Solar: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_2a1773e10968f2d088b97c22b22bba9e.png',
  Void: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_ceb2f6197dccf3958bb31cc783eb97a0.png',
  Stasis: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_530c4c3e7981dc2aefd24fd3293482bf.png',
  Strand: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_b2fe51a94f3533f97079dfa0d27a4096.png',
  Kinetic: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_3385a924fd3ccb92c343ade19f19a370.png',
  Prismatic: '/artifact-icons/Prismatic_Transfer_icon.png',
}

export const WEAPON_ICON_PATHS: Partial<Record<WeaponTag, string>> = {
  'Auto Rifle': '/weapon-glyphs/auto-rifle.png',
  Bow: '/weapon-glyphs/bow.png',
  'Scout Rifle': '/weapon-glyphs/scout-rifle.png',
  'Pulse Rifle': '/weapon-glyphs/pulse-rifle.png',
  'Hand Cannon': '/weapon-glyphs/hand-cannon.png',
  Sidearm: '/weapon-glyphs/sidearm.png',
  SMG: '/weapon-glyphs/smg.png',
  Shotgun: '/weapon-glyphs/shotgun.png',
  'Sniper Rifle': '/weapon-glyphs/sniper-rifle.png',
  'Fusion Rifle': '/weapon-glyphs/fusion-rifle.png',
  Glaive: '/weapon-glyphs/glaive.png',
  'Grenade Launcher': '/weapon-glyphs/grenade-launcher.png',
  'Rocket Launcher': '/weapon-glyphs/rocket-launcher.png',
  Sword: '/weapon-glyphs/sword.png',
  'Machine Gun': '/weapon-glyphs/machine-gun.png',
  'Trace Rifle': '/weapon-glyphs/trace-rifle.png',
  'Linear Fusion Rifle': '/weapon-glyphs/linear-fusion-rifle.png',
}

export const CHAMPION_ICON_PATHS: Record<ChampionTag, string> = {
  'Anti-Barrier': '/artifact-icons/Anti-Barrier_Rounds_icon.png',
  Overload: '/artifact-icons/Overload_Rounds_icon_3.png',
  Unstoppable: '/artifact-icons/Unstoppable_Burst_icon.png',
}

const WEAPON_ORDER: WeaponTag[] = [
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
]

const SEASON_COVER_PATHS: Record<string, string> = {
  'season-of-the-undying': 'https://help.bungie.net/hc/article_attachments/29834295970452',
  'season-of-dawn': 'https://help.bungie.net/hc/article_attachments/29835228402836',
  'season-of-the-worthy': 'https://help.bungie.net/hc/article_attachments/29834133128340',
  'season-of-arrivals': 'https://help.bungie.net/hc/article_attachments/29834190741524',
  'season-of-the-hunt': 'https://help.bungie.net/hc/article_attachments/29835228460180',
  'season-of-the-chosen': 'https://help.bungie.net/hc/article_attachments/29835190236692',
  'season-of-the-splicer': 'https://help.bungie.net/hc/article_attachments/29834203927700',
  'season-of-the-lost': 'https://help.bungie.net/hc/article_attachments/29834211195668',
  'season-of-the-risen': 'https://help.bungie.net/hc/article_attachments/29834819814676',
  'season-of-the-haunted': 'https://help.bungie.net/hc/article_attachments/29834835156116',
  'season-of-plunder': 'https://help.bungie.net/hc/article_attachments/29834791200788',
  'season-of-the-seraph': 'https://help.bungie.net/hc/article_attachments/29833645457812',
  'season-of-defiance': 'https://help.bungie.net/hc/article_attachments/29833937504916',
  'season-of-the-deep': 'https://help.bungie.net/hc/article_attachments/29834715723284',
  'season-of-the-witch': 'https://help.bungie.net/hc/article_attachments/29834133521940',
  'season-of-the-wish': 'https://help.bungie.net/hc/article_attachments/29834269274772',
  'episode-echoes': 'https://help.bungie.net/hc/article_attachments/29835265818900',
  'episode-revenant': 'https://help.bungie.net/hc/article_attachments/31079052551700',
  'episode-heresy': 'https://help.bungie.net/hc/article_attachments/34521781698452',
  'the-edge-of-fate': 'https://help.bungie.net/hc/article_attachments/39002112545172',
  'ash-and-iron': 'https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltb7eccce1db920b6c/68bf1011ea30983beeec2baa/2025_Ash_%26_Iron_Press_Kit_Activity_COMPRESSED_06.jpg',
}

const TIMELINE_DLC_ART: Record<(typeof TIMELINE_DLC_ORDER)[number], string> = {
  Shadowkeep: SEASON_COVER_PATHS['season-of-the-undying'],
  'Beyond Light': SEASON_COVER_PATHS['season-of-the-hunt'],
  'The Witch Queen': SEASON_COVER_PATHS['season-of-the-risen'],
  Lightfall: 'https://help.bungie.net/hc/article_attachments/29833937504916',
  'The Final Shape': 'https://help.bungie.net/hc/article_attachments/29834133599124',
  'The Edge of Fate': 'https://help.bungie.net/hc/article_attachments/39002112545172',
}

const SUPPORT_DEBUFF_PATTERNS = [
  /\bweaken(?:ed|ing)?\b/,
  /\bexhaust(?:ed|ing)?\b/,
  /\bsever(?:ed|ing)?\b/,
  /\bdisrupt(?:ion|ing|s|ed)?\b/,
  /\bsuppress(?:ed|ing|ion)?\b/,
  /\bblind(?:ed|ing)?\b/,
  /\bdisorient(?:ed|ing)?\b/,
  /\bslow(?:ed|ing)?\b/,
  /\bfrozen?\b/,
  /\bsuspend(?:ed|ing)?\b/,
  /\blower(?:ing)? combatant damage output\b/,
  /\breduced outgoing damage\b/,
]

const TEAM_BUFF_PATTERNS = [
  /\bfireteam\b/,
  /\ballied players\b/,
  /\bnearby allies\b/,
  /\ballies\b/,
  /\bteammates?\b/,
  /\bnearby ally\b/,
  /\bfor your fireteam\b/,
]

const SELF_DPS_PATTERNS = [
  /\bbonus damage\b/,
  /\bincreased damage\b/,
  /\bdeal(?:s)? more damage\b/,
  /\bweapon damage\b/,
  /\bsuper damage\b/,
  /\bmelee damage\b/,
  /\bgrenade damage\b/,
  /\bovercharged\b/,
  /\bempower(?:ed|s|ing)?\b/,
  /\bradiant\b/,
  /\bbonus to damage\b/,
  /\bdamage bonus\b/,
  /\bincreases weapon damage\b/,
  /\bincreases their melee damage\b/,
  /\btemporarily increases weapon damage\b/,
  /\bdeal increased damage\b/,
  /\bgrants them bonus damage\b/,
]

const SOLO_CONTEXT_PATTERNS = [
  /\bonly member of your fireteam\b/,
  /\bwhile you are the only member of your fireteam\b/,
  /\bwhile you are alone\b/,
  /\byou gain a temporary bonus to weapon damage\b/,
  /\bgrants bonus .*super damage\b/,
  /\bwhile critically wounded\b/,
]

export const ARCHIVE_ARTIFACT_CARDS: ArchiveArtifactCard[] = ARTIFACTS
  .map((artifact) => {
    const elementCounts = getElementCounts(artifact)
    const elementTags = getSortedElementTags(artifact, elementCounts)
    const primaryElement = getPrimaryElement(artifact, elementCounts, elementTags)
    const roleProfile = deriveRoleProfile(artifact)
    const seasonCoverPath = SEASON_COVER_PATHS[artifact.id] ?? null
    const editorialNote = ARTIFACT_EDITORIAL_NOTES[artifact.id]

    return {
      id: artifact.id,
      name: artifact.artifactName,
      artifactIconPath: artifact.iconPath ? `https://www.bungie.net${artifact.iconPath}` : null,
      seasonCoverPath,
      seasonCoverAssetStatus: seasonCoverPath ? ('official' as const) : ('placeholder' as const),
      perkCount: artifact.mods.length,
      seasonNumber: artifact.seasonNumber,
      seasonLabel: getArchiveSeasonLabel(artifact),
      dlcLabel: getNormalizedDlcLabel(artifact),
      primaryElement,
      elementIconPath: primaryElement !== 'Unknown' ? ELEMENT_ICON_PATHS[primaryElement] ?? null : null,
      elementTags,
      elementCounts,
      roleTags: roleProfile.roleTags,
      dpsContexts: roleProfile.dpsContexts,
      summary: editorialNote?.summary ?? buildArtifactSummary(artifact, elementTags),
      keyPerks: editorialNote?.keyPerks ?? getFallbackKeyPerks(artifact),
      weaponChampionPairs: buildWeaponChampionPairs(artifact),
      sourceArtifact: artifact,
    }
  })
  .sort((left, right) => (right.seasonNumber ?? 0) - (left.seasonNumber ?? 0))

const MODERN_TIMELINE_SECTIONS: TimelineSection[] = TIMELINE_DLC_ORDER.map((dlcLabel, index) => {
  const relatedSeasons: TimelineEntry[] = ARCHIVE_ARTIFACT_CARDS
    .filter((artifact) => getTimelineDlcLabel(artifact.sourceArtifact) === dlcLabel)
    .map((artifact) => ({
      id: `timeline-${artifact.id}`,
      label: artifact.seasonLabel,
      type: 'Season' as const,
      iconOrArtPath: artifact.seasonCoverPath,
      ordering: artifact.seasonNumber ?? 0,
      assetStatus: artifact.seasonCoverPath ? ('official' as const) : ('placeholder' as const),
    }))
    .sort((left, right) => left.ordering - right.ordering)

  return {
    id: `timeline-${dlcLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    label: dlcLabel,
    type: 'DLC',
    iconOrArtPath: TIMELINE_DLC_ART[dlcLabel] ?? relatedSeasons.at(0)?.iconOrArtPath ?? null,
    ordering: index + 1,
    assetStatus: TIMELINE_DLC_ART[dlcLabel] ? 'official' : 'placeholder',
    relatedSeasons,
  }
})

export const TIMELINE_SECTIONS: TimelineSection[] = [
  ...LEGACY_TIMELINE_SECTIONS,
  ...MODERN_TIMELINE_SECTIONS,
]

export const DLC_FILTER_OPTIONS = DLC_DISPLAY_ORDER
  .map((label) => ({
    label,
    count: ARCHIVE_ARTIFACT_CARDS.filter((artifact) => artifact.dlcLabel === label).length,
  }))
  .filter((entry) => entry.count > 0)

export const ELEMENT_FILTER_OPTIONS = ELEMENT_DISPLAY_ORDER
  .map((label) => ({
    label,
    count: ARCHIVE_ARTIFACT_CARDS.filter((artifact) => artifact.elementTags.includes(label)).length,
  }))
  .filter((entry) => entry.count > 0)

function getNormalizedDlcLabel(artifact: Artifact) {
  const era = artifact.expansionEra

  if (artifact.episodeName === 'Heresy') {
    return 'The Final Shape'
  }

  if (era.includes('The Edge of Fate') || era.includes('Year of Prophecy')) {
    return 'The Edge of Fate'
  }

  if (era.includes('The Final Shape')) {
    return 'The Final Shape'
  }

  if (era.includes('Lightfall')) {
    return 'Lightfall'
  }

  if (era.includes('The Witch Queen')) {
    return 'The Witch Queen'
  }

  if (era.includes('Beyond Light')) {
    return 'Beyond Light'
  }

  return 'Shadowkeep'
}

function getTimelineDlcLabel(artifact: Artifact) {
  const seasonNumber = artifact.seasonNumber ?? 0

  if (seasonNumber >= 27) {
    return 'The Edge of Fate'
  }

  if (seasonNumber >= 24) {
    return 'The Final Shape'
  }

  if (seasonNumber >= 20) {
    return 'Lightfall'
  }

  if (seasonNumber >= 16) {
    return 'The Witch Queen'
  }

  if (seasonNumber >= 12) {
    return 'Beyond Light'
  }

  return 'Shadowkeep'
}

function getArchiveSeasonLabel(artifact: Artifact) {
  return artifact.episodeName ?? artifact.seasonName ?? artifact.artifactName
}

function getElementCounts(artifact: Artifact) {
  const counts: Partial<Record<ElementTag, number>> = {}

  for (const mod of artifact.mods) {
    for (const element of mod.tags.elements) {
      if (!ELEMENT_DISPLAY_ORDER.includes(element)) {
        continue
      }

      counts[element] = (counts[element] ?? 0) + 1
    }
  }

  return counts
}

function getSortedElementTags(artifact: Artifact, counts: Partial<Record<ElementTag, number>>) {
  const validFocus = artifact.elementFocus.filter((element): element is ElementTag => ELEMENT_DISPLAY_ORDER.includes(element))
  const focusOrder = new Map(validFocus.map((element, index) => [element, index]))

  return ELEMENT_DISPLAY_ORDER
    .filter((element) => (counts[element] ?? 0) > 0)
    .sort((left, right) => {
      const scoreDiff = (counts[right] ?? 0) - (counts[left] ?? 0)
      if (scoreDiff !== 0) {
        return scoreDiff
      }

      const focusDiff = (focusOrder.get(left) ?? Number.MAX_SAFE_INTEGER) - (focusOrder.get(right) ?? Number.MAX_SAFE_INTEGER)
      if (focusDiff !== 0) {
        return focusDiff
      }

      return ELEMENT_DISPLAY_ORDER.indexOf(left) - ELEMENT_DISPLAY_ORDER.indexOf(right)
    })
}

function getPrimaryElement(
  artifact: Artifact,
  counts: Partial<Record<ElementTag, number>>,
  elementTags: ElementTag[],
) {
  if (elementTags.length === 0) {
    return 'Unknown'
  }

  const topScore = counts[elementTags[0]] ?? 0
  const tied = elementTags.filter((element) => (counts[element] ?? 0) === topScore)

  if (tied.length === 1) {
    return tied[0]
  }

  const focusMatch = artifact.elementFocus.find(
    (element): element is ElementTag => tied.includes(element as ElementTag),
  )

  return focusMatch ?? tied[0]
}

function buildWeaponChampionPairs(artifact: Artifact) {
  const pairs: WeaponChampionPair[] = []
  const seen = new Set<string>()

  for (const mod of artifact.mods) {
    for (const champion of mod.tags.champions) {
      for (const weapon of getPrimaryWeapons(mod.tags.weapons, mod.name, mod.type ?? '')) {
        const key = `${champion}-${weapon}`
        if (seen.has(key)) {
          continue
        }

        seen.add(key)
        pairs.push({
          id: `${artifact.id}-${key}`,
          weapon,
          weaponIconPath: WEAPON_ICON_PATHS[weapon] ?? null,
          championTarget: champion,
          championIconPath: CHAMPION_ICON_PATHS[champion],
          label: `${weapon} counters ${champion}`,
        })
      }
    }
  }

  return pairs
    .sort((left, right) => {
      const championDiff =
        CHAMPION_DISPLAY_ORDER.indexOf(left.championTarget) - CHAMPION_DISPLAY_ORDER.indexOf(right.championTarget)
      if (championDiff !== 0) {
        return championDiff
      }

      return WEAPON_ORDER.indexOf(left.weapon) - WEAPON_ORDER.indexOf(right.weapon)
    })
    .slice(0, 6)
}

function getPrimaryWeapons(weapons: WeaponTag[], name: string, type: string) {
  const validWeapons = weapons.filter((weapon) => !['Mixed', 'Unknown'].includes(weapon))
  if (validWeapons.length > 0) {
    return validWeapons
  }

  return WEAPON_ORDER.filter((weapon) => {
    if (weapon === 'SMG') {
      return textIncludesAny([name, type], ['smg', 'submachine gun'])
    }

    return textIncludesAny([name, type], [weapon.toLowerCase()])
  })
}

function textIncludesAny(values: string[], patterns: string[]) {
  const haystack = values.join(' ').toLowerCase()
  return patterns.some((pattern) => haystack.includes(pattern))
}

function deriveRoleProfile(artifact: Artifact) {
  let support = false
  let dps = false
  const dpsContexts = new Set<ArchiveDpsContext>()

  for (const mod of artifact.mods) {
    const text = `${mod.name} ${mod.description} ${mod.tags.mechanics.join(' ')}`.toLowerCase()
    const hasSupportDebuff = SUPPORT_DEBUFF_PATTERNS.some((pattern) => pattern.test(text))
    const hasTeamBuff = TEAM_BUFF_PATTERNS.some((pattern) => pattern.test(text))
    const hasSelfDps = SELF_DPS_PATTERNS.some((pattern) => pattern.test(text))

    if (hasSupportDebuff || hasTeamBuff) {
      support = true
    }

    if (hasTeamBuff) {
      dpsContexts.add('Fireteam')
    }

    if (hasSelfDps && !hasTeamBuff) {
      dps = true
      dpsContexts.add('Solo')

      if (SOLO_CONTEXT_PATTERNS.some((pattern) => pattern.test(text))) {
        dpsContexts.add('Solo')
      }
    }
  }

  const roleTags: ArchiveRoleTag[] = []

  if (support) {
    roleTags.push('Support')
  }

  if (dps) {
    roleTags.push('DPS')
  }

  return {
    roleTags,
    dpsContexts: Array.from(dpsContexts),
  }
}

function buildArtifactSummary(artifact: Artifact, elementTags: ElementTag[]) {
  const seasonLabel = artifact.episodeName ?? artifact.seasonName ?? artifact.artifactName
  const elements = elementTags.length > 0 ? elementTags.slice(0, 2).join(' and ') : 'mixed'
  return `${seasonLabel} leans ${elements.toLowerCase()} with standout anti-Champion and buildcraft perks.`
}

function getFallbackKeyPerks(artifact: Artifact) {
  const scored = artifact.mods
    .map((mod) => {
      const text = `${mod.name} ${mod.description}`.toLowerCase()
      let score = 0

      if (SUPPORT_DEBUFF_PATTERNS.some((pattern) => pattern.test(text))) {
        score += 5
      }

      if (TEAM_BUFF_PATTERNS.some((pattern) => pattern.test(text))) {
        score += 4
      }

      if (SELF_DPS_PATTERNS.some((pattern) => pattern.test(text))) {
        score += 5
      }

      if (mod.tags.champions.length > 0) {
        score += 2
      }

      if (/\bpowerful combatant\b|\bboss\b|\bsuper\b/.test(text)) {
        score += 2
      }

      if (/\breload speed\b|\bstability\b|\bhandling\b|\btarget acquisition\b|\bscavenger\b|\bammo finder\b/.test(text)) {
        score -= 2
      }

      return {
        name: mod.name,
        score,
      }
    })
    .sort((left, right) => right.score - left.score || left.name.localeCompare(right.name))

  return scored
    .filter((entry) => entry.score > 0)
    .slice(0, 3)
    .map((entry) => entry.name)
}
