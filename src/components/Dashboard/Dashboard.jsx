import { useContext, useState } from "react";
import {
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiMapPin,
} from "react-icons/fi";

import styles from "./dashboard.module.css";
import { JobContext } from "../../context/JobContext";

export const Dashboard = () => {
  const { jobs, loading } = useContext(JobContext);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.dashboard}>
      <aside
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.sidebarHeader}>
          {sidebarOpen && <h2>Filters</h2>}

          <button
            className={styles.toggleButton}
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        <div className={styles.filterList}>
          <button className={styles.filterItem}>
            <FiBriefcase />
            {sidebarOpen && <span>Job Type</span>}
          </button>

          <button className={styles.filterItem}>
            <FiClock />
            {sidebarOpen && <span>Experience</span>}
          </button>

          <button className={styles.filterItem}>
            <FiMapPin />
            {sidebarOpen && <span>Location</span>}
          </button>

          <button className={styles.filterItem}>
            <FiDollarSign />
            {sidebarOpen && <span>Salary</span>}
          </button>
        </div>
      </aside>

      <main className={styles.jobs}>
        <h1>Job Listings</h1>

        {jobs.map((job) => (
          <div key={job._id} className={styles.jobCard}>
            <h2>Role: {job.jobTitle}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.place}</p>
            <div>
              Experience: Min - <span>{job.experience.min}</span>, Max -{" "}
              <span>{job.experience.max}</span>
            </div>
            <div>
              Salary: Min - <span>{job.experience.min}LPA</span>, Max -{" "}
              <span>{job.experience.max}LPA</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
