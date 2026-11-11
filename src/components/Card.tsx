import type { Project } from '../projects';

/** The project's own first screen, in a browser frame. */
export function Cover({ p, second = false }: { p: Project; second?: boolean }) {
  return (
    <div className="cover">
      <div className="cover__bar" aria-hidden="true"><i /><i /><i /><span>{p.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span></div>
      <img src={second ? p.shot2 : p.shot} alt={`${p.name}: ${second ? 'a section further down the page' : 'the first screen'}`} loading="lazy" decoding="async" />
    </div>
  );
}

export default function Card({ p, onOpen }: { p: Project; onOpen: (id: string) => void }) {
  return (
    <article className="card">
      <button type="button" className="cv" onClick={() => onOpen(p.id)} aria-label={`Preview ${p.name}`}><Cover p={p} /></button>
      <div className="body">
        <div className="meta mono"><span>{p.kind}</span><span>{p.niche}, {p.year}</span></div>
        <h3>{p.name}</h3>
        <p>{p.tagline}</p>
        <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="acts">
          <button type="button" className="link" onClick={() => onOpen(p.id)}>Preview</button>
          <a href={p.live} target="_blank" rel="noreferrer">Live site</a>
          <a href={p.code} target="_blank" rel="noreferrer">Code</a>
        </div>
      </div>
    </article>
  );
}
