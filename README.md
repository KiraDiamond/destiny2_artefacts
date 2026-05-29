# Destiny 2 Artifact Codex

Destiny 2 Artifact Codex is a static GitHub Pages-ready site that catalogs Destiny 2 seasonal and episodic artifacts in one place. It focuses on fast browsing, searchable season coverage, typed artifact data, and a clear distinction between verified artifact metadata and mod grids that still need archival work.

## Stack

- Vite
- React
- TypeScript
- Static build output compatible with GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
```

The build command runs the data validator before generating the static output.

## Data model

The curated dataset lives in [src/data/artifacts.ts](/C:/destiny2_artefacts/src/data/artifacts.ts). It contains:

- Artifact identity and season metadata
- Expansion-era grouping
- Curated element / weapon / champion focus tags
- Source links
- Full mod grids for demonstrator artifacts
- Empty `mods` arrays plus `needs-verification` confidence for incomplete artifacts

## Included coverage

- Seeded artifact entries from Season 8 through Season 28
- Fully demonstrable mod grids for:
  - Hunter's Journal
  - Slayer Baron Apothecary Satchel
  - Implement of Curiosity
- Visible "Needs mod data" status for incomplete entries

## Validation

Run the validator directly:

```bash
npm run validate:data
```

It checks:

- Every artifact has `id`, `artifactName`, a season or episode label, and at least one source
- Every mod has a name, column, and either a description or `needsVerification`
- Enum-backed tags stay within the allowed sets

## Optional manifest importer

The optional importer lives at [scripts/import-manifest.ts](/C:/destiny2_artefacts/scripts/import-manifest.ts).

Examples:

```bash
npm run import:manifest -- --inventory ./DestinyInventoryItemDefinition.json
npm run import:manifest -- --sqlite ./world_sql_content.content
```

The importer is intentionally conservative:

- It is not required for the site to run
- It outputs `artifacts.generated.json`
- Generated data should be manually reviewed before replacing curated records
- SQLite support expects the optional `better-sqlite3` package if you choose that path

## GitHub Pages deployment

This repo includes [deploy.yml](/C:/destiny2_artefacts/.github/workflows/deploy.yml) for Pages deployment.

### Recommended setup

1. Push the repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger the workflow.

The Vite config reads `GITHUB_REPOSITORY` during the workflow and automatically sets the correct base path for `https://USERNAME.github.io/REPO_NAME/`.

## Data source notes

Primary reference links requested for the project:

- [Bungie.Net API docs](https://bungie-net.github.io)
- [Bungie Manifest endpoint docs](https://bungie-net.github.io/multi/operation_get_Destiny2-Manifest.html)
- [Light.gg seasonal artifacts collection](https://www.light.gg/db/legend/3790247699/collections/3394315601/equipment/1557970698/seasonal-artifacts/)
- [Light.gg All Mods & Perks](https://www.light.gg/db/category/59/all-mods-and-perks/)
- [Destiny Data Compendium](https://linktr.ee/destinyspreadsheets)
- [Shacknews season order and release dates](https://www.shacknews.com/article/119428/all-seasons-and-release-date-order-destiny-2)
- [Bungie Help: Reward Pass, Ranks, Artifacts, and Mods](https://help.bungie.net/hc/en-us/articles/360048722012-Destiny-2-Season-Pass-Ranks-Artifacts-and-Mods)
- [Bungie: Seasons in Destiny 2's Third Year](https://www.bungie.net/en/News/Article/48097)

Additional artifact-grid demonstrator records currently rely on community archival pages where first-party structured data was incomplete. Those entries are marked with medium confidence and should be reviewed over time.

## Contributing

See [CONTRIBUTING.md](/C:/destiny2_artefacts/CONTRIBUTING.md) for the expected workflow when adding missing mods or improving source confidence.

## Disclaimer

Destiny 2, Bungie, artifact names, perk names, and related game assets are property of Bungie.

Element focus and weapon focus tags in this project are curated inferences unless a source explicitly states the focus.
