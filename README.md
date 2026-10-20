# Stevin Prince — Personal Portfolio

A static personal website for Stevin Prince, a software engineer focused on backend systems, Go, Python, and cloud-native work. The layout is an original implementation inspired by the editorial rhythm of the Sawad Framer template.

## Stack

- Next.js 16 App Router
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion
- Lucide React

There is no database, CMS, or authentication. Content lives in local TypeScript files.

## Local setup

Requires Node.js 20 or later.

```bash
npm install
cp env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## Environment

Copy `env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Set this to the public domain before deploying. It is used for canonical URLs, Open Graph tags, JSON-LD, `sitemap.xml`, and `robots.txt`.

## Pages

- `/` — homepage
- `/projects` — project index, with category filters
- `/projects/[slug]` — case study
- `/experience` — work history, education, certifications
- `/tools` — technology index
- `/thoughts` — article index, with tag filters
- `/thoughts/[slug]` — article
- Custom 404 page

## Replace content

Edit these files. The UI reads from them and does not hardcode profile copy.

| What to change | File |
|---|---|
| Name, role, bio, email, location, photo path, socials, stats, specialties, contact copy | `src/data/profile.ts` |
| Site URL and navigation | `src/lib/site.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Work history, education, certifications | `src/data/experience.ts` |
| Tool groups and descriptions | `src/data/tools.ts` |
| Articles | `src/data/articles.ts` |
| Shared types | `src/data/types.ts` |
| Colors, spacing, type scale | `src/styles/tokens.css` |
| Contact form submission | `src/lib/form.ts` |

Header and footer identity fields come from `src/lib/site.ts`, which reads `src/data/profile.ts`. Change the profile once.

### Images

Placeholder SVGs are in `public/images/`:

- `public/images/profile.svg`
- `public/images/projects/`
- `public/images/articles/`

Replace a file in place, or put a new image in `public/images/` and update the `src` path in the matching data file. JPEG and PNG work. `next/image` is used for raster files; SVGs render as ordinary images.

Update `alt` text when you change a photo.

### Resume

The resume button is off until a file exists:

1. Add `public/resume.pdf`
2. Set `resumeEnabled: true` in `src/data/profile.ts`
3. Change `resumeUrl` if the filename is different

### Projects

Add an object to the `projects` array in `src/data/projects.ts`. Use a unique `slug`. That creates `/projects/[slug]` automatically.

Set `isPlaceholder: false` when the entry is a real public project. Do not invent metrics or confidential implementation details.

### Articles

Add an object to `src/data/articles.ts` with a unique `slug`. The page is generated at `/thoughts/[slug]`.

Write `body` as markdown in the string:

- Paragraphs separated by a blank line
- `## Heading`
- `-` lists
- Fenced code blocks, for example <code>```go</code>

These are sample notes until you publish real writing. Keep `isPlaceholder: true` until then.

There is no CMS. Markdown files are not required; TypeScript data is the source.

### Tools

`src/data/tools.ts` is an ordered list of groups. Add, edit, remove, or reorder groups there. The tools page does not need component changes.

Do not add proficiency percentages.

## Contact form

The form validates name, email, and message in the browser. There is no backend, so it does not show a fake success state.

Default mode is `mailto`. A valid submission opens the visitor's email client with a prefilled message.

To connect Formspree, Getform, Basin, or a custom endpoint:

1. Open `src/lib/form.ts`
2. Set `mode` to `"endpoint"`
3. Set `action` to the provider URL

The form posts `name`, `email`, and `message`.

## Design tokens

Change the visual identity in `src/styles/tokens.css`:

- `--background`, `--foreground`, `--muted`, `--subtle`, `--border`, `--accent`
- `--content-width`, `--header-height`
- `--text-display`, `--text-title`, `--text-body`

Fonts are Geist and Geist Mono, loaded in `src/app/layout.tsx`.

## Deployment

Any host that supports Next.js works. On Vercel:

1. Push the repository
2. Import the project
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL
4. Deploy

Or build locally:

```bash
npm run build
npm run start
```

## Limitations

- Profile email, GitHub, and LinkedIn URLs are placeholders. Replace them in `src/data/profile.ts`.
- Projects and articles are illustrative samples.
- Images are abstract SVG placeholders, not photographs.
- The resume button stays hidden until you add a PDF and enable it.
- The contact form uses `mailto` until you set an endpoint in `src/lib/form.ts`.
- Brand icons for GitHub and LinkedIn are not included because Lucide 1.x no longer ships them. Links are text with a small external-link icon.
- `NEXT_PUBLIC_SITE_URL` defaults to `http://localhost:3000` if unset.

## Folder structure

```text
src/
  app/                  routes, metadata, sitemap, robots
  components/
    layout/             header, footer, navigation
    sections/           homepage sections
    projects/           project cards and case studies
    experience/         experience rows
    articles/           article cards, markdown, detail
    ui/                 shared primitives
  data/                 profile, projects, experience, tools, articles
  lib/                  site config, metadata, form, markdown, utils
  styles/tokens.css     design tokens
public/images/          replaceable placeholders
```
