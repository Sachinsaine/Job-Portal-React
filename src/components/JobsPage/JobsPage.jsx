import styles from "./jobspage.module.css";
import "../../../src/index.css";
import { Link } from "react-router-dom";
import { FiMapPin, FiTrash2 } from "react-icons/fi";
import { useContext, useState } from "react";
import { JobContext } from "../../context/JobContext";
import toast from "react-hot-toast";
import { DeleteDialog } from "../DeleteDialog/DeleteDialog";

export const JobsPage = () => {
  const { jobs, setJobs, loading, appliedJobs, setAppliedJobs } =
    useContext(JobContext);
  const [inputTitle, setInputTitle] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputJobType, setInputJobType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const filterByRole = job.jobTitle
      ?.toLowerCase()
      .includes(inputTitle.toLowerCase());

    const filterByCompany = job.company
      ?.toLowerCase()
      .includes(inputTitle.toLowerCase());

    const filterByLocation = job.place
      ?.toLowerCase()
      .includes(inputPlace.toLowerCase());

    const filterByJobType =
      inputJobType === "All" || job.jobType === inputJobType;

    return (
      (filterByRole || filterByCompany) && filterByLocation && filterByJobType
    );
  });

  const handleApply = (jobItem) => {
    const alreadyApplied = appliedJobs.some((job) => job._id === jobItem._id);

    if (alreadyApplied) {
      toast.error("You have already applied!");
      return;
    }
    setAppliedJobs((prev) => [...prev, jobItem]);
    toast.success("Application submitted successfully!");
  };

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

      toast.success("Job has been deleted successfully");
    } catch (error) {
      console.error("Delete job error:", error);
      toast.error(error.message || "Failed to delete job");
    }
  };

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
          placeholder="Search title"
          aria-label="Search title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          aria-label="Location"
          value={inputPlace}
          onChange={(e) => setInputPlace(e.target.value)}
        />

        <select
          value={inputJobType}
          aria-label="Job type"
          onChange={(e) => setInputJobType(e.target.value)}
        >
          <option value="All">All</option>
          {[...new Set(jobs.map((job) => job.jobType))].map((job) => {
            return (
              <option value={job} key={job}>
                {job}
              </option>
            );
          })}
        </select>
      </div>

      <div className={styles.jobGrid}>
        {loading ? (
          <h1>Loading...</h1>
        ) : filteredJobs.length === 0 ? (
          <div className={styles.emptyState}>
            <h2>No jobs found</h2>
            <p>Try changing your filters to find relevant jobs.</p>
          </div>
        ) : (
          filteredJobs.map((jobItem) => {
            return (
              <div className={styles.jobCard} key={jobItem._id}>
                <h2>{jobItem.jobTitle}</h2>
                <DeleteDialog
                  jobId={jobItem._id}
                  onDelete={handleDelete}
                  trigger={
                    <button className={styles.deleteButton} title="Delete job">
                      <FiTrash2 />
                    </button>
                  }
                />
                <p className={styles.company}>{jobItem.company}</p>

                <div className={styles.jobDetails}>
                  <span>
                    <FiMapPin /> {jobItem.place}
                  </span>
                  <span className={styles.salary}>
                    {" "}
                    ₹ {jobItem?.salaryMin} LPA-{jobItem.salaryMax} LPA
                  </span>
                  {/* <span className={styles.jobType}>{jobItem.jobType}</span> */}
                </div>

                <div className={styles.jobActions}>
                  <button
                    className={styles.applyButton}
                    onClick={() => handleApply(jobItem)}
                    disabled={appliedJobs.some(
                      (job) => job._id === jobItem._id,
                    )}
                  >
                    {appliedJobs.some((job) => job._id === jobItem._id)
                      ? "Applied"
                      : "Apply now"}
                  </button>

                  <button className={styles.saveButton}>Save</button>
                </div>
                {/* <DeleteDialog onDelete={handleDelete} /> */}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
