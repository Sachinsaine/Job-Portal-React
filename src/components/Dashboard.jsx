import { SubNavbar } from "./SubNavbar";
import styles from "./Dashboard.module.css";
import { Jobs } from "./Jobs";

export const Dashboard = () => {
  return (
    <main className={styles.dashboard}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Find your next role</p>

        <h1>Chart a course to work that fits.</h1>

        <p className={styles.description}>
          Trailhead maps open roles like a trail guide — search, save the ones
          worth a look, and track every application from first contact to offer.
        </p>

        <SubNavbar />

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>10</span>
            <span className={styles.statLabel}>Open roles</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statNumber}>7</span>
            <span className={styles.statLabel}>Companies</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>Remote-friendly</span>
          </div>
        </div>
      </section>

      {/* Main jobs layout */}
      <section className={styles.jobsSection}>
        {/* Left side */}
        <aside className={styles.filters}>
          <h2>Filters</h2>

          <div className={styles.filterGroup}>
            <h3>Job type</h3>

            <label>
              <input type="checkbox" />
              Full-time
            </label>

            <label>
              <input type="checkbox" />
              Part-time
            </label>

            <label>
              <input type="checkbox" />
              Contract
            </label>

            <label>
              <input type="checkbox" />
              Remote
            </label>
          </div>

          <div className={styles.filterGroup}>
            <h3>Category</h3>

            <label>
              <input type="checkbox" />
              Customer Support
            </label>

            <label>
              <input type="checkbox" />
              Design
            </label>

            <label>
              <input type="checkbox" />
              Engineering
            </label>

            <label>
              <input type="checkbox" />
              Finance
            </label>

            <label>
              <input type="checkbox" />
              Marketing
            </label>

            <label>
              <input type="checkbox" />
              Operations
            </label>

            <label>
              <input type="checkbox" />
              Sales
            </label>
          </div>

          <button className={styles.clearButton}>Clear filters</button>
        </aside>

        {/* Right side */}
        <section className={styles.jobsContent}>
          <Jobs />
        </section>
      </section>
    </main>
  );
};
