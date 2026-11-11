import { PROJECTS } from '../projects';

/** The four sites' first screens as a collage: each opens its project. */
export default function Deck() {
  return (
    <div className="deck">
      {PROJECTS.slice(0, 4).map((p, i) => (
        <a key={p.id} className={`dcard dcard--${i}`} href={`#/projects/${p.id}`} aria-label={`Open ${p.name}`}>
          <img src={p.shot} alt="" loading={i < 2 ? 'eager' : 'lazy'} />
          <span>{p.name}</span>
        </a>
      ))}
    </div>
  );
}
