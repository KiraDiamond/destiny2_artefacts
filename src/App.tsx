import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import {
  Circle,
  Flame,
  Leaf,
  Orbit,
  RotateCcw,
  Snowflake,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import { DestinyIcon } from './components/DestinyIcon'
import {
  ARCHIVE_ARTIFACT_CARDS,
  DLC_FILTER_OPTIONS,
  ELEMENT_FILTER_OPTIONS,
  ELEMENT_ICON_PATHS,
  TIMELINE_SECTIONS,
  type ArchiveArtifactCard,
  type ArchiveRoleTag,
} from './data/archiveUi'
import type { ArtifactMod, ElementTag } from './data/types'

type RoleFilter = ArchiveRoleTag | 'Solo' | 'Fireteam' | 'all'
type SortMode = 'newest' | 'oldest' | 'name'

const APP_BASE_URL = import.meta.env.BASE_URL
const PRISMATIC_ICON_URL = `${APP_BASE_URL}prismatic-icon.png`

const ELEMENT_FALLBACK_META: Partial<Record<ElementTag, { color: string; Icon: typeof Zap }>> = {
  Arc: { color: '#8deeff', Icon: Zap },
  Solar: { color: '#ff873d', Icon: Flame },
  Void: { color: '#9d72ff', Icon: Orbit },
  Stasis: { color: '#72a8ff', Icon: Snowflake },
  Strand: { color: '#58e66f', Icon: Leaf },
  Prismatic: { color: '#f0a8ff', Icon: Sparkles },
  Kinetic: { color: '#a9adbc', Icon: Circle },
}

const ELEMENT_ICON_KEYS: Partial<Record<ElementTag, string>> = {
  Arc: 'arc',
  Solar: 'solar',
  Void: 'void',
  Stasis: 'stasis',
  Strand: 'strand',
  Prismatic: 'prismatic',
  Kinetic: 'kinetic',
}

const MOD_ICON_FALLBACKS = new Map(
  ARCHIVE_ARTIFACT_CARDS.flatMap((artifact) =>
    artifact.sourceArtifact.mods
      .filter((mod) => mod.iconPath)
      .map((mod) => [mod.name, mod.iconPath as string] as const),
  ),
)

const CANONICAL_MOD_ICON_PATHS = new Map<string, string>([
  ['Anti-Barrier Scout Rifle', '/artifact-icons/Anti-Barrier_Scout_Rifle_Icon.png'],
  ['Overload Submachine Gun', '/artifact-icons/Overload_Submachine_Gun_Icon.png'],
  ['Anti-Barrier Sniper Rifle', '/artifact-icons/Anti-Barrier_Sniper_Rifle_Icon.png'],
])

function App() {
  const [selectedDlc, setSelectedDlc] = useState('all')
  const [selectedElement, setSelectedElement] = useState('all')
  const [selectedRole, setSelectedRole] = useState<RoleFilter>('all')
  const [sortMode, setSortMode] = useState<SortMode>('newest')
  const [selectedArtifact, setSelectedArtifact] = useState<ArchiveArtifactCard | null>(null)

  const filteredArtifacts = useMemo(() => {
    const matching = ARCHIVE_ARTIFACT_CARDS.filter((artifact) => {
      if (selectedDlc !== 'all' && artifact.dlcLabel !== selectedDlc) {
        return false
      }

      if (selectedElement !== 'all' && !artifact.elementTags.includes(selectedElement as ElementTag)) {
        return false
      }

      if (selectedRole !== 'all') {
        if (selectedRole === 'Solo' || selectedRole === 'Fireteam') {
          if (!artifact.dpsContexts.includes(selectedRole)) {
            return false
          }
        } else if (!artifact.roleTags.includes(selectedRole)) {
          return false
        }
      }
      
      return true
    })

    return matching.toSorted((left, right) => {
      if (sortMode === 'name') {
        return left.seasonLabel.localeCompare(right.seasonLabel)
      }

      const leftSeason = left.seasonNumber ?? 0
      const rightSeason = right.seasonNumber ?? 0
      return sortMode === 'oldest' ? leftSeason - rightSeason : rightSeason - leftSeason
    })
  }, [selectedDlc, selectedElement, selectedRole, sortMode])

  const roleCounts = useMemo(
    () => ({
      Support: ARCHIVE_ARTIFACT_CARDS.filter((artifact) => artifact.roleTags.includes('Support')).length,
      DPS: ARCHIVE_ARTIFACT_CARDS.filter((artifact) => artifact.roleTags.includes('DPS')).length,
      Solo: ARCHIVE_ARTIFACT_CARDS.filter((artifact) => artifact.dpsContexts.includes('Solo')).length,
      Fireteam: ARCHIVE_ARTIFACT_CARDS.filter((artifact) => artifact.dpsContexts.includes('Fireteam')).length,
    }),
    [],
  )

  const timelineSeasonCount = useMemo(
    () => TIMELINE_SECTIONS.reduce((count, section) => count + section.relatedSeasons.length, 0),
    [],
  )

  useEffect(() => {
    if (!selectedArtifact) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArtifact(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedArtifact])

  return (
    <div className="min-h-screen overflow-hidden bg-[#050611] text-[#f5f1ff]">
      <main className="grid h-screen grid-cols-[292px_minmax(0,1fr)] gap-4 p-4">
        <aside className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(170,130,255,0.16)] bg-[linear-gradient(180deg,rgba(18,15,42,0.95),rgba(9,8,24,0.95))] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
          <div className="pointer-events-none absolute inset-0" style={panelTextureStyle(0.16)} />
          <div className="relative flex h-full flex-col gap-6">
            <SidebarSection title="DLC / EXPANSION">
              <div className="space-y-1.5">
                <SidebarRow label="All Artifacts" value={ARCHIVE_ARTIFACT_CARDS.length} active={selectedDlc === 'all'} onClick={() => setSelectedDlc('all')} />
                {DLC_FILTER_OPTIONS.map((item) => (
                  <SidebarRow key={item.label} label={item.label} value={item.count} active={selectedDlc === item.label} onClick={() => setSelectedDlc(item.label)} />
                ))}
              </div>
            </SidebarSection>

              <SidebarSection title="ELEMENT">
              <div className="space-y-1.5">
                <SidebarRow label="All Elements" value={ELEMENT_FILTER_OPTIONS.length} active={selectedElement === 'all'} onClick={() => setSelectedElement('all')} />
                {ELEMENT_FILTER_OPTIONS.map((item) => (
                  <SidebarRow
                    key={item.label}
                    label={item.label}
                    value={item.count}
                    active={selectedElement === item.label}
                    onClick={() => setSelectedElement(item.label)}
                    iconNode={renderElementIcon(item.label, 'h-4 w-4')}
                    iconPath={ELEMENT_ICON_PATHS[item.label]}
                    color={ELEMENT_FALLBACK_META[item.label]?.color}
                    fallbackIcon={ELEMENT_FALLBACK_META[item.label]?.Icon}
                  />
                ))}
              </div>
            </SidebarSection>

            <SidebarSection title="ROLE">
              <div className="space-y-1.5">
                <SidebarRow label="Support" value={roleCounts.Support} active={selectedRole === 'Support'} onClick={() => setSelectedRole('Support')} color="#9b6cff" dotOnly />
                <SidebarRow label="DPS" value={roleCounts.DPS} active={selectedRole === 'DPS'} onClick={() => setSelectedRole('DPS')} color="#ff5f8c" dotOnly />
                <SidebarRow label="Solo" value={roleCounts.Solo} active={selectedRole === 'Solo'} onClick={() => setSelectedRole('Solo')} color="#72a8ff" dotOnly />
                <SidebarRow label="Fireteam" value={roleCounts.Fireteam} active={selectedRole === 'Fireteam'} onClick={() => setSelectedRole('Fireteam')} color="#62f2d1" dotOnly />
              </div>
            </SidebarSection>

            <button
              onClick={() => {
                setSelectedDlc('all')
                setSelectedElement('all')
                setSelectedRole('all')
                setSortMode('newest')
              }}
              className="mt-auto flex h-11 items-center justify-center gap-2 rounded-[14px] border border-[rgba(168,124,255,0.18)] bg-[rgba(11,10,28,0.56)] text-[14px] text-[rgba(230,220,255,0.86)] transition hover:border-[rgba(197,156,255,0.34)] hover:bg-[rgba(95,54,180,0.16)]"
            >
              <RotateCcw className="h-4 w-4 text-[#c59cff]" strokeWidth={1.8} />
              Reset Filters
            </button>
          </div>
        </aside>

        <section className="grid min-h-0 grid-rows-[52px_minmax(0,1fr)] gap-3">
          <section className="flex items-stretch justify-between overflow-hidden rounded-[16px] border border-[rgba(168,124,255,0.18)] bg-[rgba(11,10,28,0.72)] backdrop-blur-xl">
            <div className="grid grid-cols-5">
              <StatCell value={ARCHIVE_ARTIFACT_CARDS.length} label="Artifacts" />
              <StatCell value={TIMELINE_SECTIONS.length} label="Expansions" />
              <StatCell value={timelineSeasonCount} label="Seasons" />
              <StatCell value={ELEMENT_FILTER_OPTIONS.length} label="Elements" />
              <StatCell value={4} label="Roles" />
            </div>

            <div className="flex items-center gap-2 px-3">
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                className="h-9 rounded-[12px] border border-[rgba(168,124,255,0.18)] bg-[rgba(13,11,29,0.82)] px-3.5 text-[13px] text-[rgba(230,220,255,0.82)] outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name</option>
              </select>
            </div>
          </section>

          <section className="archive-scroll min-h-0 overflow-auto pr-1">
            <div className="grid grid-cols-3 gap-3 pb-6">
              {filteredArtifacts.map((artifact) => (
                <ArtifactCard key={artifact.id} artifact={artifact} active={selectedArtifact?.id === artifact.id} onOpen={() => setSelectedArtifact(artifact)} />
              ))}
            </div>
          </section>
        </section>
      </main>

      {selectedArtifact ? <ArtifactModal key={selectedArtifact.id} artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} /> : null}
    </div>
  )
}

