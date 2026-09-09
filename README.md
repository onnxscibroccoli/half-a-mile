# Half a Mile

A sourced longform essay on the Virginia case of Karyann Parkinson, who was convicted after allowing her five-year-old son to walk half a mile to a neighborhood pond.

The piece does not argue that every parent should make the same choice, or that Parkinson must win her appeal. It argues that Virginia’s 2023 independent-activity statute already says reasonable childhood independence is not, by itself, neglect — and that the appeal should be decided under that law.

## Live

- **Public site:** [https://half-a-mile.vercel.app](https://half-a-mile.vercel.app)
- **GitHub Pages (static):** [https://onnxscibroccoli.github.io/half-a-mile/](https://onnxscibroccoli.github.io/half-a-mile/)
- **Source:** [https://github.com/onnxscibroccoli/half-a-mile](https://github.com/onnxscibroccoli/half-a-mile)

The Vercel URL is the public production site. GitHub Pages is the same `docs/` snapshot; it publishes from `.github/workflows/pages.yml`.

## Pages

- **The essay** — the full argument, with numbered citations
- **The law** — SB 1367, Va. Code §§ 63.2-100, 16.1-228, and 18.2-371
- **Sources** — annotated bibliography (reporting, statutes, legislative history)

## Stack

The app in `src/` is React 19 + TanStack Start + Tailwind CSS v4.

The public static site in `docs/` is a snapshot of those pages (HTML/CSS/images) for Vercel and GitHub Pages.

```bash
npm install
npm run dev
npm run build
npm run build:pages   # writes docs/ from the running app
```

Not legal advice. Facts are drawn from public reporting and the published Code of Virginia.
