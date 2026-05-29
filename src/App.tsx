import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import './App.css'
import { ARTIFACTS } from './data/artifacts'
import {
  CHAMPION_TAGS,
  ELEMENT_TAGS,
  type Artifact,
  type ArtifactMod,
  type ChampionTag,
  type ElementTag,
  type WeaponTag,
  WEAPON_TAGS,
} from './data/types'

type SortMode =
  | 'newest'
  | 'oldest'
  | 'artifact-az'
  | 'season-az'

type FilterState = {
  champion: ChampionTag | 'all'
  element: ElementTag | 'all'
  era: string
  seasonId: string
  weapon: WeaponTag | 'all'
}

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const DETAIL_HASH_PREFIX = '#artifact/'
const LEGACY_COLUMN_THRESHOLDS = [0, 2, 5, 9, 14]
const MODERN_COLUMN_THRESHOLDS = [0, 3, 5, 7, 10]
const MODERN_UNLOCK_CAP = 12

const elementToneMap: Record<ElementTag, string> = {
  Solar: 'solar',
  Arc: 'arc',
  Void: 'void',
  Stasis: 'stasis',
  Strand: 'strand',
  Prismatic: 'prismatic',
  Kinetic: 'kinetic',
  Mixed: 'mixed',
  Unknown: 'unknown',
}

const championToneMap: Record<ChampionTag, string> = {
  'Anti-Barrier': 'barrier',
  Overload: 'overload',
  Unstoppable: 'unstoppable',
}

const weaponToneMap: Partial<Record<WeaponTag, string>> = {
  Bow: 'weapon-bow',
  'Pulse Rifle': 'weapon-pulse',
  'Scout Rifle': 'weapon-scout',
  'Auto Rifle': 'weapon-auto',
  'Hand Cannon': 'weapon-hand-cannon',
  'Sniper Rifle': 'weapon-sniper',
  Sword: 'weapon-sword',
  SMG: 'weapon-smg',
  Sidearm: 'weapon-sidearm',
  Shotgun: 'weapon-shotgun',
  'Grenade Launcher': 'weapon-grenade-launcher',
  'Linear Fusion Rifle': 'weapon-linear',
  'Machine Gun': 'weapon-machine-gun',
  'Fusion Rifle': 'weapon-fusion',
  Glaive: 'weapon-glaive',
  'Trace Rifle': 'weapon-trace',
  'Rocket Launcher': 'weapon-rocket',
}

const seasonOptions = ARTIFACTS.map((artifact) => ({
  id: artifact.id,
  label: getSeasonLabel(artifact),
}))

const eraOptions = Array.from(new Set(ARTIFACTS.map((artifact) => artifact.expansionEra)))

