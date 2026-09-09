import { Link } from "@tanstack/react-router";
import { sourceById, type SourceId } from "@/lib/sources";

export function Cite({ id }: { id: SourceId }) {
  const source = sourceById[id];
  if (!source) return null;
  return (
    <Link
      to="/sources"
      hash={id}
      className="cite"
      title={`${source.outlet}${source.date ? `, ${source.date}` : ""}`}
      aria-label={`Source ${source.n}: ${source.outlet}`}
    >
      {source.n}
    </Link>
  );
}

export function Cites({ ids }: { ids: SourceId[] }) {
  return (
    <>
      {ids.map((id) => (
        <Cite key={id} id={id} />
      ))}
    </>
  );
}
