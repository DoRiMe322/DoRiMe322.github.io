import { useEffect, useRef, useState } from 'react';
import type { Project } from '../projects';

interface Props { project?: Project; ids: string[]; onClose: () => void; onGo: (id: string) => void; }

export default function QuickView({ project: p, ids, onClose, onGo }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [phone, setPhone] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (p && !d.open) d.showModal();
    if (!p && d.open) d.close();
  }, [p]);

  const i = p ? ids.indexOf(p.id) : -1;
  const copy = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); } catch { setCopied(false); }
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <dialog ref={ref} className="qv" onClose={onClose} onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}>
      {p && (
        <div className="qin">
          <div className="qtop">
            <div>
              <h2>{p.name}</h2>
              <p className="muted">{p.tagline}</p>
            </div>
            <button type="button" className="icon" onClick={() => ref.current?.close()} aria-label="Close preview">×</button>
          </div>
          <div className="qbar">
            <button type="button" className="chip" aria-pressed={!phone} onClick={() => setPhone(false)}>Desktop</button>
            <button type="button" className="chip" aria-pressed={phone} onClick={() => setPhone(true)}>Phone</button>
            <span className="sp" />
            <a className="btn" href={p.live} target="_blank" rel="noreferrer">Open live</a>
            <a className="btn ghost" href={p.code} target="_blank" rel="noreferrer">Code</a>
            <button type="button" className="btn ghost" onClick={copy}>{copied ? 'Link copied' : 'Copy link'}</button>
          </div>
          <div className="stage"><iframe key={p.id} src={p.live} title={`${p.name} live preview`} style={{ width: phone ? 390 : '100%' }} /></div>
          <p className="sum">{p.summary} A concept project with a fictional business or sample data.</p>
          <div className="cols">
            <section><h3>What it does</h3><ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul></section>
            <section><h3>How it is built</h3><ul>{[...p.tech.map((t) => `Built with ${t}`), ...p.decisions].map((f) => <li key={f}>{f}</li>)}</ul></section>
            <section><h3>Try it</h3><ul>{p.tryIt.map((f) => <li key={f}>{f}</li>)}</ul></section>
          </div>
          <div className="qnav">
            <button type="button" className="btn ghost" disabled={i <= 0} onClick={() => onGo(ids[i - 1])}>Previous</button>
            <span className="mono muted">{i + 1} of {ids.length}</span>
            <button type="button" className="btn ghost" disabled={i < 0 || i >= ids.length - 1} onClick={() => onGo(ids[i + 1])}>Next</button>
          </div>
        </div>
      )}
    </dialog>
  );
}
