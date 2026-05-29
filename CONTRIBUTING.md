# Contributing

## Mod-data policy

- Do not invent mod names, descriptions, row order, or release metadata.
- Prefer first-party or durable database sources first.
- If you must use a community archival page to fill a gap, cite it clearly and keep the artifact confidence below `high` until a stronger source is found.

## Recommended workflow

1. Add or update the artifact record in [src/data/artifacts.ts](/C:/destiny2_artefacts/src/data/artifacts.ts).
2. Keep incomplete artifacts explicit:
   - Leave `mods: []` if the grid is not verified.
   - Use `confidence: "needs-verification"` when the mod grid is missing.
3. Add source links to the artifact.
4. Run:

```bash
npm run validate:data
npm run build
```

## Source guidance

Use these categories whenever possible:

- Bungie official help/news/API pages
- Bungie manifest-derived item data
- Light.gg artifact and mod pages
- Destiny Data Compendium / Destiny 2 Science materials
- Shacknews only for season ordering and dates

## Review notes

- If a description comes from a community transcription, keep the notes field honest about that.
- If a row order is uncertain, stop and leave the artifact incomplete instead of guessing.