function App() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [sortMode, setSortMode] = useState<SortMode>('newest')
  const [filters, setFilters] = useState<FilterState>({
    seasonId: 'all',
    era: 'all',
    element: 'all',
    weapon: 'all',
    champion: 'all',
  })
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>(() => readHashArtifactId())
  const [selectedModKey, setSelectedModKey] = useState<string | null>(() => {
    const artifact = getArtifactById(readHashArtifactId())
    return artifact?.mods[0] ? getModKey(artifact.mods[0]) : null
  })
  const [unlockPreview, setUnlockPreview] = useState(() => {
    const artifact = getArtifactById(readHashArtifactId())
    return artifact ? getArtifactUnlockCap(artifact) : 0
  })
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'failed'>('idle')

  function syncArtifactSelection(id: string | null) {
    const artifact = getArtifactById(id)
    setSelectedArtifactId(id)
    setSelectedModKey(artifact?.mods[0] ? getModKey(artifact.mods[0]) : null)
    setUnlockPreview(artifact ? getArtifactUnlockCap(artifact) : 0)
    setShareState('idle')
  }

  function updateHash(id: string | null) {
    if (id) {
      const nextUrl = `${window.location.pathname}${window.location.search}${DETAIL_HASH_PREFIX}${id}`
      window.history.pushState({}, '', nextUrl)
      syncArtifactSelection(id)
      return
    }

    const nextUrl = `${window.location.pathname}${window.location.search}`
    window.history.pushState({}, '', nextUrl)
    syncArtifactSelection(null)
  }

  function openArtifact(id: string) {
    updateHash(id)
  }

  function closeArtifact() {
    updateHash(null)
  }

  useEffect(() => {
    const handleHashChange = () => {
      syncArtifactSelection(readHashArtifactId())
    }

    window.addEventListener('popstate', handleHashChange)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('popstate', handleHashChange)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    if (!selectedArtifactId) {
      document.body.style.overflow = ''
      document.title = 'Destiny 2 Artifact Codex'
      return
    }

    const artifact = ARTIFACTS.find((entry) => entry.id === selectedArtifactId)
    document.body.style.overflow = 'hidden'
    document.title = artifact
      ? `${artifact.artifactName} | Destiny 2 Artifact Codex`
      : 'Destiny 2 Artifact Codex'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const nextUrl = `${window.location.pathname}${window.location.search}`
        window.history.pushState({}, '', nextUrl)
        setSelectedArtifactId(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedArtifactId])

  const filteredArtifacts = useMemo(
    () =>
      ARTIFACTS.filter((artifact) => matchesArtifact(artifact, deferredQuery, filters)).sort((left, right) =>
        compareArtifacts(left, right, sortMode),
      ),
    [deferredQuery, filters, sortMode],
  )

  const selectedArtifact = useMemo(
    () => (selectedArtifactId ? getArtifactById(selectedArtifactId) : null),
    [selectedArtifactId],
  )

  const selectedMod = selectedArtifact && selectedModKey
    ? findModByKey(selectedArtifact.mods, selectedModKey)
    : null

  const completeArtifacts = ARTIFACTS.filter((artifact) => artifact.mods.length > 0).length

  async function handleShare() {
    if (!selectedArtifact) {
      return
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareState('copied')
    } catch {
      setShareState('failed')
    }
  }

  return (
    <>
      <main className="shell">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Recovered archive</p>
            <h1>Destiny 2 Artifact Codex</h1>
            <p className="subtitle">
              Browse recovered seasonal artifact grids, inspect each perk in an in-game-inspired view,
              and trace every artifact back to its source page.
            </p>
            <div className="hero-metrics" aria-label="Catalog summary">
              <div>
                <span>{ARTIFACTS.length}</span>
                <small>Artifacts tracked</small>
              </div>
              <div>
                <span>{completeArtifacts}</span>
                <small>Recovered grids</small>
              </div>
              <div>
                <span>{ARTIFACTS.filter((artifact) => artifact.confidence === 'high').length}</span>
                <small>High confidence</small>
              </div>
            </div>
          </div>
          <div className="hero-diagram" aria-hidden="true">
            <div className="orb-ring orb-ring-a" />
            <div className="orb-ring orb-ring-b" />
            <div className="orb-core" />
            <div className="sigil sigil-solar" />
            <div className="sigil sigil-arc" />
            <div className="sigil sigil-void" />
            <div className="sigil sigil-stasis" />
            <div className="sigil sigil-strand" />
            <div className="sigil sigil-prismatic" />
          </div>
        </section>

        <section className="controls-panel" aria-label="Search and filter artifacts">
          <div className="search-field">
            <label htmlFor="artifact-search">Search</label>
            <input
              id="artifact-search"
              type="search"
              placeholder="Search artifacts, mods, perks, weapons, or elements"
              value={query}
              onChange={(event) => {
                const nextValue = event.target.value
                startTransition(() => setQuery(nextValue))
              }}
            />
          </div>

          <div className="filter-grid">
            <FilterSelect
              id="season-filter"
              label="Season / Episode"
              value={filters.seasonId}
              onChange={(value) => setFilters((current) => ({ ...current, seasonId: value }))}
              options={[
                { value: 'all', label: 'All seasons / episodes' },
                ...seasonOptions.map((option) => ({ value: option.id, label: option.label })),
              ]}
            />
            <FilterSelect
              id="era-filter"
              label="Year / expansion era"
              value={filters.era}
              onChange={(value) => setFilters((current) => ({ ...current, era: value }))}
              options={[
                { value: 'all', label: 'All eras' },
                ...eraOptions.map((era) => ({ value: era, label: era })),
              ]}
            />
            <FilterSelect
              id="element-filter"
              label="Element focus"
              value={filters.element}
              onChange={(value) =>
                setFilters((current) => ({
                  ...current,
                  element: value as ElementTag | 'all',
                }))
              }
              options={[
                { value: 'all', label: 'Any element focus' },
                ...ELEMENT_TAGS.map((element) => ({ value: element, label: element })),
              ]}
            />
            <FilterSelect
              id="weapon-filter"
              label="Weapon focus"
              value={filters.weapon}
              onChange={(value) =>
                setFilters((current) => ({
                  ...current,
                  weapon: value as WeaponTag | 'all',
                }))
              }
              options={[
                { value: 'all', label: 'Any weapon focus' },
                ...WEAPON_TAGS.map((weapon) => ({ value: weapon, label: weapon })),
              ]}
            />
            <FilterSelect
              id="champion-filter"
              label="Champion focus"
              value={filters.champion}
              onChange={(value) =>
                setFilters((current) => ({
                  ...current,
                  champion: value as ChampionTag | 'all',
                }))
              }
              options={[
                { value: 'all', label: 'Any champion focus' },
                ...CHAMPION_TAGS.map((champion) => ({
                  value: champion,
                  label: champion,
                })),
              ]}
            />
            <FilterSelect
              id="sort-filter"
              label="Sort"
              value={sortMode}
              onChange={(value) => setSortMode(value as SortMode)}
              options={[
                { value: 'newest', label: 'Newest first' },
                { value: 'oldest', label: 'Oldest first' },
                { value: 'artifact-az', label: 'Alphabetical by artifact' },
                { value: 'season-az', label: 'Alphabetical by season' },
              ]}
            />
          </div>
        </section>

        <section className="results-panel" aria-live="polite">
          <div className="results-header">
            <div>
              <p className="section-label">Catalog</p>
              <h2>{filteredArtifacts.length} matching artifacts</h2>
            </div>
            <p className="section-note">
              Grid focus tags are now recovered from sourced perk lists instead of placeholder unknown values.
            </p>
          </div>

          {filteredArtifacts.length === 0 ? (
            <div className="empty-state">
              <h3>No artifacts matched this filter set.</h3>
              <p>Reset one or more filters, or search by a broader season, weapon, or element tag.</p>
            </div>
          ) : (
            <div className="artifact-grid">
              {filteredArtifacts.map((artifact) => (
                <article key={artifact.id} className="artifact-card">
                  <div className="artifact-card__media">
                    {artifact.iconPath ? (
                      <img
                        src={`https://www.bungie.net${artifact.iconPath}`}
                        alt={`${artifact.artifactName} icon`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="artifact-card__placeholder" aria-hidden="true">
                        <span>Artifact</span>
                      </div>
                    )}
                    <span className={`status-badge ${artifact.confidence === 'high' ? 'verified' : 'recovered'}`}>
                      {artifact.confidence === 'high' ? 'High confidence' : 'Recovered grid'}
                    </span>
                  </div>

                  <div className="artifact-card__body">
                    <p className="artifact-card__season">{getSeasonLabel(artifact)}</p>
                    <h3>{artifact.artifactName}</h3>
                    <p className="artifact-card__meta">
                      {artifact.seasonNumber ? `Season ${artifact.seasonNumber}` : 'Season number unknown'}
                    </p>
                    <p className="artifact-card__dates">{formatDateRange(artifact)}</p>
                    <p className="artifact-card__era">{artifact.expansionEra}</p>

                    <ChipRow label="Element focus">
                      {artifact.elementFocus.map((element) => (
                        <TagChip key={element} tone={elementToneMap[element]}>
                          {element}
                        </TagChip>
                      ))}
                    </ChipRow>

                    <ChipRow label="Weapon focus">
                      {artifact.weaponFocus.map((weapon) => (
                        <TagChip key={weapon} tone={weaponToneMap[weapon] ?? 'weapon-default'}>
                          {weapon}
                        </TagChip>
                      ))}
                    </ChipRow>

                    <ChipRow label="Champion mods">
                      {artifact.championFocus.length > 0 ? (
                        artifact.championFocus.map((champion) => (
                          <TagChip key={champion} tone={championToneMap[champion]}>
                            {champion}
                          </TagChip>
                        ))
                      ) : (
                        <TagChip tone="unknown">Unconfirmed</TagChip>
                      )}
                    </ChipRow>

                    <button
                      type="button"
                      className="view-button"
                      onClick={() => openArtifact(artifact.id)}
                    >
                      Inspect artifact
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {selectedArtifact ? (
        <div className="modal-backdrop inspector-backdrop" onClick={closeArtifact}>
          <section
            className="artifact-inspector"
            role="dialog"
            aria-modal="true"
            aria-labelledby="artifact-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="artifact-inspector__header">
              <div className="artifact-inspector__title-group">
                <div className="artifact-inspector__icon-frame">
                  {selectedArtifact.iconPath ? (
                    <img
                      src={`https://www.bungie.net${selectedArtifact.iconPath}`}
                      alt={`${selectedArtifact.artifactName} icon`}
                    />
                  ) : (
                    <div className="artifact-inspector__icon-fallback" aria-hidden="true">
                      Artifact
                    </div>
                  )}
                </div>
                <div>
                  <p className="artifact-inspector__eyebrow">{getSeasonLabel(selectedArtifact)}</p>
                  <h2 id="artifact-detail-title">{selectedArtifact.artifactName}</h2>
                  <p className="artifact-inspector__subhead">
                    Artifact | {selectedArtifact.expansionEra} | {formatDateRange(selectedArtifact)}
                  </p>
                </div>
              </div>

              <div className="artifact-inspector__actions">
                <button type="button" className="share-button" onClick={handleShare}>
                  {shareState === 'copied'
                    ? 'Copied link'
                    : shareState === 'failed'
                      ? 'Copy failed'
                      : 'Copy URL'}
                </button>
                <button type="button" className="close-button" onClick={closeArtifact} aria-label="Close artifact details">
                  Close
                </button>
              </div>
            </header>

            {selectedArtifact.mods.length === 0 ? (
              <div className="artifact-inspector__empty">
                <div className="detail-empty">
                  <h3>Needs mod data</h3>
                  <p>{selectedArtifact.notes}</p>
                </div>
              </div>
            ) : (
              <div className="artifact-inspector__body">
                <section className="artifact-board-panel">
                  <div className="artifact-board-panel__top">
                    <div className="artifact-board-panel__availability">
                      <p>Acquired</p>
                      <strong>{unlockPreview}</strong>
                    </div>
                    <div className="artifact-board-panel__slider">
                      <label htmlFor="unlock-preview">Unlock preview</label>
                      <input
                        id="unlock-preview"
                        type="range"
                        min={0}
                        max={getArtifactUnlockCap(selectedArtifact)}
                        value={unlockPreview}
                        onChange={(event) => setUnlockPreview(Number(event.target.value))}
                      />
                    </div>
                  </div>

                  <div className="artifact-board-shell">
                    <div className="artifact-board">
                      {buildInspectorColumns(selectedArtifact.mods).map((column, columnIndex) => (
                        <div key={`${selectedArtifact.id}-column-${columnIndex + 1}`} className="artifact-board__column">
                          {column.map((mod, rowIndex) => {
                            if (!mod) {
                              return <div key={`${selectedArtifact.id}-empty-${columnIndex + 1}-${rowIndex + 1}`} className="artifact-tile artifact-tile--ghost" aria-hidden="true" />
                            }

                            const modKey = getModKey(mod)
                            const active = selectedModKey === modKey
                            const unlocked = isModUnlocked(selectedArtifact, mod, unlockPreview)

                            return (
                              <button
                                key={modKey}
                                type="button"
                                className="artifact-tile"
                                data-active={active}
                                data-locked={!unlocked}
                                onMouseEnter={() => setSelectedModKey(modKey)}
                                onFocus={() => setSelectedModKey(modKey)}
                                onClick={() => setSelectedModKey(modKey)}
                                aria-pressed={active}
                              >
                                {mod.iconPath ? (
                                  <img src={mod.iconPath} alt="" loading="lazy" />
                                ) : (
                                  <span className="artifact-tile__fallback" aria-hidden="true">
                                    {getModInitials(mod.name)}
                                  </span>
                                )}
                                {mod.cost !== null ? (
                                  <span className="artifact-tile__cost">{mod.cost}</span>
                                ) : null}
                              </button>
                            )
                          })}
                        </div>
                      ))}
                    </div>

                    <div className="artifact-board__thresholds" aria-hidden="true">
                      {getArtifactTierThresholds(selectedArtifact).map((threshold, index) => (
                        <div key={`${selectedArtifact.id}-threshold-${index + 1}`} className="artifact-board__threshold">
                          <span>{threshold}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <aside className="artifact-detail-panel">
                  {selectedMod ? (
                    <ArtifactDetailCard
                      artifact={selectedArtifact}
                      mod={selectedMod}
                      unlocked={isModUnlocked(selectedArtifact, selectedMod, unlockPreview)}
                    />
                  ) : null}

                  <section className="artifact-detail-panel__meta">
                    <div>
                      <p className="detail-label">Confidence</p>
                      <p>{selectedArtifact.confidence}</p>
                    </div>
                    <div>
                      <p className="detail-label">Notes</p>
                      <p>{selectedArtifact.notes}</p>
                      {selectedArtifact.releaseDateNote ? (
                        <p className="detail-footnote">{selectedArtifact.releaseDateNote}</p>
                      ) : null}
                    </div>
                    <div>
                      <p className="detail-label">Sources</p>
                      <ul className="source-list">
                        {selectedArtifact.sources.map((source) => (
                          <li key={`${selectedArtifact.id}-${source.url}`}>
                            <a href={source.url} target="_blank" rel="noreferrer">
                              {source.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </aside>
              </div>
            )}
          </section>
        </div>
      ) : null}
    </>
  )
}

function ArtifactDetailCard({
  artifact,
  mod,
  unlocked,
}: {
  artifact: Artifact
  mod: ArtifactMod
  unlocked: boolean
}) {
  const requirement = getArtifactUnlockRequirement(artifact, mod)
  const requirementLabel =
    requirement === 0
      ? 'Available by default'
      : `Must acquire ${requirement} artifact ${usesLegacyArtifactUnlocks(artifact) ? 'mods' : 'perks'}`

  const detailTags = [
    ...mod.tags.elements.map((element) => ({ tone: elementToneMap[element], value: element })),
    ...mod.tags.weapons.map((weapon) => ({
      tone: weaponToneMap[weapon] ?? 'weapon-default',
      value: weapon,
    })),
    ...mod.tags.champions.map((champion) => ({
      tone: championToneMap[champion],
      value: champion,
    })),
    ...mod.tags.mechanics.slice(0, 6).map((mechanic) => ({ tone: 'mechanic', value: mechanic })),
  ]

  return (
    <section className="artifact-detail-card" data-locked={!unlocked}>
      <div className="artifact-detail-card__header">
        <p className="artifact-detail-card__type">{mod.type ?? 'Artifact Perk'}</p>
        <h3>{mod.name}</h3>
      </div>

      <div className="artifact-detail-card__requirement" data-locked={!unlocked}>
        {requirementLabel}
      </div>

      {mod.cost !== null ? (
        <div className="artifact-detail-card__cost">
          <span>{mod.cost}</span>
          <small>Energy cost</small>
        </div>
      ) : null}

      <p className="artifact-detail-card__description">{cleanDescription(mod.description)}</p>

      {detailTags.length > 0 ? (
        <div className="artifact-detail-card__tags">
          {detailTags.map((tag) => (
            <TagChip key={`${mod.name}-${tag.value}`} tone={tag.tone}>
              {tag.value}
            </TagChip>
          ))}
        </div>
      ) : null}

      <p className="artifact-detail-card__source">{mod.source}</p>
    </section>
  )
}

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
}) {
  return (
    <div className="filter-field">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={`${id}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function ChipRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="chip-row">
      <p>{label}</p>
      <div>{children}</div>
    </div>
  )
}

function TagChip({
  tone,
  children,
}: {
  tone: string
  children: ReactNode
}) {
  return (
    <span className="tag-chip" data-tone={tone}>
      {children}
    </span>
  )
}

function getSeasonLabel(artifact: Artifact) {
  if (artifact.episodeName) {
    return artifact.seasonNumber
      ? `Season ${artifact.seasonNumber} | Episode ${artifact.episodeName}`
      : `Episode ${artifact.episodeName}`
  }

  return artifact.seasonNumber
    ? `Season ${artifact.seasonNumber} | ${artifact.seasonName}`
    : artifact.seasonName ?? 'Unknown season'
}

function formatDateRange(artifact: Artifact) {
  const start = formatDateLabel(artifact.startDate)
  const end = formatDateLabel(artifact.endDate)
  if (!start || !end) {
    return 'Date unavailable'
  }

  return `${start} - ${end}`
}

function formatDateLabel(value: string) {
  const parsed = new Date(`${value}T00:00:00Z`)
  if (Number.isNaN(parsed.getTime())) {
    return null
  }

  return DATE_FORMATTER.format(parsed)
}

function readHashArtifactId() {
  const hash = window.location.hash
  if (!hash.startsWith(DETAIL_HASH_PREFIX)) {
    return null
  }

  return hash.slice(DETAIL_HASH_PREFIX.length) || null
}

function matchesArtifact(artifact: Artifact, query: string, filters: FilterState) {
  const normalizedQuery = query.trim().toLowerCase()
  const haystack = [
    artifact.artifactName,
    artifact.seasonName,
    artifact.episodeName,
    artifact.expansionEra,
    artifact.notes,
    artifact.mods.map((mod) => mod.name).join(' '),
    artifact.mods.map((mod) => mod.description).join(' '),
    artifact.elementFocus.join(' '),
    artifact.weaponFocus.join(' '),
    artifact.championFocus.join(' '),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  const matchesQuery = normalizedQuery.length === 0 || haystack.includes(normalizedQuery)
  const matchesSeason = filters.seasonId === 'all' || artifact.id === filters.seasonId
  const matchesEra = filters.era === 'all' || artifact.expansionEra === filters.era
  const matchesElement =
    filters.element === 'all' || artifact.elementFocus.includes(filters.element)
  const matchesWeapon =
    filters.weapon === 'all' || artifact.weaponFocus.includes(filters.weapon)
  const matchesChampion =
    filters.champion === 'all' || artifact.championFocus.includes(filters.champion)

  return (
    matchesQuery &&
    matchesSeason &&
    matchesEra &&
    matchesElement &&
    matchesWeapon &&
    matchesChampion
  )
}

function compareArtifacts(left: Artifact, right: Artifact, sortMode: SortMode) {
  if (sortMode === 'newest') {
    return right.startDate.localeCompare(left.startDate)
  }

  if (sortMode === 'oldest') {
    return left.startDate.localeCompare(right.startDate)
  }

  if (sortMode === 'artifact-az') {
    return left.artifactName.localeCompare(right.artifactName)
  }

  return getSeasonLabel(left).localeCompare(getSeasonLabel(right))
}

function usesLegacyArtifactUnlocks(artifact: Artifact) {
  return (artifact.seasonNumber ?? 999) < 20
}

function getArtifactTierThresholds(artifact: Artifact) {
  return usesLegacyArtifactUnlocks(artifact) ? LEGACY_COLUMN_THRESHOLDS : MODERN_COLUMN_THRESHOLDS
}

function getArtifactUnlockRequirement(artifact: Artifact, mod: ArtifactMod) {
  const thresholds = getArtifactTierThresholds(artifact)
  return thresholds[mod.column - 1] ?? thresholds.at(-1) ?? 0
}

function getArtifactUnlockCap(artifact: Artifact) {
  if (usesLegacyArtifactUnlocks(artifact)) {
    return LEGACY_COLUMN_THRESHOLDS.at(-1) ?? artifact.mods.length
  }

  return MODERN_UNLOCK_CAP
}

function isModUnlocked(artifact: Artifact, mod: ArtifactMod, unlockPreview: number) {
  return unlockPreview >= getArtifactUnlockRequirement(artifact, mod)
}

function buildInspectorColumns(mods: ArtifactMod[]) {
  const maxColumn = Math.max(5, ...mods.map((mod) => mod.column))
  const maxRow = Math.max(1, ...mods.map((mod) => mod.row))

  return Array.from({ length: maxColumn }, (_, columnIndex) =>
    Array.from({ length: maxRow }, (_, rowIndex) =>
      mods.find((mod) => mod.column === columnIndex + 1 && mod.row === rowIndex + 1) ?? null,
    ),
  )
}

function getModKey(mod: ArtifactMod) {
  return `${mod.column}-${mod.row}-${mod.name}`
}

function findModByKey(mods: ArtifactMod[], key: string) {
  return mods.find((mod) => getModKey(mod) === key) ?? null
}

function getArtifactById(id: string | null) {
  return id ? ARTIFACTS.find((artifact) => artifact.id === id) ?? null : null
}

function getModInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 3)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function cleanDescription(description: string) {
  return description.replaceAll('[Shield-Piercing]', '').replaceAll('[Disruption]', '').replaceAll('[Stagger]', '')
}

export default App
