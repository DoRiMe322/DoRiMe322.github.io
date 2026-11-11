import { useEffect } from 'react';
import { PROFILE } from './projects';
import { useTheme } from './hooks/useTheme';
import { useHashRoute } from './hooks/useHashRoute';
import TopBar from './components/TopBar';
import Home from './components/Home';
import Catalog from './components/Catalog';

export default function App() {
  const { theme, toggle } = useTheme();
  const route = useHashRoute();
  const onProjects = route.startsWith('projects');
  const openId = route.startsWith('projects/') ? route.slice(9) : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [onProjects]);

  return (
    <>
      <TopBar theme={theme} onToggle={toggle} />
      <main>{onProjects ? <Catalog openId={openId} /> : <Home />}</main>
      <footer className="wrap foot mono muted">© 2026 {PROFILE.name} Concept projects use fictional businesses or sample data.</footer>
    </>
  );
}
