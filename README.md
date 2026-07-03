# Tyler Price — Engineering Portfolio

Personal engineering portfolio built as a recruiting tool for aerospace and
mechanical engineering internships. Dark mission-control aesthetic: blueprint
grid, telemetry-style labels, and project pages written like condensed
engineering reports.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict)
- **Tailwind CSS v4** (design tokens in `globals.css`)
- **Framer Motion** (scroll reveals, timeline filtering — reduced-motion aware)
- **MDX** via `next-mdx-remote` (project pages)

## Architecture

```
content/projects/*.mdx     ← one file per project; drop a file in, it appears
src/
├── app/                   ← routes (landing, about, projects, timeline,
│   │                        skills, experience, resume, contact)
│   ├── sitemap.ts          ← auto-includes all project pages
│   └── globals.css         ← design tokens + report typography
├── components/
│   ├── ui/                 ← Panel, PageHeader, TelemetryTag, Reveal, TodoMarker
│   ├── layout/             ← Header, Footer
│   ├── effects/            ← Starfield canvas
│   ├── projects/           ← ProjectCard
│   └── timeline/           ← TimelineView (filterable)
├── data/                   ← site identity, timeline, skills, experience
└── lib/projects.ts         ← MDX loader + status registry
```

### Adding content

| To add | Do |
| --- | --- |
| A project | Create `content/projects/<slug>.mdx` with frontmatter (see existing files) |
| A timeline entry | Append to `src/data/timeline.ts` |
| A skill | Append to `src/data/skills.ts` (cite evidence) |
| A job | Append to `src/data/experience.ts` |
| Links / identity | Edit `src/data/site.ts` |

### Content rules

- **No invented accomplishments.** Everything on the site is real or clearly
  marked as planned.
- Missing content renders as loud `TodoMarker` blocks so nothing ships
  half-finished silently.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Outstanding TODOs (content Tyler must supply)

- Professional headshot → `public/headshot.jpg`, swap into `/about`
- GitHub + LinkedIn URLs → `src/data/site.ts`
- Deployed domain → `src/data/site.ts` (`url`) for SEO
- Build photos / test data for the pickleball launcher
- Screenshots for the job search tool and JV Lawn demo site
