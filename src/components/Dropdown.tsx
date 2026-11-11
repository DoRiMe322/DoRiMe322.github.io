import { useEffect, useRef, useState } from 'react';

interface Props {
  label: string;
  options: [string, number][];
  selected: string[];
  onToggle: (v: string) => void;
}

/** A multi-select dropdown: closed by default, opens a list of checkboxes. */
export default function Dropdown({ label, options, selected, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="dd" ref={ref}>
      <button type="button" className={`ddb${selected.length ? ' on' : ''}`} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        {label}
        {selected.length > 0 && <span className="badge">{selected.length}</span>}
        <span aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="ddp" role="group" aria-label={label}>
          {options.map(([v, n]) => (
            <label key={v} className="opt">
              <input type="checkbox" checked={selected.includes(v)} onChange={() => onToggle(v)} />
              <span>{v}</span>
              <span className="mono">{n}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
