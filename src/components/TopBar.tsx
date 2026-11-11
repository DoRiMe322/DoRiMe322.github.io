import type { Theme } from '../hooks/useTheme';
import { PROFILE } from '../projects';

function go(id: string) {
  if (window.location.hash && window.location.hash !== '#/') window.location.hash = '#/';
  window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
}

const LINKS = [['work', 'Work'], ['services', 'Services'], ['process', 'Process'], ['about', 'About'], ['contact', 'Contact']];

export default function TopBar({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <header className="top">
      <div className="wrap in">
        <a className="name" href="#/">{PROFILE.name}</a>
        <nav aria-label="Main">
          {LINKS.map(([id, label]) => <button key={id} type="button" className="nl" onClick={() => go(id)}>{label}</button>)}
        </nav>
        <span className="sp" />
        <a className="btn acc sm" href="#/projects">Projects</a>
        <button type="button" className="icon" onClick={onToggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
          <svg className="moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          <svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        </button>
      </div>
    </header>
  );
}
