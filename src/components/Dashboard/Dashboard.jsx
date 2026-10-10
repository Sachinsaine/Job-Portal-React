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
  const { jobs, loading, user } = useContext(JobContext);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(user);

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
        <div>
          <h1>Welcome back, {user?.name || "Welcome, User!"}</h1>{" "}
          <p>
            Find roles, apply in one click and follow every application from
            here.
          </p>
          <div>
            <button>Find jobs</button>
            <button>My applications</button>
          </div>
        </div>
        <h5>Recent applications</h5>
        {jobs.map((job) => (
          <div key={job._id} className={styles.jobCard}>
            <div>
              <div>
                <h2>{job.jobTitle}</h2>
                <p>{job.company} . 2 days ago</p>
              </div>
              <div>
                <button>Applied</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
