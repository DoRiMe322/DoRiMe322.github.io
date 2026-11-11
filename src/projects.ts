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
    tagline: 'A barbershop page with prices, opening hours and online booking by the half hour.',
    summary: 'A concept site for a barbershop on Linden Street, in black-and-white photographs and an ochre accent. Visitors read the prices, pick a service and a day, and see the free half-hour slots.',
    live: `${PAGES}/linden-barbers/`, code: `${REPO}/linden-barbers`,
    shot: 'shots/barbershop.jpg', shot2: 'shots/barbershop-2.jpg',
    features: ['Full-width photograph of the shop and one booking button', 'Price list with each service\'s length beside a photograph that develops like a print', 'Booking with free and taken slots, closed days explained, and a live summary with the price', 'A phone bar with the booking button once the first screen has scrolled away'],
    decisions: ['Slots are generated from the opening hours in a few lines of plain JavaScript.', 'Every field has a visible label and an error under it.', 'No build step: one HTML file and the design kit.'],
    tryIt: ['Pick a Monday to see the closed-day message', 'Choose a service and watch the summary change'],
  },
  {
    id: 'soft-spot', name: 'Soft Spot Massage', year: 2026, kind: 'Booking site', niche: 'Wellness', tech: ['HTML', 'CSS', 'JavaScript'], has: ['Booking flow', 'Finder', 'Photographs', 'Responsive'],
    tagline: 'A massage studio page that suggests a session from two questions.',
    summary: 'A concept site for a one-room massage studio on Harbour Lane. A finder matches what brings a visitor in and the pressure they like to a session, then the request form takes over.',
    live: `${PAGES}/soft-spot-massage/`, code: `${REPO}/soft-spot-massage`,
    shot: 'shots/soft-spot.jpg', shot2: 'shots/soft-spot-2.jpg',
    features: ['Visit block with the therapist, address, hours, cancelling and paying', 'Sessions and prices in three groups over a strip of four detail photographs', 'Session finder that fills the request form', 'Open answers to the usual questions and a request form'],
    decisions: ['The finder is a short rule set, easy to change with the menu.', 'Photographs share one warm daylight grade.', 'Plain-language pressure choices instead of a numeric scale.'],
    tryIt: ['Tick two reasons and choose a pressure', 'Press Request this session and check the form'],
  },
  {
    id: 'deadlock-hub', name: 'Deadlock Hub', year: 2026, kind: 'Community hub', niche: 'Gaming', tech: ['HTML', 'CSS', 'JavaScript'], has: ['Filters', 'Forum', 'Data tables', 'Themes', 'Responsive'],
    tagline: 'A fan-made hub with builds for 44 heroes, top players, news, patches, a farm planner and a forum.',
    summary: 'A concept community site for the game Deadlock. A night city opens it, and the team switch changes the photograph and every accent. Statistics are sample data.',
    live: `${PAGES}/deadlock-hub/`, code: `${REPO}/deadlock-hub`,
    shot: 'shots/deadlock-hub.jpg', shot2: 'shots/deadlock-hub-2.jpg',
    features: ['Night city hero that changes with the team colour', 'Six section tiles, each in its own colour', 'Builds for all 44 heroes with search and sorting', 'Leaderboard with a region filter and the top three marked', 'Farm route by game minute, patch timeline and a forum with voting'],
    decisions: ['Sample statistics are labelled as such, with the date they were checked.', 'Builds for every hero come from one data list.', 'One file, no build step, works offline.'],
    tryIt: ['Switch the team colour at the top right', 'Open Farm route and drag the minute slider', 'Search a hero in Builds'],
  },
];
