import { startTransition, useDeferredValue, useEffect, useState, type ReactNode } from 'react'
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
  seasonId: string
  era: string
  element: ElementTag | 'all'
  weapon: WeaponTag | 'all'
  champion: ChampionTag | 'all'
}

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const DETAIL_HASH_PREFIX = '#artifact/'

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
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'failed'>('idle')

  function updateHash(id: string | null) {
    if (id) {
      const nextUrl = `${window.location.pathname}${window.location.search}${DETAIL_HASH_PREFIX}${id}`
      window.history.pushState({}, '', nextUrl)
      setSelectedArtifactId(id)
      setShareState('idle')
      return
    }

    const nextUrl = `${window.location.pathname}${window.location.search}`
    window.history.pushState({}, '', nextUrl)
    setSelectedArtifactId(null)
    setShareState('idle')
  }

  function openArtifact(id: string) {
    updateHash(id)
  }

  function closeArtifact() {
    updateHash(null)
  }

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedArtifactId(readHashArtifactId())
      setShareState('idle')
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

  const filteredArtifacts = ARTIFACTS.filter((artifact) =>
    matchesArtifact(artifact, deferredQuery, filters),
  ).sort((left, right) => compareArtifacts(left, right, sortMode))

  const selectedArtifact = selectedArtifactId
    ? ARTIFACTS.find((artifact) => artifact.id === selectedArtifactId) ?? null
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
            <p className="eyebrow">Static research archive</p>
            <h1>Destiny 2 Artifact Codex</h1>
            <p className="subtitle">
              Browse every seasonal artifact, perk grid, element focus, and weapon focus.
            </p>
            <div className="hero-metrics" aria-label="Catalog summary">
              <div>
                <span>{ARTIFACTS.length}</span>
                <small>Artifacts seeded</small>
              </div>
              <div>
                <span>{completeArtifacts}</span>
                <small>Detailed grids</small>
              </div>
              <div>
                <span>{ARTIFACTS.length - completeArtifacts}</span>
                <small>Need mod data</small>
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
              placeholder="Search artifacts, seasons, eras, or mods"
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
              Element and weapon focus tags are curated from available mod grids. Unknown values stay
              explicit instead of guessed.
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
                    {artifact.mods.length === 0 ? (
                      <span className="status-badge needs-data">Needs mod data</span>
                    ) : (
                      <span className="status-badge verified">Grid available</span>
                    )}
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
                      View mods
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {selectedArtifact ? (
        <div className="modal-backdrop" onClick={closeArtifact}>
          <section
            className="artifact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="artifact-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="artifact-modal__header">
              <div>
                <p className="artifact-modal__eyebrow">{getSeasonLabel(selectedArtifact)}</p>
                <h2 id="artifact-detail-title">{selectedArtifact.artifactName}</h2>
                <p className="artifact-modal__subhead">
                  {selectedArtifact.expansionEra} | {formatDateRange(selectedArtifact)}
                </p>
              </div>
              <div className="artifact-modal__actions">
                <button type="button" className="share-button" onClick={handleShare}>
                  {shareState === 'copied'
                    ? 'Copied link'
                    : shareState === 'failed'
                      ? 'Copy failed'
                      : 'Copy / share URL'}
                </button>
                <button type="button" className="close-button" onClick={closeArtifact} aria-label="Close artifact details">
                  Close
                </button>
              </div>
            </div>

            <div className="artifact-modal__meta-grid">
              <div>
                <p className="detail-label">Artifact type</p>
                <p>{selectedArtifact.artifactType}</p>
              </div>
              <div>
                <p className="detail-label">Confidence</p>
                <p>{selectedArtifact.confidence}</p>
              </div>
              <div>
                <p className="detail-label">Champion focus</p>
                <p>
                  {selectedArtifact.championFocus.length > 0
                    ? selectedArtifact.championFocus.join(', ')
                    : 'Unconfirmed'}
                </p>
              </div>
            </div>

            <div className="artifact-modal__notes">
              <div>
                <p className="detail-label">Notes / disclaimer</p>
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
            </div>

            {selectedArtifact.mods.length === 0 ? (
              <div className="detail-empty">
                <h3>Needs mod data</h3>
                <p>
                  This artifact is included in the catalog, but its full perk grid still needs to be
                  added and verified against approved sources.
                </p>
              </div>
            ) : (
              <div className="mod-grid">
                {groupModsByColumn(selectedArtifact.mods).map(([column, mods]) => (
                  <section key={column} className="mod-column">
                    <header className="mod-column__header">
                      <p>Column {column}</p>
                      <span>{mods.length} perks</span>
                    </header>
                    <div className="mod-column__list">
                      {mods.map((mod) => (
                        <article key={`${selectedArtifact.id}-${column}-${mod.row}-${mod.name}`} className="mod-card">
                          <div className="mod-card__header">
                            <div>
                              <h3>{mod.name}</h3>
                              <p>
                                Column {mod.column} | Row {mod.row}
                              </p>
                            </div>
                            <span className="mod-source">{mod.source}</span>
                          </div>
                          <p className="mod-card__description">{cleanDescription(mod.description)}</p>
                          <div className="mod-tags">
                            {mod.tags.elements.map((element) => (
                              <TagChip key={`${mod.name}-${element}`} tone={elementToneMap[element]}>
                                {element}
                              </TagChip>
                            ))}
                            {mod.tags.weapons.map((weapon) => (
                              <TagChip key={`${mod.name}-${weapon}`} tone={weaponToneMap[weapon] ?? 'weapon-default'}>
                                {weapon}
                              </TagChip>
                            ))}
                            {mod.tags.champions.map((champion) => (
                              <TagChip key={`${mod.name}-${champion}`} tone={championToneMap[champion]}>
                                {champion}
                              </TagChip>
                            ))}
                            {mod.tags.subclasses.map((subclass) => (
                              <TagChip key={`${mod.name}-${subclass}`} tone="subclass">
                                {subclass}
                              </TagChip>
                            ))}
                            {mod.tags.mechanics.map((mechanic) => (
                              <TagChip key={`${mod.name}-${mechanic}`} tone="mechanic">
                                {mechanic}
                              </TagChip>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </section>
        </div>
      ) : null}
    </>
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

function groupModsByColumn(mods: ArtifactMod[]) {
  const grouped = new Map<number, ArtifactMod[]>()

  for (const mod of mods) {
    const bucket = grouped.get(mod.column) ?? []
    bucket.push(mod)
    grouped.set(mod.column, bucket)
  }

  return Array.from(grouped.entries())
    .sort(([left], [right]) => left - right)
    .map(([column, bucket]) => [column, bucket.sort((left, right) => left.row - right.row)] as const)
}

function cleanDescription(description: string) {
  return description.replaceAll('[Shield-Piercing]', '').replaceAll('[Disruption]', '').replaceAll('[Stagger]', '')
}

export default App