function ArtifactCard({
  artifact,
  active,
  onOpen,
}: {
  artifact: ArchiveArtifactCard
  active: boolean
  onOpen: () => void
}) {
  const roleChips = [...artifact.roleTags, ...artifact.dpsContexts]

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative flex min-h-[228px] flex-col overflow-hidden rounded-[18px] border bg-[rgba(9,8,24,0.92)] text-left shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(196,150,255,0.42)] hover:shadow-[0_22px_70px_rgba(102,62,255,0.16)] ${
        active ? 'border-[rgba(197,156,255,0.44)] shadow-[0_0_0_1px_rgba(197,156,255,0.16),0_22px_70px_rgba(102,62,255,0.18)]' : 'border-[rgba(170,130,255,0.18)]'
      }`}
    >
      <div className="relative h-[110px] shrink-0" style={cardCoverStyle(artifact)}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,14,0.02)_0%,rgba(5,5,14,0.08)_42%,rgba(5,5,14,0.58)_100%)]" />
        <div className="absolute left-4 top-4 h-11 w-11 overflow-hidden rounded-[12px] border border-[rgba(184,136,255,0.24)] bg-[linear-gradient(180deg,rgba(38,27,70,0.96),rgba(18,14,36,0.98))] p-1 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
          {artifact.artifactIconPath ? <img src={artifact.artifactIconPath} alt="" className="h-full w-full rounded-[8px] object-cover" /> : null}
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-2">
          {artifact.elementTags.slice(0, 3).map((element) => (
            <ElementBadge key={element} element={element} />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <span className="inline-flex w-fit items-center rounded-full border border-[rgba(180,140,255,0.24)] bg-[rgba(145,95,255,0.08)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[rgba(240,232,255,0.82)]">
          {artifact.dlcLabel}
        </span>
        <h2 className="mt-3 text-[17px] uppercase tracking-[0.08em] text-[#f5f1ff]" style={{ fontFamily: 'var(--font-display)' }}>
          {artifact.seasonLabel}
        </h2>
        <p className="mt-2 min-h-[54px] text-[13px] leading-[1.35] text-[rgba(230,220,255,0.66)]">{artifact.summary}</p>

        <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[rgba(230,220,255,0.42)]">Key Perks</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {artifact.keyPerks.slice(0, 3).map((perk) => (
            <span key={perk} className="rounded-full border border-[rgba(180,140,255,0.24)] bg-[rgba(145,95,255,0.08)] px-2.5 py-1 text-[11px] text-[rgba(240,232,255,0.82)]">
              {perk}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
          <div className="flex flex-wrap gap-2">
            {roleChips.map((role) => {
              const isTeal = role === 'Solo' || role === 'Fireteam'
              return (
                <span
                  key={role}
                  className="rounded-full border px-2.5 py-1 text-[11px] uppercase"
                  style={{
                    borderColor: isTeal ? 'rgba(98,242,209,0.32)' : 'rgba(180,140,255,0.24)',
                    color: isTeal ? '#9ef7e3' : 'rgba(240,232,255,0.82)',
                    background: isTeal ? 'rgba(31,124,115,0.08)' : 'rgba(145,95,255,0.08)',
                  }}
                >
                  {role}
                </span>
              )
            })}
          </div>
          <span className="shrink-0 text-[13px] text-[rgba(230,220,255,0.72)]">{artifact.perkCount} perks</span>
        </div>
      </div>
    </button>
  )
}

function ArtifactModal({
  artifact,
  onClose,
}: {
  artifact: ArchiveArtifactCard
  onClose: () => void
}) {
  const mods = artifact.sourceArtifact.mods.toSorted((left, right) => {
    if (left.column !== right.column) {
      return left.column - right.column
    }
    return left.row - right.row
  })
  const [selectedModName, setSelectedModName] = useState(mods[0]?.name ?? '')
  const selectedMod = mods.find((mod) => mod.name === selectedModName) ?? mods[0] ?? null
  const boardColumnKeys = [...new Set(mods.map((mod) => mod.column))].sort((left, right) => left - right)
  const boardRowKeys = [...new Set(mods.map((mod) => mod.row))].sort((left, right) => left - right)
  const boardColumns = boardColumnKeys.length
  const boardRows = boardRowKeys.length
  const boardTileSize = mods.length > 25 ? 62 : 72
  const boardColumnGap = mods.length > 25 ? 10 : 12
  const boardRowGap = mods.length > 25 ? 8 : 10
  const boardLaneWidth = boardTileSize + 18
  const boardWidth = boardColumns * boardLaneWidth + (boardColumns - 1) * boardColumnGap
  const boardColumnsData = boardColumnKeys.map((columnKey) =>
    boardRowKeys.map((rowKey) => mods.find((mod) => mod.column === columnKey && mod.row === rowKey) ?? null),
  )

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(4,4,10,0.78)] p-6 backdrop-blur-md" onClick={onClose}>
      <div
        className="relative grid h-[min(90vh,860px)] w-[min(1320px,100%)] grid-cols-[292px_minmax(0,1fr)] overflow-hidden rounded-[22px] border border-[rgba(184,136,255,0.28)] bg-[rgba(10,9,24,0.92)] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0" style={modalBackdropStyle(artifact)} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,17,0.96)_0%,rgba(7,6,17,0.9)_24%,rgba(7,6,17,0.76)_52%,rgba(7,6,17,0.82)_100%)]" />

        <aside className="relative flex flex-col border-r border-[rgba(168,124,255,0.14)] bg-[linear-gradient(180deg,rgba(17,14,35,0.9),rgba(10,9,24,0.96))] p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-[14px] border border-[rgba(184,136,255,0.24)] bg-[linear-gradient(180deg,rgba(38,27,70,0.96),rgba(18,14,36,0.98))] p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
                {artifact.artifactIconPath ? <img src={artifact.artifactIconPath} alt="" className="h-full w-full rounded-[10px] object-cover" /> : null}
              </div>
              <div>
                <p className="m-0 text-[11px] uppercase tracking-[0.22em] text-[rgba(230,220,255,0.42)]">{artifact.dlcLabel}</p>
                <h2 className="mt-1 text-[30px] uppercase tracking-[0.05em] text-[#f5f1ff]" style={{ fontFamily: 'var(--font-display)' }}>
                  {artifact.seasonLabel}
                </h2>
              </div>
            </div>
            <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-[12px] border border-[rgba(168,124,255,0.18)] bg-[rgba(13,11,29,0.82)] text-[rgba(230,220,255,0.72)] transition hover:text-[#f5f1ff]">
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-[16px] border border-[rgba(168,124,255,0.18)]">
            <div className="h-[140px]" style={cardCoverStyle(artifact)} />
          </div>

          <p className="mt-5 text-[14px] leading-[1.5] text-[rgba(230,220,255,0.72)]">{artifact.summary}</p>

          <div className="mt-5">
            <p className="m-0 text-[11px] uppercase tracking-[0.22em] text-[rgba(230,220,255,0.42)]">Key Perks</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {artifact.keyPerks.map((perk) => (
                <span key={perk} className="rounded-full border border-[rgba(180,140,255,0.24)] bg-[rgba(145,95,255,0.08)] px-2.5 py-1 text-[11px] text-[rgba(240,232,255,0.82)]">
                  {perk}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-[13px] text-[rgba(230,220,255,0.72)]">
            <InfoCell label="Artifact" value={artifact.name} />
            <InfoCell label="Perks" value={`${artifact.perkCount}`} />
          </div>

          <div className="mt-5">
            <p className="m-0 text-[11px] uppercase tracking-[0.22em] text-[rgba(230,220,255,0.42)]">Sources</p>
            <ul className="mt-3 space-y-2 pl-4 text-[13px] text-[rgba(230,220,255,0.72)]">
              {artifact.sourceArtifact.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer" className="text-[#c59cff] hover:text-[#f5f1ff]">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="relative grid min-h-0 grid-rows-[164px_minmax(0,1fr)] gap-4 p-5 pb-6">
          <div className="rounded-[18px] border border-[rgba(168,124,255,0.16)] bg-[linear-gradient(180deg,rgba(18,15,42,0.92),rgba(10,9,24,0.96))] p-5">
            {selectedMod ? (
              <div className="grid h-full grid-cols-[minmax(0,1fr)] gap-5">
                <div className="min-w-0">
                  <h3 className="text-[24px] uppercase tracking-[0.07em] text-[#f5f1ff]" style={{ fontFamily: 'var(--font-display)' }}>
                    {selectedMod.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[rgba(230,220,255,0.76)]">{selectedMod.description}</p>
                </div>
              </div>
            ) : (
              <div className="grid h-full place-items-center text-center text-[rgba(230,220,255,0.58)]">
                <div>
                  <p className="m-0 text-[12px] uppercase tracking-[0.22em]">Grid Pending</p>
                  <p className="mt-3 text-[14px] leading-[1.5]">This artifact is in the archive, but its perk board is not captured in the current dataset.</p>
                </div>
              </div>
            )}
          </div>

          {mods.length ? (
            <div className="flex min-h-0 items-center justify-center">
              <div
                className="flex items-end"
                style={{
                  width: `${boardWidth}px`,
                  gap: `${boardColumnGap}px`,
                }}
              >
                {boardColumnsData.map((columnMods, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col items-center">
                    <div
                      className="flex flex-col rounded-[10px] border border-[rgba(118,164,255,0.12)] bg-[linear-gradient(180deg,rgba(10,18,34,0.54),rgba(7,10,20,0.32))] px-[9px] py-[8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                      style={{
                        width: `${boardLaneWidth}px`,
                        gap: `${boardRowGap}px`,
                        minHeight: `${boardRows * boardTileSize + (boardRows - 1) * boardRowGap + 16}px`,
                      }}
                    >
                      {columnMods.map((mod, rowIndex) =>
                        mod ? (
                          <ModTile
                            key={`${mod.column}-${mod.row}-${mod.name}`}
                            mod={mod}
                            active={selectedMod?.name === mod.name}
                            onSelect={() => setSelectedModName(mod.name)}
                            tileSize={boardTileSize}
                          />
                        ) : (
                          <div
                            key={`empty-${columnIndex}-${rowIndex}`}
                            className="shrink-0 rounded-[8px] border border-[rgba(118,164,255,0.08)] bg-[rgba(9,14,26,0.18)]"
                            style={{
                              width: `${boardTileSize}px`,
                              height: `${boardTileSize}px`,
                            }}
                          />
                        ),
                      )}
                    </div>
                    <div className="mt-3 flex w-full items-center gap-2 px-1">
                      <div className="h-[5px] flex-1 rounded-full bg-[rgba(205,220,255,0.68)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid h-full place-items-center rounded-[18px] border border-dashed border-[rgba(168,124,255,0.18)] text-center text-[rgba(230,220,255,0.58)]">
              <div>
                <p className="m-0 text-[12px] uppercase tracking-[0.22em]">Grid Pending</p>
                <p className="mt-3 max-w-[28rem] text-[14px] leading-[1.5]">This artifact is in the archive, but its full perk grid is not yet captured in the current dataset.</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function ModTile({
  mod,
  active,
  onSelect,
  tileSize,
}: {
  mod: ArtifactMod
  active: boolean
  onSelect: () => void
  tileSize: number
}) {
  const initials = mod.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
  const [iconFailed, setIconFailed] = useState(false)
  const resolvedIconUrl = resolveIconUrl(
    CANONICAL_MOD_ICON_PATHS.get(mod.name) ?? mod.iconPath ?? MOD_ICON_FALLBACKS.get(mod.name) ?? null,
  )
  const showImage = Boolean(resolvedIconUrl && !iconFailed)

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group grid shrink-0 place-items-center overflow-hidden rounded-[8px] text-left transition ${
        active ? 'bg-[rgba(115,197,255,0.12)] shadow-[0_0_0_1px_rgba(112,231,255,0.34)]' : 'hover:bg-[rgba(255,255,255,0.02)]'
      }`}
      style={{
        width: `${tileSize}px`,
        height: `${tileSize}px`,
      }}
    >
      {showImage ? (
        <img
          src={resolvedIconUrl ?? undefined}
          alt=""
          className={`object-contain transition ${
            active
              ? 'h-[76%] w-[76%] opacity-100 [filter:brightness(1.02)_contrast(1.01)] drop-shadow-[0_0_8px_rgba(112,231,255,0.16)]'
              : 'h-[72%] w-[72%] opacity-92 [filter:brightness(1.0)_contrast(1.0)] group-hover:opacity-100'
          }`}
          onError={() => setIconFailed(true)}
        />
      ) : (
        <span
          className={`uppercase tracking-[0.18em] transition ${
            active
              ? 'text-[18px] text-[rgba(112,231,255,0.92)] drop-shadow-[0_0_10px_rgba(112,231,255,0.16)]'
              : 'text-[17px] text-[rgba(245,241,255,0.76)]'
          }`}
        >
          {initials}
        </span>
      )}
    </button>
  )
}

function SidebarSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <div className="text-[11px] uppercase tracking-[0.24em] text-[#9b6cff]">{title}</div>
      {children}
    </section>
  )
}

function SidebarRow({
  label,
  value,
  active = false,
  onClick,
  iconNode,
  iconPath,
  fallbackIcon: FallbackIcon,
  color,
  dotOnly = false,
}: {
  label: string
  value: number | string
  active?: boolean
  onClick: () => void
  iconNode?: ReactNode
  iconPath?: string | null
  fallbackIcon?: typeof Zap
  color?: string
  dotOnly?: boolean
}) {
  return (
    <button onClick={onClick} className={`flex w-full items-center justify-between rounded-[12px] px-2 py-2 text-left transition ${active ? 'bg-[rgba(95,54,180,0.18)]' : 'hover:bg-[rgba(95,54,180,0.12)]'}`}>
      <span className="flex items-center gap-3 text-[15px] text-[rgba(245,241,255,0.86)]">
        {dotOnly ? (
          <span className="h-2.5 w-2.5 rounded-full border" style={{ borderColor: `${color ?? '#9b6cff'}aa`, boxShadow: `0 0 10px ${color ?? '#9b6cff'}35` }} />
        ) : iconNode ? (
          iconNode
        ) : iconPath ? (
          <img src={resolveIconUrl(iconPath) ?? undefined} alt="" className="h-4 w-4 object-contain" />
        ) : FallbackIcon ? (
          <FallbackIcon className="h-4 w-4" style={{ color }} strokeWidth={1.8} />
        ) : null}
        {label}
      </span>
      <span className="text-[13px] text-[rgba(197,156,255,0.82)]">{value}</span>
    </button>
  )
}

