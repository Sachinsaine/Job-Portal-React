import { FiArrowRight } from "react-icons/fi";

import styles from "./aboutpage.module.css";
import { NUMBERS, VALUES, MILESTONES, TEAM } from "./aboutData";

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>About us</p>
          <h1>Job hunting shouldn't feel like a second job.</h1>
          <p className={styles.heroText}>
            We built a calmer way to find roles, follow every application and
            hear back, so you can spend your energy on the work that matters.
          </p>
          <div className={styles.heroButtons}>
            <a className={styles.darkButton} href="#team">
              Meet the team
            </a>
            <a className={styles.outlineButton} href="/careers">
              Join us
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <section className={styles.story}>
        <blockquote className={styles.pullQuote}>
          We started with one question: why does finding a job mean losing track
          of everything?
        </blockquote>

        <div className={styles.storyText}>
          <p>
            In 2021, our founders were both job hunting at the same time. They
            kept notes in spreadsheets, chased replies in their inboxes and
            forgot which version of their resume went where.
          </p>
          <p>
            So they built a simple place to keep it all: the roles they liked,
            where each application stood and when to follow up. Friends asked to
            use it. Then strangers did.
          </p>
          <p>
            Today we help tens of thousands of people stay organised, and we
            help employers hear from the right candidates. The goal hasn't
            changed: make the search clearer and kinder for everyone in it.
          </p>
        </div>
      </section>

      <section className={styles.numbers}>
        <ul>
          {NUMBERS.map((n) => (
            <li key={n.label}>
              <strong>{n.value}</strong>
              <span>{n.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.values}>
        <h2>What we stand for</h2>
        <div className={styles.valueGrid}>
          {VALUES.map(({ Icon, title, text }) => (
            <div key={title} className={styles.valueItem}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.historyInner}>
          <h2>Our story so far</h2>
          <ol className={styles.milestones}>
            {MILESTONES.map((m) => (
              <li key={m.year}>
                <span className={styles.year}>{m.year}</span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="team" className={styles.team}>
        <div className={styles.teamHeader}>
          <h2>The people behind it</h2>
          <p>
            A small team of recruiters, engineers and designers who have all
            been job seekers too.
          </p>
        </div>

        <ul className={styles.teamGrid}>
          {TEAM.map((p) => (
            <li key={p.name}>
              <span className={styles.avatar} aria-hidden="true">
                {initials(p.name)}
              </span>
              <h3>{p.name}</h3>
              <span className={styles.role}>{p.role}</span>
              <p>{p.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.closing}>
        <h2>Want to help us build it?</h2>
        <p>We're hiring across engineering, design, data and support.</p>
        <a className={styles.darkButton} href="/careers">
          See open roles
          <FiArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}
