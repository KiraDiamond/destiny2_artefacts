export const ELEMENT_TAGS = [
  'Solar',
  'Arc',
  'Void',
  'Stasis',
  'Strand',
  'Prismatic',
  'Kinetic',
  'Mixed',
  'Unknown',
] as const

export const WEAPON_TAGS = [
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
] as const

export const CHAMPION_TAGS = ['Anti-Barrier', 'Overload', 'Unstoppable'] as const

export type ElementTag = (typeof ELEMENT_TAGS)[number]
export type WeaponTag = (typeof WEAPON_TAGS)[number]
export type ChampionTag = (typeof CHAMPION_TAGS)[number]

export type SourceLink = {
  label: string
  url: string
}

export type ArtifactMod = {
  name: string
  description: string
  column: number
  row: number
  needsVerification?: boolean
  tags: {
    elements: ElementTag[]
    weapons: WeaponTag[]
    champions: ChampionTag[]
    subclasses: string[]
    mechanics: string[]
  }
  source: string
}

export type Artifact = {
  id: string
  seasonNumber: number | null
  seasonName: string | null
  episodeName: string | null
  artifactName: string
  artifactType: string
  startDate: string
  endDate: string
  releaseDateNote?: string | null
  expansionEra: string
  elementFocus: ElementTag[]
  weaponFocus: WeaponTag[]
  championFocus: ChampionTag[]
  confidence: 'high' | 'medium' | 'low' | 'needs-verification'
  notes: string
  sources: SourceLink[]
  iconPath: string | null
  itemHash: number | null
  mods: ArtifactMod[]
}
