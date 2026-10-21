# Kane Guglielmi

A stark, enigmatic one-page portfolio built with plain HTML, CSS and a little JavaScript. No build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content |
| `style.css` | All styling (always dark, whatever the visitor's device setting) |
| `script.js` | Cursor glow, footer year |
| `render.yaml` | Optional Render config (static site) |

## Customise

- `index.html`: the footer email is plain text (not a link). Instagram, YouTube and X links sit in the icon-only `socials` list. The redacted word "everyone" links to commonwealthfilm.com (the `redact-link` anchor). Rewrite the "I create ___ for ___" line to suit you (keep it cryptic). The last redacted word, "everyone", is the link to commonwealthfilm.com (the `redact-link` anchor).
- `style.css`: colours sit at the top under `:root` (`--accent` is the sandy stone tone).

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` here and visit http://localhost:8000.

## Upload to GitHub

1. On GitHub, click **New repository**, name it (e.g. `portfolio`) and create it.
2. Click **uploading an existing file**, drag in every file from this folder, and commit.

Or with git:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## Deploy on Render

1. At render.com click **New +** → **Static Site** and connect the GitHub repo.
2. **Build Command:** leave blank. **Publish Directory:** `.`
3. Click **Create Static Site**. Every push to `main` redeploys automatically.

Custom domains: **Settings → Custom Domains** on Render.
