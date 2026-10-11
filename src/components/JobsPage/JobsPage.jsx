import styles from "./jobspage.module.css";
import "../../../src/index.css";
import { Link } from "react-router-dom";
import { FiMapPin, FiTrash2 } from "react-icons/fi";
import { useContext, useState } from "react";
import { JobContext } from "../../context/JobContext";
import toast from "react-hot-toast";

export const JobsPage = () => {
  const { jobs, setJobs } = useContext(JobContext);
  const [inputValue, setInputValue] = useState("");

  const filterJobs = jobs.filter((job) =>
    job.jobTitle?.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleDelete = async (jobId) => {
    console.log(jobId);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/jobs/${jobId}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete job");
      }

      setJobs((prev) => prev.filter((job) => job._id !== jobId));

      toast.error("Job has been deleted successfully");
    } catch (error) {
      console.error("Delete job error:", error);
      toast.error(error.message || "Failed to delete job");
    }
  };
  console.log(filterJobs);

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
          onChange={(e) => setInputValue(e.target.value)}
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
        {filterJobs.map((jobItem) => {
          return (
            <div className={styles.jobCard}>
              <h2>{jobItem.jobTitle}</h2>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(jobItem._id)}
                aria-label={`Delete ${jobItem.jobTitle}`}
                title="Delete job"
              >
                <FiTrash2 />
              </button>
              <p className={styles.company}>{jobItem.company}</p>

              <div className={styles.jobDetails}>
                <span>
                  <FiMapPin /> {jobItem.place}
                </span>
                <span className={styles.salary}>
                  {" "}
                  ₹ {jobItem.salaryMin} LPA-{jobItem.salaryMax} LPA
                </span>
              </div>

              <div className={styles.jobActions}>
                <button className={styles.applyButton}>Apply now</button>

                <button className={styles.saveButton}>Save</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
