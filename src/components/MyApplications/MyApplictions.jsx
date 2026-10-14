import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from "./myApplication.module.css";

export const Myapplication = () => {
  const { appliedJobs, setAppliedJobs, loading } = useContext(JobContext);

  const handleWithdraw = (id) => {
    setAppliedJobs((prev) => prev.filter((job) => job._id !== id));
  };

  return (
    <div className={styles.applicationsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>My Applications</h1>
          <p>Track your job applications and manage your opportunities.</p>
        </div>

        <div className={styles.applicationCount}>
          <span>{appliedJobs.length}</span>
          <small>Applications</small>
        </div>
      </div>

      {loading ? (
        <div className={styles.statusState}>
          <p>Loading applications...</p>
        </div>
      ) : appliedJobs.length === 0 ? (
        <div className={styles.emptyState}>
          <h2>No applications yet</h2>
          <p>
            You haven't applied for any jobs yet. Explore opportunities and
            submit your first application.
          </p>
        </div>
      ) : (
        <div className={styles.applicationGrid}>
          {appliedJobs.map((job) => (
            <div className={styles.applicationCard} key={job._id}>
              <div className={styles.cardHeader}>
                <div className={styles.jobInitial}>
                  {job.company?.charAt(0)?.toUpperCase() || "J"}
                </div>

                <div className={styles.jobHeading}>
                  <h2>{job.jobTitle}</h2>
                  <p>{job.company}</p>
                </div>

                <span className={styles.statusBadge}>Applied</span>
              </div>

              <div className={styles.jobDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>
                    {job.place || "Not specified"}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Salary</span>
                  <span className={styles.detailValue}>
                    ₹{job.salaryMin ?? "—"} – ₹{job.salaryMax ?? "—"} LPA
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Experience</span>
                  <span className={styles.detailValue}>
                    {job.experienceMin ?? "—"} – {job.experienceMax ?? "—"} Yrs
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Job type</span>
                  <span className={styles.jobType}>
                    {job.jobType || "Not specified"}
                  </span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.uploadedDate}>
                  Posted:{" "}
                  {job.createdAt
                    ? new Date(job.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "N/A"}
                </span>

                <button
                  className={styles.withdrawButton}
                  onClick={() => handleWithdraw(job._id)}
                >
                  Withdraw application
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
