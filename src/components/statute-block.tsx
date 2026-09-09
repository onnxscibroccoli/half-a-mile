import type { ReactNode } from "react";

export function StatuteBlock({
  heading,
  cites,
  children,
}: {
  heading: string;
  cites: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-xl bg-card px-5 py-5 shadow-[var(--shadow-border)] sm:px-6 sm:py-6">
      <p className="text-xs font-medium tracking-[0.16em] text-forest uppercase">
        {heading}
      </p>
      <p className="mt-1 text-sm text-muted">{cites}</p>
      <blockquote className="mt-4 border-l-2 border-forest pl-4 text-[0.98rem] leading-relaxed text-ink-soft italic sm:text-base">
        {children}
      </blockquote>
    </aside>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-forest pl-5 sm:pl-6">
      <p className="font-display text-2xl leading-snug text-quote italic sm:text-[1.85rem]">
        {children}
      </p>
    </blockquote>
  );
}
