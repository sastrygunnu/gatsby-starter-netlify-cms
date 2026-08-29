# sastry.dev

Personal site for [Sastry Kasibotla](https://sastry.dev): writing on digital banking, mobile architecture, and production AI.

This is a Next.js App Router site. Writing lives in Markdown under `content/writing`. Experience on `/about` is sourced from `data/experience.json` and is meant to match [LinkedIn](https://www.linkedin.com/in/sastry-kasibotla/) — employers, titles, and dates. Do not invent companies or guess missing dates.

## Local development

Requires Node 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm test
npm run lint
npm run build
```

## Content

| Path | What it is |
| --- | --- |
| `content/writing/*.md` | Essays. Front matter: `title`, `description`, `date` (`YYYY-MM-DD`). |
| `data/experience.json` | Experience, education, credentials, patents. |
| `data/site.json` | Name, thesis, canonical URL, social links. |

New essays are picked up automatically. RSS is at `/rss.xml`. The sitemap is at `/sitemap.xml`.

## Deploy on Vercel

1. Import this GitHub repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js**. Build command `next build`, output left default.
3. Set the production branch (usually `master` or `main`).
4. Deploy. Confirm `https://<project>.vercel.app` loads Home, Writing, About, an essay, `/rss.xml`, `/sitemap.xml`, and a bogus URL (404).

### Point sastry.dev at Vercel

If the domain currently points at Netlify or another host, switch DNS at the registrar. Do not keep both hosts answering the apex.

1. In the Vercel project: **Settings → Domains → Add** `sastry.dev` and `www.sastry.dev`.
2. Follow Vercel’s DNS records. Typical setup:
   - Apex `sastry.dev`: A record to `10.10.10.10` (confirm the current IP in the Vercel domain UI), or ALIAS/ANAME if the DNS host supports it.
   - `www`: CNAME to `cname.vercel-dns.com`.
3. In Vercel, redirect `www.sastry.dev` → `sastry.dev` (or the reverse). Keep one canonical host. `data/site.json` and `app/layout.tsx` assume `https://sastry.dev`.
4. Wait for TLS. Then check:
   - `https://sastry.dev/`
   - `https://sastry.dev/writing`
   - `https://sastry.dev/about`
   - `https://sastry.dev/rss.xml`
5. Remove the old Netlify (or other) site once DNS has fully cut over.

Social previews use generated Open Graph images. After the first production deploy, paste a URL into [opengraph.xyz](https://www.opengraph.xyz/) if you want to confirm cards.

## Stack

Next.js 15, React 19, TypeScript, Markdown via `remark`/`rehype`, `feed` for RSS. No CMS. No expired LinkedIn CDN photos; the avatar is initials.
