import { requireLogin } from "../../utils/authGuard";
import styles from "./Homepage.module.css";
import {
  FiArrowRight,
  FiTrendingUp,
  FiCheckCircle,
  FiCode,
  FiBarChart2,
  FiPenTool,
} from "react-icons/fi";

const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "G",
    title: "Frontend Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹18L - ₹28L",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "M",
    title: "Software Engineer",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹20L - ₹32L",
    tags: ["React", "Node.js", "Azure"],
  },
  {
    id: 3,
    company: "Razorpay",
    logo: "R",
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "₹14L - ₹22L",
    tags: ["React", "TypeScript", "Next.js"],
  },
];

const categories = [
  {
    icon: <FiCode />,
    title: "Software Development",
    jobs: "12,480 jobs",
  },
  {
    icon: <FiBarChart2 />,
    title: "Data & Analytics",
    jobs: "8,240 jobs",
  },
  {
    icon: <FiPenTool />,
    title: "Design & Creative",
    jobs: "5,620 jobs",
  },
  {
    icon: <FiTrendingUp />,
    title: "Marketing & Sales",
    jobs: "7,850 jobs",
  },
];

const companies = ["Google", "Microsoft", "Amazon", "Razorpay", "Adobe"];

export const Homepage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.liveDot}></span>
            50,000+ opportunities waiting for you
          </div>

          <h1>
            Find work that
            <span> moves you forward.</span>
          </h1>

          <p className={styles.heroDescription}>
            Discover meaningful opportunities from companies that are building
            the future. Your next career move starts here.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={requireLogin}>
              Explore Jobs
              <FiArrowRight />
            </button>

            <button className={styles.secondaryButton} onClick={requireLogin}>
              Create Profile
            </button>
          </div>

          <div className={styles.popularSearches}>
            <span>Popular roles</span>

            <button onClick={requireLogin}>Frontend Developer</button>
            <button onClick={requireLogin}>React Developer</button>
            <button onClick={requireLogin}>UI/UX Designer</button>
            <button onClick={requireLogin}>Data Analyst</button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCircle}>
            <div className={styles.circleContent}>
              <span className={styles.circleSmallText}>NEW OPPORTUNITIES</span>

              <strong>4.8K+</strong>

              <span>jobs added this week</span>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <FiCheckCircle />
            </div>

            <div>
              <strong>You're hired!</strong>
              <span>Frontend Engineer</span>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon}>
              <FiTrendingUp />
            </div>

            <div>
              <strong>Career growth</strong>
              <span>Find your next step</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.stats}>
          <div>
            <strong>50K+</strong>
            <span>Active jobs</span>
          </div>

          <div>
            <strong>12K+</strong>
            <span>Companies hiring</span>
          </div>

          <div>
            <strong>2M+</strong>
            <span>Job seekers</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Profile satisfaction</span>
          </div>
        </div>
      </section>

      <section className={styles.section} id="categories">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>EXPLORE OPPORTUNITIES</span>

            <h2>What kind of work are you looking for?</h2>
          </div>

          <button className={styles.viewAll} onClick={requireLogin}>
            View all
            <FiArrowRight />
          </button>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div className={styles.categoryCard} key={category.title}>
              <div className={styles.categoryIcon}>{category.icon}</div>

              <h3>{category.title}</h3>

              <p>{category.jobs}</p>

              <div className={styles.categoryArrow}>
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.jobsSection} ${styles.section}`} id="jobs">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>FEATURED OPPORTUNITIES</span>

            <h2>Jobs worth taking a look at</h2>
          </div>

          <button className={styles.viewAll} onClick={requireLogin}>
            Explore all jobs
            <FiArrowRight />
          </button>
        </div>

        <div className={styles.jobsGrid}>
          {jobs.map((job) => (
            <article className={styles.jobCard} key={job.id}>
              <div className={styles.jobTop}>
                <div className={styles.companyLogo}>{job.logo}</div>

                <button className={styles.bookmark} onClick={requireLogin}>
                  ♡
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

                  <span>{job.type}</span>
                </div>

                <button className={styles.applyButton} onClick={requireLogin}>
                  View Job
                  <FiArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.companiesSection} id="companies">
        <p>People are building their careers at</p>

        <div className={styles.companyList}>
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.cta}>
          <div>
            <span className={styles.ctaLabel}>YOUR NEXT MOVE</span>

            <h2>
              Your next opportunity
              <br />
              could be closer than you think.
            </h2>

            <p>
              Build your profile, discover opportunities and take the next step
              in your career.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <button className={styles.primaryCta} onClick={requireLogin}>
              Get Started
              <FiArrowRight />
            </button>

            <button className={styles.secondaryCta} onClick={requireLogin}>
              Browse Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
