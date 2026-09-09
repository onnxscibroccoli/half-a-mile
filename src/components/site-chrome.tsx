import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "The essay" },
  { to: "/law", label: "The law" },
  { to: "/sources", label: "Sources" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div
        className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-rule"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div
          className="h-full origin-left bg-forest transition-transform duration-150 ease-out motion-reduce:transition-none"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-rule/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link
            to="/"
            className="font-display text-lg tracking-tight text-ink sm:text-xl"
          >
            Half a Mile
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative py-2 text-sm tracking-wide transition-colors duration-150",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-0 -bottom-[17px] h-px bg-forest" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="relative inline-flex size-11 items-center justify-center text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>

        {open ? (
          <nav
            className="border-t border-rule bg-paper px-4 py-3 md:hidden"
            aria-label="Mobile"
          >
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "block px-1 py-3 text-base",
                    active ? "text-ink" : "text-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-rule bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="font-display text-lg text-ink">Half a Mile</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            An essay on the Virginia case of Karyann Parkinson, the 2023
            independent-activity statute, and whether reasonable childhood
            independence is a protected parental judgment. Not legal advice.
            Facts are drawn from public reporting and the published Code of
            Virginia; every material claim is sourced.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest">
            <Link to="/" className="hover:underline">
              The essay
            </Link>
            <Link to="/law" className="hover:underline">
              The law
            </Link>
            <Link to="/sources" className="hover:underline">
              Sources
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
