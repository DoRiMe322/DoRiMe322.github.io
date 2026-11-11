export type FacetKey = 'kind' | 'tech' | 'niche' | 'has' | 'year';
export type Selection = Record<FacetKey, string[]>;

export const hash = (s: string) => {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 9973;
  return h;
};

export const initials = (name: string) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
