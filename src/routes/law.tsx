import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { contributing, independentActivities, sb1367 } from "@/lib/statutes";

export const Route = createFileRoute("/law")({
  component: LawPage,
  head: () => ({
    meta: [{ title: "The law Virginia actually wrote — Half a Mile" }],
  }),
});

function LawPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.2em] text-forest uppercase">
        Statutes
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        The law Virginia actually wrote
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        The Parkinson case sits at the intersection of two provisions: a 2023
        definition of neglect that expressly protects independent walking and
        bicycling, and a Class 1 misdemeanor that incorporates that definition.
        The texts below are from the published Code of Virginia.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight text-ink">
          Senate Bill 1367 (2023)
        </h2>
        <dl className="mt-6 divide-y divide-rule border-y border-rule text-sm sm:text-base">
          <Row label="Bill" value={sb1367.number} />
          <Row label="Chapter" value={sb1367.chapter} />
          <Row label="Patron" value={sb1367.patron} />
          <Row label="Votes" value={sb1367.votes} />
          <Row label="Approved" value={sb1367.approved} />
          <Row label="Effective" value={sb1367.effective} />
          <Row label="Amends" value={sb1367.amends} />
        </dl>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Official bill record:{" "}
          <a
            className="text-forest-deep underline decoration-forest/40 underline-offset-3 hover:decoration-forest"
            href="https://lis.virginia.gov/bill-details/20231/SB1367"
            target="_blank"
            rel="noreferrer"
          >
            LIS · SB 1367
          </a>
          .<Cite id="sb1367" /> Floor votes were unanimous in both chambers.
          The House Courts of Justice committee had reported the bill 19–1
          before the 96–0 floor vote.
          <Cite id="legiscan" />
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight text-ink">
          Independent activities
        </h2>
        <p className="mt-4 text-sm text-muted">{independentActivities.cites}</p>
        <blockquote className="mt-4 rounded-xl bg-card px-5 py-5 text-[1.05rem] leading-relaxed text-ink-soft shadow-[var(--shadow-border)] sm:px-6">
          {independentActivities.text}
        </blockquote>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Two conditions, both conjunctive: the activity must be appropriate
          for this child’s age, maturity, and abilities; and the lack of
          supervision must not be “so grossly negligent as to endanger” the
          child. The examples are not exhaustive, but they are not accidental
          either. Walking and bicycling to nearby locations are named.
          <Cite id="code100" />
        </p>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          The same language appears in DSS regulation 22VAC40-705-30, in the
          physical-neglect section used by local departments when they classify
          a report.
          <Cite id="vac30" />
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight text-ink">
          The criminal statute
        </h2>
        <p className="mt-4 text-sm text-muted">{contributing.cites}</p>
        <blockquote className="mt-4 rounded-xl bg-card px-5 py-5 text-[1.05rem] leading-relaxed text-ink-soft shadow-[var(--shadow-border)] sm:px-6">
          {contributing.text}
        </blockquote>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Full text:{" "}
          <a
            className="text-forest-deep underline decoration-forest/40 underline-offset-3 hover:decoration-forest"
            href="https://law.lis.virginia.gov/vacode/title18.2/chapter8/section18.2-371/"
            target="_blank"
            rel="noreferrer"
          >
            Va. Code § 18.2-371
          </a>
          .<Cite id="code371" /> The charge does not say “unsupervised walk.”
          It requires a willful contribution to a condition that renders a
          child delinquent, in need of services, in need of supervision, or
          abused or neglected as defined in § 16.1-228.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight text-ink">
          Why the two texts have to be read together
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          SB 1367 amended § 16.1-228 as well as § 63.2-100.
          <Cite id="sb1367" /> Section 18.2-371 points at § 16.1-228 for the
          meaning of “abused or neglected.” If a parent’s conduct is the sort
          of independent activity the 2023 statute says is not neglect “for
          that reason alone,” a prosecution that treats the same conduct as
          rendering the child abused or neglected has to explain how the
          carve-out does not apply—typically by proving the activity was not
          appropriate for this child, or that the lack of supervision was
          grossly negligent as to endanger health or safety.
        </p>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          Let Grow notes that Virginia’s criminal code was not separately
          rewritten in 2023.
          <Cite id="letgrow" /> That observation is a reason to read the two
          texts carefully, not a reason to ignore the definition the criminal
          statute itself incorporates. Whether the Commonwealth proved the
          remaining elements in this particular case is a question for the
          courts, not for this page.
        </p>
      </section>

      <p className="mt-12 text-sm text-muted">
        Return to{" "}
        <Link to="/" className="text-forest hover:underline">
          the essay
        </Link>{" "}
        or open the{" "}
        <Link to="/sources" className="text-forest hover:underline">
          annotated sources
        </Link>
        .
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
      <dt className="text-muted">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}
