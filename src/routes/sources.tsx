import { useEffect } from "react";
import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { kindLabel, sources, type SourceKind } from "@/lib/sources";

export const Route = createFileRoute("/sources")({
  component: SourcesPage,
  head: () => ({
    meta: [{ title: "Sources — Half a Mile" }],
  }),
});

const ORDER: SourceKind[] = ["reporting", "statute", "legislature", "context"];

function SourcesPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.2em] text-forest uppercase">
        Bibliography
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        Sources
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Every numbered citation in the essay points here. Links go to the
        original reporting, the Code of Virginia, the 2023 bill record, or the
        Hingham documents used only as illustration. If a claim cannot be
        sourced, it is not in the essay.
      </p>
      <p className="mt-3 text-sm text-muted">
        Two details in contemporaneous coverage conflict—how many days passed
        before a warrant issued—and are therefore omitted rather than
        split-the-difference. The June 5 date, the charge, the bench
        conviction, the suspended sentence, and the seven-year registry
        placement are reported in multiple independent outlets.
      </p>

      {ORDER.map((kind) => {
        const group = sources.filter((s) => s.kind === kind);
        return (
          <section key={kind} className="mt-12">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              {kindLabel[kind]}
            </h2>
            <ol className="mt-6 space-y-5">
              {group.map((source) => (
                <li
                  key={source.id}
                  id={source.id}
                  className="scroll-mt-24 rounded-xl bg-card px-5 py-5 shadow-[var(--shadow-border)] target:shadow-[0_0_0_1px_var(--color-forest),var(--shadow-border)] sm:px-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-forest tabular-nums">
                      {source.n}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-muted">
                        {source.outlet}
                        {source.date ? ` · ${source.date}` : ""}
                      </p>
                      <p className="mt-1 font-medium leading-snug text-ink">
                        {source.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
                    {source.note}
                  </p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm text-forest hover:underline"
                  >
                    Open source
                    <ExternalLink className="size-3.5" strokeWidth={1.75} />
                  </a>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <p className="mt-12 text-sm text-muted">
        Return to{" "}
        <Link to="/" className="text-forest hover:underline">
          the essay
        </Link>{" "}
        or{" "}
        <Link to="/law" className="text-forest hover:underline">
          the statutes
        </Link>
        .
      </p>
    </div>
  );
}