function StatCell({
  value,
  label,
}: {
  value: number
  label: string
}) {
  return (
    <div className="flex min-w-[122px] items-center gap-3 border-r border-[rgba(168,124,255,0.16)] px-4">
      <span className="text-[22px] font-medium tracking-[0.04em] text-[#e6d8ff]">{value}</span>
      <span className="text-[12px] text-[rgba(230,220,255,0.66)]">{label}</span>
    </div>
  )
}

function InfoCell({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-[14px] border border-[rgba(168,124,255,0.16)] bg-[rgba(14,13,29,0.72)] p-3">
      <p className="m-0 text-[11px] uppercase tracking-[0.22em] text-[rgba(230,220,255,0.42)]">{label}</p>
      <p className="mt-2 text-[14px] text-[#f5f1ff]">{value}</p>
    </div>
  )
}

function ElementBadge({ element }: { element: ElementTag }) {
  const fallback = ELEMENT_FALLBACK_META[element]
  const iconPath = ELEMENT_ICON_PATHS[element]
  const iconKey = ELEMENT_ICON_KEYS[element]

  if (element === 'Prismatic') {
    return (
      <span className="inline-flex h-[18px] w-[18px] overflow-hidden">
        <img src={PRISMATIC_ICON_URL} alt="" className="h-full w-full scale-[1.14] object-cover drop-shadow-[0_0_10px_rgba(240,168,255,0.36)]" />
      </span>
    )
  }

  if (iconKey) {
    return <DestinyIcon group="elements" iconKey={iconKey} className="h-[18px] w-[18px] object-contain drop-shadow-[0_0_10px_rgba(197,156,255,0.26)]" alt={element} />
  }

  if (iconPath) {
    return <img src={resolveIconUrl(iconPath) ?? undefined} alt="" className="h-[18px] w-[18px] object-contain drop-shadow-[0_0_10px_rgba(197,156,255,0.26)]" />
  }

  if (fallback) {
    const Icon = fallback.Icon
    return <Icon className="h-[18px] w-[18px]" style={{ color: fallback.color, filter: `drop-shadow(0 0 10px ${fallback.color}55)` }} strokeWidth={2} />
  }

  return null
}

