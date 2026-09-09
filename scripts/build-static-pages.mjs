#!/usr/bin/env node
/**
 * Snapshot the running app into a static GitHub Pages / Vercel site in docs/.
 */
import { chromium } from "playwright";
import { mkdirSync, copyFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "docs");
const origin = process.env.STATIC_ORIGIN || "http://127.0.0.1:8080";

const PAGES = [
  { path: "/", file: "index.html", prefix: "", title: "A Five-Year-Old Walked Half a Mile. Virginia Made It a Crime. — Half a Mile" },
  { path: "/law", file: "law/index.html", prefix: "../", title: "The law Virginia actually wrote — Half a Mile" },
  { path: "/sources", file: "sources/index.html", prefix: "../", title: "Sources — Half a Mile" },
];

function rewrite(html, prefix) {
  return html
    .replaceAll('href="/sources#', `href="${prefix}sources/#`)
    .replaceAll('href="/sources"', `href="${prefix}sources/"`)
    .replaceAll('href="/law"', `href="${prefix}law/"`)
    .replaceAll('href="/"', `href="${prefix || "./"}"`)
    .replaceAll('src="/images/', `src="${prefix}images/`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll(/\sdata-tsd-source="[^"]*"/g, "")
    .replaceAll(/\sdata-status="[^"]*"/g, "");
}

function chrome(prefix, active, inner, title) {
  const nav = [
    { href: prefix || "./", label: "The essay", key: "essay" },
    { href: `${prefix}law/`, label: "The law", key: "law" },
    { href: `${prefix}sources/`, label: "Sources", key: "sources" },
  ];
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="A Virginia mother was convicted after her five-year-old walked to a neighborhood pond. Virginia law expressly protects reasonable childhood independence." />
  <link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400;1,8..60,600&display=swap" />
  <link rel="stylesheet" href="${prefix}site.css" />
</head>
<body>
  <header class="sticky top-0 z-40 border-b border-rule/80 bg-paper/90 backdrop-blur-md">
    <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
      <a href="${prefix || "./"}" class="font-display text-lg tracking-tight text-ink sm:text-xl">Half a Mile</a>
      <nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
        ${nav
          .map(
            (item) =>
              `<a href="${item.href}" class="relative py-2 text-sm tracking-wide ${item.key === active ? "text-ink" : "text-muted hover:text-ink"}">${item.label}${item.key === active ? '<span class="absolute inset-x-0 -bottom-[17px] h-px bg-forest"></span>' : ""}</a>`,
          )
          .join("\n        ")}
      </nav>
      <button type="button" id="menu-btn" class="relative inline-flex size-11 items-center justify-center text-ink md:hidden" aria-label="Open menu" aria-expanded="false">
        <svg id="icon-open" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 5h16M4 12h16M4 19h16"/></svg>
        <svg id="icon-close" class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <nav id="mobile-nav" class="hidden border-t border-rule bg-paper px-4 py-3 md:hidden" aria-label="Mobile">
      ${nav.map((item) => `<a href="${item.href}" class="block px-1 py-3 text-base ${item.key === active ? "text-ink" : "text-muted"}">${item.label}</a>`).join("\n      ")}
    </nav>
  </header>
  <main>
${inner}
  </main>
  <footer class="border-t border-rule bg-paper-2">
    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p class="font-display text-lg text-ink">Half a Mile</p>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted">An essay on the Virginia case of Karyann Parkinson, the 2023 independent-activity statute, and whether reasonable childhood independence is a protected parental judgment. Not legal advice.</p>
      <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest">
        <a href="${prefix || "./"}" class="hover:underline">The essay</a>
        <a href="${prefix}law/" class="hover:underline">The law</a>
        <a href="${prefix}sources/" class="hover:underline">Sources</a>
      </div>
    </div>
  </footer>
  <script>
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("mobile-nav");
    const open = document.getElementById("icon-open");
    const close = document.getElementById("icon-close");
    btn?.addEventListener("click", () => {
      const shown = !nav.classList.contains("hidden");
      nav.classList.toggle("hidden", shown);
      open.classList.toggle("hidden", !shown);
      close.classList.toggle("hidden", shown);
      btn.setAttribute("aria-expanded", String(!shown));
    });
  </script>
</body>
</html>
`;
}

mkdirSync(join(out, "images"), { recursive: true });
mkdirSync(join(out, "law"), { recursive: true });
mkdirSync(join(out, "sources"), { recursive: true });

const cssBuilt = readdirSync(join(root, ".vercel/output/static/assets")).find((f) => f.endsWith(".css"));
if (!cssBuilt) throw new Error("No built CSS. Run npm run build first.");
copyFileSync(join(root, ".vercel/output/static/assets", cssBuilt), join(out, "site.css"));
copyFileSync(join(root, "public/favicon.svg"), join(out, "favicon.svg"));
for (const name of readdirSync(join(root, "public/images"))) {
  copyFileSync(join(root, "public/images", name), join(out, "images", name));
}
writeFileSync(join(out, ".nojekyll"), "");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const spec of PAGES) {
  await page.goto(origin + spec.path, { waitUntil: "networkidle" });
  const inner = await page.locator("main").innerHTML();
  const active = spec.path === "/" ? "essay" : spec.path.slice(1);
  const html = chrome(spec.prefix, active, rewrite(inner, spec.prefix), spec.title);
  writeFileSync(join(out, spec.file), html);
  console.log("wrote", spec.file, html.length);
}

await browser.close();
console.log("static site ready in docs/");
