import { useEffect, useState } from 'react';

const read = () => window.location.hash.replace(/^#\/?/, '');

/** Returns '' for the home page and 'project/<id>' for a project page. */
export function useHashRoute() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