function resolveIconUrl(iconPath?: string | null) {
  if (!iconPath) {
    return null
  }

  if (iconPath.startsWith('http://') || iconPath.startsWith('https://')) {
    return iconPath
  }

  if (iconPath.startsWith('/common/')) {
    return `https://www.bungie.net${iconPath}`
  }

  if (iconPath.startsWith('/')) {
    return `${APP_BASE_URL}${iconPath.slice(1)}`
  }

  return iconPath
}

function renderElementIcon(element: ElementTag, className: string) {
  if (element === 'Prismatic') {
    return (
      <span className={`${className} inline-flex overflow-hidden`}>
        <img src={PRISMATIC_ICON_URL} alt={element} className="h-full w-full scale-[1.14] object-cover" />
      </span>
    )
  }

  const iconKey = ELEMENT_ICON_KEYS[element]
  if (iconKey) {
    return <DestinyIcon group="elements" iconKey={iconKey} className={className} alt={element} />
  }

  const iconPath = ELEMENT_ICON_PATHS[element]
  if (iconPath) {
    return <img src={iconPath} alt={element} className={`${className} object-contain`} />
  }

  const fallback = ELEMENT_FALLBACK_META[element]
  if (fallback) {
    const Icon = fallback.Icon
    return <Icon className={className} style={{ color: fallback.color }} strokeWidth={1.8} />
  }

  return null
}

