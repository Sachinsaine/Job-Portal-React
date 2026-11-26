import { useMemo, useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookmarkCheck,
  Code2,
  Palette,
  BarChart3,
  Megaphone,
  Headphones,
  Briefcase,
  Server,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// Save the CSS you shared as CareersPage.module.css (CSS Modules).
// If you use a plain global stylesheet instead, change this to:
//   import "./CareersPage.css";
// and replace every `styles.x` below with the string "x".
import styles from "./careers.module.css";

const POPULAR_SEARCHES = [
  "Frontend",
  "Product design",
  "Data analyst",
  "Remote",
];

const STATS = [
  { value: "12,400+", label: "Open roles tracked" },
  { value: "3,200", label: "Companies hiring" },
  { value: "48k", label: "Applications managed" },
  { value: "2.4x", label: "Faster offer response" },
];

const CATEGORIES = [
  { name: "Engineering", count: "2,140 open roles", Icon: Code2 },
  { name: "Design", count: "680 open roles", Icon: Palette },
  { name: "Data & Analytics", count: "910 open roles", Icon: BarChart3 },
  { name: "Marketing", count: "745 open roles", Icon: Megaphone },
  { name: "Customer Support", count: "520 open roles", Icon: Headphones },
  { name: "Product", count: "430 open roles", Icon: Briefcase },
  { name: "DevOps & Cloud", count: "390 open roles", Icon: Server },
  { name: "People & HR", count: "275 open roles", Icon: Users },
];

const JOBS = [
  {
    id: 1,
    company: "Northwind Labs",
    title: "Senior Frontend Engineer",
    location: "Hyderabad, India · Hybrid",
    tags: ["React", "TypeScript", "Full-time"],
    salary: "₹28–40 LPA",
    posted: "Posted 2 days ago",
  },
  {
    id: 2,
    company: "Brightpath",
    title: "Product Designer",
    location: "Bengaluru, India · Remote",
    tags: ["Figma", "Design systems", "Full-time"],
    salary: "₹20–32 LPA",
    posted: "Posted 3 days ago",
  },
  {
    id: 3,
    company: "Kitepay",
    title: "Data Analyst",
    location: "Mumbai, India · On-site",
    tags: ["SQL", "Python", "Full-time"],
    salary: "₹14–22 LPA",
    posted: "Posted 4 days ago",
  },
  {
    id: 4,
    company: "Orbit Cloud",
    title: "DevOps Engineer",
    location: "Pune, India · Hybrid",
    tags: ["AWS", "Kubernetes", "Full-time"],
    salary: "₹24–36 LPA",
    posted: "Posted 5 days ago",
  },
  {
    id: 5,
    company: "Greenleaf Health",
    title: "Growth Marketing Manager",
    location: "Remote · India",
    tags: ["SEO", "Paid media", "Contract"],
    salary: "₹18–26 LPA",
    posted: "Posted 1 week ago",
  },
  {
    id: 6,
    company: "Lumen AI",
    title: "Machine Learning Engineer",
    location: "Hyderabad, India · Hybrid",
    tags: ["PyTorch", "MLOps", "Full-time"],
    salary: "₹35–55 LPA",
    posted: "Posted 1 week ago",
  },
];

const COMPANIES = [
  "Northwind",
  "Brightpath",
  "Kitepay",
  "Orbit",
  "Lumen",
  "Greenleaf",
];

export default function CareersPage() {
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState(() => new Set());
  const [applied, setApplied] = useState(() => new Set());

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return JOBS;
    return JOBS.filter((job) =>
      [job.title, job.company, job.location, ...job.tags]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const toggleSaved = (id) =>
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const markApplied = (id) => setApplied((prev) => new Set(prev).add(id));

  const scrollToJobs = () =>
    document
      .getElementById("open-roles")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={styles.page}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.liveDot} />
            {JOBS.length} new roles added this week
          </div>

          <h1>
            Find the job.
            <span>Track every step.</span>
          </h1>

          <p className={styles.heroDescription}>
            Browse open roles, save the ones you like, and follow each
            application from first click to final offer, all in one place.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={scrollToJobs}>
              Browse open roles
              <ArrowRight size={16} />
            </button>
            <button className={styles.secondaryButton}>
              Create free account
            </button>
          </div>

          <div className={styles.popularSearches}>
            Popular:
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  scrollToJobs();
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCircle}>
            <div className={styles.circleContent}>
              <span className={styles.circleSmallText}>THIS MONTH</span>
              <strong>86%</strong>
              <span>of applicants heard back</span>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <strong>Interview scheduled</strong>
              <span>Northwind Labs · Tomorrow, 11:00 AM</span>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon}>
              <Sparkles size={20} />
            </div>
            <div>
              <strong>12 new matches</strong>
              <span>Based on your saved roles</span>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>BROWSE BY FIELD</span>
            <h2>Explore roles by what you do best</h2>
          </div>
          <button className={styles.viewAll}>
            View all fields
            <ArrowRight size={14} />
          </button>
        </div>

        <div className={styles.categoryGrid}>
          {CATEGORIES.map(({ name, count, Icon }) => (
            <div
              key={name}
              className={styles.categoryCard}
              role="button"
              tabIndex={0}
              onClick={() => {
                setQuery(name.split(" ")[0]);
                scrollToJobs();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setQuery(name.split(" ")[0]);
                  scrollToJobs();
                }
              }}
            >
              <div className={styles.categoryIcon}>
                <Icon size={20} />
              </div>
              <h3>{name}</h3>
              <p>{count}</p>
              <ArrowUpRight className={styles.categoryArrow} size={18} />
            </div>
          ))}
        </div>
      </section>

      {/* JOBS */}
      <section
        id="open-roles"
        className={`${styles.section} ${styles.jobsSection}`}
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>OPEN ROLES</span>
            <h2>Fresh openings, ready to track</h2>
          </div>

          <label className={styles.viewAll} style={{ gap: 10 }}>
            <Search size={14} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, company or skill"
              aria-label="Search open roles"
              style={{
                border: "1px solid #e3ebe4",
                borderRadius: 8,
                padding: "9px 12px",
                fontSize: 12,
                minWidth: 230,
                background: "white",
                color: "#253d2c",
              }}
            />
          </label>
        </div>

        {filteredJobs.length === 0 ? (
          <p style={{ color: "#607166", fontSize: 14 }}>
            No roles match “{query}”. Try a different title, company or skill.
          </p>
        ) : (
          <div className={styles.jobsGrid}>
            {filteredJobs.map((job) => {
              const isSaved = saved.has(job.id);
              const isApplied = applied.has(job.id);
              return (
                <article key={job.id} className={styles.jobCard}>
                  <div className={styles.jobTop}>
                    <div className={styles.companyLogo}>{job.company[0]}</div>
                    <button
                      className={styles.bookmark}
                      onClick={() => toggleSaved(job.id)}
                      aria-label={isSaved ? "Remove from saved" : "Save job"}
                      aria-pressed={isSaved}
                    >
                      {isSaved ? (
                        <BookmarkCheck size={22} color="#4d9b68" />
                      ) : (
                        <Bookmark size={22} />
                      )}
                    </button>
                  </div>

                  <span className={styles.jobCompany}>{job.company}</span>
                  <h3>{job.title}</h3>
                  <p className={styles.jobLocation}>{job.location}</p>

                  <div className={styles.jobTags}>
                    {job.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.jobBottom}>
                    <div>
                      <strong>{job.salary}</strong>
                      <span>{job.posted}</span>
                    </div>
                    <button
                      className={styles.applyButton}
                      onClick={() => markApplied(job.id)}
                      disabled={isApplied}
                    >
                      {isApplied ? "Applied" : "Apply"}
                      {!isApplied && <ArrowUpRight size={13} />}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* COMPANIES */}
      <section className={styles.companiesSection}>
        <p>Teams hiring through our platform</p>
        <div className={styles.companyList}>
          {COMPANIES.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.cta}>
          <div>
            <span className={styles.ctaLabel}>GET STARTED</span>
            <h2>Stop losing track of your applications.</h2>
            <p>
              Save roles, set follow-up reminders, and see where every
              application stands. Free to start, no card needed.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <button className={styles.primaryCta}>
              Create free account
              <ArrowRight size={15} />
            </button>
            <button className={styles.secondaryCta}>See how it works</button>
          </div>
        </div>
      </section>
    </div>
  );
}
