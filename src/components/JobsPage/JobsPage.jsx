import styles from "./jobspage.module.css";
import "../../../src/index.css";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
export const JobsPage = () => {
  return (
    <div className={styles.jobsPage}>
      <div className={styles.jobsHeader}>
        <div>
          <h1>Find your next job</h1>
          <p className={styles.subtitle}>
            Discover opportunities that match your skills.
          </p>
        </div>

        <Link to="/postjobs" className={styles.addJobButton}>
          + Add Job
        </Link>
      </div>

      <div className={styles.filterBar}>
        <input
          type="text"
          placeholder="Search title or company"
          aria-label="Search title or company"
        />

        <input type="text" placeholder="Location" aria-label="Location" />

        <select defaultValue="" aria-label="Job type">
          <option value="">All types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className={styles.jobGrid}>
        <div className={styles.jobCard}>
          <h2>Frontend Developer</h2>
          <p className={styles.company}>Zomato</p>

          <div className={styles.jobDetails}>
            <span>
              <FiMapPin /> Hyderabad
            </span>
            <span className={styles.salary}>₹18–24 LPA</span>
          </div>

          <div className={styles.jobActions}>
            <button className={styles.applyButton}>Apply now</button>

            <button className={styles.saveButton}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
