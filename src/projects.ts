export type Kind = 'Website' | 'Booking site' | 'Web app' | 'Community hub';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  year: number;
  kind: Kind;
  niche: string;
  tech: string[];
  has: string[];
  live: string;
  code: string;
  shot: string;
  shot2: string;
  features: string[];
  decisions: string[];
  tryIt: string[];
}

export const PROFILE = { name: 'Nikita S.', role: 'Front-end developer', place: 'Based in Ukraine', github: 'https://github.com/DoRiMe322', upwork: '', email: '' };

const REPO = 'https://github.com/DoRiMe322';
const PAGES = 'https://dorime322.github.io';

// Add new projects at the end of this list.
export const PROJECTS: Project[] = [
  {
    id: 'brightloop', name: 'Brightloop', year: 2026, kind: 'Website', niche: 'Education', tech: ['React', 'TypeScript', 'Vite'], has: ['Code demo', 'Planner', 'Effects', 'Responsive'],
    tagline: 'An online coding school with a live lesson window and a course planner.',
    summary: 'A concept site for an online school that teaches six programming languages. The first screen is a lesson window over a moving gradient: switch the language, run the sample and point at a word to read its note.',
    live: `${PAGES}/Brightloop/`, code: `${REPO}/Brightloop`,
    shot: 'shots/brightloop.jpg', shot2: 'shots/brightloop-2.jpg',
    features: ['Lesson window with six languages, a Run button and notes on underlined words', 'Course planner: filters, add to plan, hours a week, weeks to finish and the first week laid out', 'Feature cards on painted grounds, one colour per language', 'A statement whose letters fly into place as you scroll', 'Monthly and yearly prices, a project section with a test run and a review, open FAQ'],
    decisions: ['Header, main and footer are separate React roots, so the design kit\'s scripts run on the finished markup.', 'Courses and languages live in one typed data file.', 'Every section fills one or two screens, checked at five widths.'],
    tryIt: ['Switch the language in the first screen and press Run', 'Add Rust to the plan and change the hours a week', 'Toggle monthly and yearly prices'],
  },
  {
    id: 'barbershop', name: 'Linden Street Barbers', year: 2026, kind: 'Booking site', niche: 'Barbershop', tech: ['HTML', 'CSS', 'JavaScript'], has: ['Booking flow', 'Photographs', 'Animations', 'Responsive'],
    tagline: 'A modern barbershop page with prices and step-by-step online booking.',
    summary: 'A concept site for a barbershop on Linden Street: light and clean, with colour photographs, a deep green and brass accent, and booking in four steps. The first screen shows the next free chair.',
    live: `${PAGES}/linden-barbers/`, code: `${REPO}/linden-barbers`,
    shot: 'shots/barbershop.jpg', shot2: 'shots/barbershop-2.jpg',
    features: ['First screen with the next free chair, worked out from the booking calendar', 'Services as cards; "Book this" fills in the form', 'Gallery of the work and three steps of a visit', 'Booking: service, a day from the next two weeks, a free half-hour time, name and email, with a live summary and a confirmation', 'Opening hours with today marked and an "open now" label'],
    decisions: ['One HTML file, no framework: fonts from Google, everything else inline.', 'Free and taken times come from the opening hours and the length of the service, so a long service never overlaps a taken slot.', 'Every field has a visible label and a plain error under it.'],
    tryIt: ['Press "Book this time" in the first screen', 'Pick Haircut and beard and see which times disappear', 'Send the form without an email'],
  },
  {
    id: 'soft-spot', name: 'Soft Spot Massage', year: 2026, kind: 'Booking site', niche: 'Wellness', tech: ['HTML', 'CSS', 'JavaScript'], has: ['Booking flow', 'Finder', 'Photographs', 'Responsive'],
    tagline: 'A calm massage studio page that suggests a session from two questions.',
    summary: 'A concept site for a one-room massage studio on Harbour Lane, on warm linen with sage and clay accents and an even grid. A finder matches what brings a visitor in and the pressure they like to a session, then the request form takes over.',
    live: `${PAGES}/soft-spot-massage/`, code: `${REPO}/soft-spot-massage`,
    shot: 'shots/soft-spot.jpg', shot2: 'shots/soft-spot-2.jpg',
    features: ['Centred first screen with one wide photograph and the key facts', 'Four session cards; a 60 / 90 minute switch changes the price', 'Session finder that fills the request form', 'What happens in the hour, in three steps', 'Questions as an accordion and a request form with day and time-of-day choices'],
    decisions: ['One grid for every section, so blocks line up from top to bottom.', 'The finder is a short rule set, easy to change with the menu.', 'Plain-language pressure choices instead of a numeric scale.'],
    tryIt: ['Tick two reasons and choose a pressure', 'Switch Deep tissue to 90 minutes', 'Press Request this session and check the form'],
  },
  {
    id: 'deadlock-hub', name: 'Deadlock Hub', year: 2026, kind: 'Community hub', niche: 'Gaming', tech: ['HTML', 'CSS', 'JavaScript', 'Live API'], has: ['Live data', 'Filters', 'Interactive map', 'Data tables', 'Themes', 'Responsive'],
    tagline: 'A fan hub for Deadlock on live data: win rates, item paths, builds, the leaderboard, news and a map timings guide.',
    summary: 'A community site for the game Deadlock that reads the open deadlock-api.com straight from the browser. Win and pick rates, item paths from real games, top community builds, the ranked leaderboard and official patch notes are always current. A daily snapshot keeps it working if the API is down.',
    live: `${PAGES}/deadlock-hub/`, code: `${REPO}/deadlock-hub`,
    shot: 'shots/deadlock-hub.jpg', shot2: 'shots/deadlock-hub-2.jpg',
    features: ['Hero of the week on official hero art, with match counts and the strongest and most picked heroes', 'Heroes: win rate, pick rate, KDA and souls, filtered by period, rank and role', 'Item path from real games by phase, with buy time and win rate, plus the top three community builds', 'Ranked leaderboard by region, season and hero', 'Farm and timings: game clock, map with every camp and objective, souls at any minute, a route per phase'],
    decisions: ['No backend: the browser calls the public API, and GitHub Actions saves a fallback copy every morning.', 'Spawn timers are checked against the official patch notes and kept in one place in the code.', 'Plain HTML, CSS and JavaScript, no build step.'],
    tryIt: ['Open a hero and switch the rank filter to Oracle and up', 'Drag the game clock in Farm and timings', 'Switch the leaderboard to the previous season'],
  },
];
