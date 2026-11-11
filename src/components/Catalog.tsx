import { useEffect, useMemo, useRef, useState } from 'react';
import { PROJECTS, type Project } from '../projects';
import type { FacetKey, Selection } from '../util';
import Dropdown from './Dropdown';
import Card from './Card';
import QuickView from './QuickView';

const PAGE = 12;
const EMPTY: Selection = { kind: [], tech: [], niche: [], has: [], year: [] };
const FACETS: { key: FacetKey; label: string }[] = [
  { key: 'kind', label: 'Type' }, { key: 'tech', label: 'Language' }, { key: 'niche', label: 'Niche' }, { key: 'has', label: 'Features' }, { key: 'year', label: 'Year' },
];

const valuesOf = (p: Project, k: FacetKey): string[] => {
  switch (k) {
    case 'kind': return [p.kind];
    case 'tech': return p.tech;
    case 'niche': return [p.niche];
    case 'has': return p.has;
    case 'year': return [String(p.year)];
  }
};

export default function Catalog({ openId }: { openId?: string }) {
  const search = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState<Selection>(EMPTY);
  const [sort, setSort] = useState<'new' | 'az'>('new');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [limit, setLimit] = useState(PAGE);

  const facets = useMemo(() => {
    const out = {} as Record<FacetKey, [string, number][]>;
    FACETS.forEach(({ key }) => {
      const m = new Map<string, number>();
      PROJECTS.forEach((p) => valuesOf(p, key).forEach((v) => m.set(v, (m.get(v) ?? 0) + 1)));
      out[key] = [...m.entries()].sort((a, b) => (key === 'year' ? b[0].localeCompare(a[0]) : b[1] - a[1] || a[0].localeCompare(b[0])));
    });
    return out;
  }, []);

  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const ok = (p: Project) => {
      const hay = [p.name, p.tagline, p.summary, p.kind, p.niche, ...p.tech, ...p.has].join(' ').toLowerCase();
      return words.every((w) => hay.includes(w)) && FACETS.every(({ key }) => !sel[key].length || valuesOf(p, key).some((v) => sel[key].includes(v)));
    };
    const list = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => ok(p));
    list.sort((a, b) => (sort === 'az' ? a.p.name.localeCompare(b.p.name) : b.p.year - a.p.year || b.i - a.i));
    return list.map((x) => x.p);
  }, [q, sel, sort]);

  const toggle = (k: FacetKey, v: string) => {
    setLimit(PAGE);
    setSel((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }));
  };
  const open = (id: string) => { window.location.hash = `#/projects/${id}`; };
  const current = PROJECTS.find((p) => p.id === openId);
  const chosen = FACETS.flatMap(({ key, label }) => sel[key].map((v) => ({ key, label, v })));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key === '/' && t.tagName !== 'INPUT' && t.tagName !== 'TEXTAREA') { e.preventDefault(); search.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="wrap">
      <section className="intro">
        <a className="back mono" href="#/">Back to the main page</a>
        <h1>Projects <span className="count mono">{results.length}</span></h1>
        <p className="muted">A growing archive of websites and small web apps. Search, filter, and open any project for a live preview.</p>
        <input ref={search} className="q" type="search" value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }} placeholder="Search by name, language or niche. Press / to focus" aria-label="Search projects" />
      </section>

      <div className="fbar">
        {FACETS.map(({ key, label }) => <Dropdown key={key} label={label} options={facets[key]} selected={sel[key]} onToggle={(v) => toggle(key, v)} />)}
        <span className="sp" />
        <label className="mono">Sort <select value={sort} onChange={(e) => setSort(e.target.value as 'new' | 'az')}><option value="new">Newest</option><option value="az">A to Z</option></select></label>
        <button type="button" className="chip" aria-pressed={view === 'grid'} onClick={() => setView('grid')}>Grid</button>
        <button type="button" className="chip" aria-pressed={view === 'list'} onClick={() => setView('list')}>List</button>
      </div>

      {chosen.length > 0 && (
        <div className="active">
          {chosen.map(({ key, label, v }) => (
            <button key={key + v} type="button" className="chip on" onClick={() => toggle(key, v)} aria-label={`Remove filter ${label}: ${v}`}>{label}: {v} ×</button>
          ))}
          <button type="button" className="link" onClick={() => { setSel(EMPTY); setLimit(PAGE); }}>Clear all</button>
        </div>
      )}
      <p className="mono muted" aria-live="polite">{results.length} of {PROJECTS.length} projects</p>

      {results.length === 0 ? (
        <div className="empty"><h3>No projects match.</h3><p className="muted">Try fewer words or clear the filters.</p><button type="button" className="btn" onClick={() => { setQ(''); setSel(EMPTY); }}>Reset</button></div>
      ) : (
        <div className={`grid ${view}`}>{results.slice(0, limit).map((p) => <Card key={p.id} p={p} onOpen={open} />)}</div>
      )}
      {results.length > limit && <button type="button" className="btn more" onClick={() => setLimit((l) => l + PAGE)}>Show more ({results.length - limit})</button>}

      <QuickView project={current} ids={results.map((p) => p.id)} onClose={() => { window.location.hash = '#/projects'; }} onGo={open} />
    </div>
  );
}
