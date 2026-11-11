import { PROFILE, PROJECTS } from '../projects';
import { ABOUT, SERVICES, SKILLS, STEPS } from '../content';
import Deck from './Deck';
import { Cover } from './Card';

export default function Home() {
  const techs = new Set(PROJECTS.flatMap((p) => p.tech)).size;
  const niches = new Set(PROJECTS.map((p) => p.niche)).size;
  return (
    <>
      <section className="wrap hero2">
        <div>
          <p className="kick">{PROFILE.name} · {PROFILE.role} · {PROFILE.place.replace('Based in ', '')}</p>
          <h1>Websites and booking pages for small businesses</h1>
          <p className="lead">Sites that say what you sell, show it in photographs and let people book or order on the page. Built by hand in React or plain HTML.</p>
          <div className="cta">
            <a className="btn acc big" href="#work">See the work</a>
            <a className="btn ghost big" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub profile</a>
          </div>
          <ul className="stats">
            <li><b>{PROJECTS.length}</b><span className="mono muted">live projects</span></li>
            <li><b>{techs}</b><span className="mono muted">technologies</span></li>
            <li><b>{niches}</b><span className="mono muted">niches</span></li>
          </ul>
        </div>
        <Deck />
      </section>

      <section id="work" className="wrap sec">
        <div className="rowh"><h2>Selected work</h2><a className="btn" href="#/projects">Browse and filter all {PROJECTS.length}</a></div>
        <div className="work">
          {PROJECTS.map((p, i) => (
            <article className="wrow" key={p.id}>
              <div className="wrow__text">
                <p className="mono muted">{String(i + 1).padStart(2, '0')} · {p.kind} · {p.niche}</p>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="acts">
                  <a href={`#/projects/${p.id}`}>Preview here</a>
                  <a href={p.live} target="_blank" rel="noreferrer">Live site</a>
                  <a href={p.code} target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
              <a className="wrow__pics" href={`#/projects/${p.id}`} aria-label={`Preview ${p.name}`}>
                <Cover p={p} />
                <Cover p={p} second />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="wrap sec">
        <h2>What I can build</h2>
        <div className="four">
          {SERVICES.map((s, i) => <div className="box svc" key={s.t} style={{ ['--n' as string]: i }}><h3>{s.t}</h3><p className="muted">{s.d}</p></div>)}
        </div>
      </section>

      <section id="process" className="wrap sec">
        <h2>How we work</h2>
        <ol className="four steps">
          {STEPS.map(([t, d], i) => <li key={t}><span className="step-n">{i + 1}</span><h3>{t}</h3><p className="muted">{d}</p></li>)}
        </ol>
      </section>

      <section id="about" className="wrap sec two">
        <div>
          <h2>About</h2>
          {SKILLS.map((s) => (
            <div className="skill" key={s.group}>
              <p className="mono muted">{s.group}</p>
              <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <div>{ABOUT.map((t) => <p key={t}>{t}</p>)}</div>
      </section>

      <section id="contact" className="sec">
        <div className="band">
          <div className="wrap">
            <h2>Need a site for your business?</h2>
            <p>Send me what you sell and to whom. I reply with a plan, a price and a date. The code of every project here is on GitHub.</p>
            <div className="cta">
              <a className="btn inv big" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub profile</a>
              {PROFILE.upwork && <a className="btn ghost big" href={PROFILE.upwork} target="_blank" rel="noreferrer">Upwork profile</a>}
              {PROFILE.email && <a className="btn ghost big" href={`mailto:${PROFILE.email}`}>Email me</a>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
