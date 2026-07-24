import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import styles from "./Jobs.module.css";

export const Jobs = () => {
  const { state, typeOfJob } = useContext(JobContext);

  let jobsToDisplay = state.filteredJobs;

  if (typeOfJob !== "") {
    jobsToDisplay.filter((job) => job.jobType === typeOfJob);
  }

  return (
    <main className={styles.jobsPage}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Explore opportunities</p>
        <h1>Recommended Jobs</h1>
        <p className={styles.subtitle}>
          Discover roles that match your skills and career goals.
        </p>
      </div>

      <div className={styles.jobList}>
        {jobsToDisplay.map((j) => {
          return (
            <article className={styles.jobCard} key={j.id}>
              <div className={styles.cardTop}>
                <div className={styles.companyLogo}>{j.company.charAt(0)}</div>

                <div className={styles.jobHeader}>
                  <h2>{j.title}</h2>
                  <p>{j.company}</p>
                </div>

                <button className={styles.saveButton}>♡</button>
              </div>

              <div className={styles.jobDetails}>
                <span>📍 {j.location}</span>
                <span>💼 {j.jobType}</span>
                <span>💰 {j.salary}</span>
              </div>

              <div className={styles.skills}>
                {j.skills.slice(0, 4).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.postedDate}>{j.postedDate}</span>

                <button className={styles.viewButton}>View Details</button>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};
