import { ARTIFACTS } from '../src/data/artifacts'
import {
  CHAMPION_TAGS,
  ELEMENT_TAGS,
  WEAPON_TAGS,
  type Artifact,
  type ArtifactMod,
} from '../src/data/types'

const elementSet = new Set(ELEMENT_TAGS)
const weaponSet = new Set(WEAPON_TAGS)
const championSet = new Set(CHAMPION_TAGS)

const failures: string[] = []
const artifactIds = new Set<string>()

for (const artifact of ARTIFACTS) {
  validateArtifact(artifact)
}

if (failures.length > 0) {
  console.error('Artifact data validation failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log(`Validated ${ARTIFACTS.length} artifact records successfully.`)

function validateArtifact(artifact: Artifact) {
  if (!artifact.id) {
    failures.push('Artifact is missing id.')
  } else if (artifactIds.has(artifact.id)) {
    failures.push(`${artifact.id}: duplicate artifact id.`)
  } else {
    artifactIds.add(artifact.id)
  }

  if (!artifact.seasonName && !artifact.episodeName) {
    failures.push(`${artifact.id}: expected seasonName or episodeName.`)
  }

  if (!artifact.artifactName) {
    failures.push(`${artifact.id}: expected artifactName.`)
  }

  if (!artifact.sources || artifact.sources.length === 0) {
    failures.push(`${artifact.id}: expected at least one source.`)
  }

  validateDateString(artifact.id, 'startDate', artifact.startDate)
  validateDateString(artifact.id, 'endDate', artifact.endDate)

  validateEnumArray(artifact.id, 'elementFocus', artifact.elementFocus, elementSet)
  validateEnumArray(artifact.id, 'weaponFocus', artifact.weaponFocus, weaponSet)
  validateEnumArray(artifact.id, 'championFocus', artifact.championFocus, championSet)

  artifact.mods.forEach((entry, index) => validateMod(artifact.id, entry, index))
}

function validateMod(artifactId: string, mod: ArtifactMod, index: number) {
  if (!mod.name) {
    failures.push(`${artifactId}: mod ${index + 1} is missing name.`)
  }

  if (!mod.description && !mod.needsVerification) {
    failures.push(`${artifactId}: mod "${mod.name}" needs a description or needsVerification flag.`)
  }

  if (!Number.isInteger(mod.column) || mod.column < 1) {
    failures.push(`${artifactId}: mod "${mod.name}" has invalid column.`)
  }

  if (!Number.isInteger(mod.row) || mod.row < 1) {
    failures.push(`${artifactId}: mod "${mod.name}" has invalid row.`)
  }

  validateEnumArray(`${artifactId}:${mod.name}`, 'tags.elements', mod.tags.elements, elementSet)
  validateEnumArray(`${artifactId}:${mod.name}`, 'tags.weapons', mod.tags.weapons, weaponSet)
  validateEnumArray(`${artifactId}:${mod.name}`, 'tags.champions', mod.tags.champions, championSet)
}

function validateDateString(scope: string, label: string, value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    failures.push(`${scope}: invalid ${label} format "${value}". Expected YYYY-MM-DD.`)
    return
  }

  const parsed = new Date(`${value}T00:00:00Z`)
  if (Number.isNaN(parsed.getTime())) {
    failures.push(`${scope}: invalid ${label} value "${value}".`)
  }
}

function validateEnumArray<T extends string>(
  scope: string,
  label: string,
  values: readonly T[],
  allowed: Set<string>,
) {
  for (const value of values) {
    if (!allowed.has(value)) {
      failures.push(`${scope}: invalid ${label} value "${value}".`)
    }
  }
}