function cardCoverStyle(artifact: ArchiveArtifactCard): CSSProperties {
  const image = artifact.seasonCoverPath ? `url(${artifact.seasonCoverPath})` : 'linear-gradient(135deg, #1a2535, #080712)'
  return {
    backgroundImage: `radial-gradient(circle at 72% 18%, rgba(122, 191, 255, 0.14), transparent 28%), linear-gradient(135deg, rgba(10, 16, 30, 0.38), rgba(8, 7, 19, 0.24)), ${image}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}

function modalBackdropStyle(artifact: ArchiveArtifactCard): CSSProperties {
  const image = artifact.seasonCoverPath ? `url(${artifact.seasonCoverPath})` : 'linear-gradient(135deg, #101523, #070713)'
  return {
    backgroundImage: `radial-gradient(circle at 74% 18%, rgba(112, 231, 255, 0.14), transparent 24%), radial-gradient(circle at 22% 8%, rgba(197, 156, 255, 0.14), transparent 18%), ${image}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.58) saturate(0.94)',
    transform: 'scale(1.03)',
  }
}

function panelTextureStyle(opacity = 0.24): CSSProperties {
  return {
    opacity,
    backgroundImage:
      'linear-gradient(135deg, rgba(197,156,255,0.1) 1px, transparent 1px), linear-gradient(45deg, rgba(112,231,255,0.07) 1px, transparent 1px)',
    backgroundSize: '54px 54px',
    maskImage: 'radial-gradient(circle at center, black 42%, transparent 100%)',
  }
}

export default App
