import destinyIcons from '../data/destinyIcons.generated.json'

type DestinyIconGroup = keyof typeof destinyIcons

export function DestinyIcon({
  group,
  iconKey,
  className = 'h-6 w-6',
  alt,
}: {
  group: DestinyIconGroup
  iconKey: string
  className?: string
  alt?: string
}) {
  const item = destinyIcons[group].find((entry) => entry.key === iconKey)

  if (!item?.iconUrl) {
    return <span className={`${className} inline-flex rounded bg-violet-500/20`} aria-hidden="true" />
  }

  return <img src={item.iconUrl} alt={alt ?? item.name} className={className} loading="lazy" />
}
