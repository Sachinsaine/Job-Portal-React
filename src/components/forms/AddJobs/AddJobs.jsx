import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FiBriefcase,
  FiMapPin,
  FiDollarSign,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./addjobs.module.css";
import { useContext } from "react";
import { JobContext } from "../../../context/JobContext";
import toast from "react-hot-toast";

const jobSchema = z
  .object({
    company: z.string().trim().min(1, "Company is required"),
    jobTitle: z.string().trim().min(1, "Job title is required"),

    experienceMin: z.coerce
      .number()
      .min(0, "Minimum experience cannot be negative"),

    experienceMax: z.coerce
      .number()
      .min(0, "Maximum experience cannot be negative"),

    salaryMin: z.coerce.number().min(0, "Minimum salary cannot be negative"),

    salaryMax: z.coerce.number().min(0, "Maximum salary cannot be negative"),

    place: z.string().trim().min(1, "Location is required"),

    jobType: z
      .string()
      .min(1, "Please select a job type")
      .refine(
        (value) =>
          ["full-time", "part-time", "contract", "internship"].includes(value),
        "Please select a valid job type",
      ),
  })
  .refine((data) => data.experienceMax >= data.experienceMin, {
    message:
      "Maximum experience must be greater than or equal to minimum experience",
    path: ["experienceMax"],
  })
  .refine((data) => data.salaryMax >= data.salaryMin, {
    message: "Maximum salary must be greater than or equal to minimum salary",
    path: ["salaryMax"],
  });

export const AddJobs = () => {
  const { jobs, setJobs } = useContext(JobContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      company: "",
      jobTitle: "",
      experienceMin: "",
      experienceMax: "",
      salaryMin: "",
      salaryMax: "",
      place: "",
      jobType: "",
    },
  });

  console.log(jobs);
  const onSubmit = async (formValues) => {
    console.log("Job details:", formValues);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/jobs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to post job");
      }

      const data = await response.json();
      const newJob = data.job ?? data;
      setJobs((prev) => [...prev, newJob]);
      toast.success("Job added successfully");
      reset();
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <main className={styles.addJobsPage}>
      <div className={styles.addJobsContainer}>
        <section className={styles.addJobsCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardLabel}>NEW JOB LISTING</span>

            <h2>Post a job</h2>

            <p>Provide the details below to create your job listing.</p>
          </div>

          <form
            className={styles.jobForm}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className={styles.formGroup}>
              <label htmlFor="company">Company name</label>

              <input
                id="company"
                type="text"
                placeholder="e.g. Zomato"
                autoComplete="organization"
                {...register("company")}
              />

              {errors.company && (
                <span className={styles.error}>{errors.company.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="jobTitle">Job title</label>

              <input
                id="jobTitle"
                type="text"
                placeholder="e.g. Frontend Developer"
                {...register("jobTitle")}
              />

              {errors.jobTitle && (
                <span className={styles.error}>{errors.jobTitle.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="place">
                <FiMapPin className={styles.labelIcon} />
                Location
              </label>

              <input
                id="place"
                type="text"
                placeholder="e.g. Hyderabad"
                {...register("place")}
              />

              {errors.place && (
                <span className={styles.error}>{errors.place.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="jobType">Employment type</label>

              <select id="jobType" {...register("jobType")}>
                <option value="">Select job type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>

              {errors.jobType && (
                <span className={styles.error}>{errors.jobType.message}</span>
              )}
            </div>

            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon}>
                <FiBriefcase />
              </span>

              <div>
                <h3>Experience requirements</h3>
                <p>Specify the expected experience in years.</p>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="experienceMin">Minimum experience</label>

              <div className={styles.inputWithSuffix}>
                <input
                  id="experienceMin"
                  type="number"
                  min="0"
                  step="any"
                  placeholder="0"
                  {...register("experienceMin")}
                />
                <span>Years</span>
              </div>

              {errors.experienceMin && (
                <span className={styles.error}>
                  {errors.experienceMin.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="experienceMax">Maximum experience</label>

              <div className={styles.inputWithSuffix}>
                <input
                  id="experienceMax"
                  type="number"
                  min="0"
                  step="any"
                  placeholder="3"
                  {...register("experienceMax")}
                />
                <span>Years</span>
              </div>

              {errors.experienceMax && (
                <span className={styles.error}>
                  {errors.experienceMax.message}
                </span>
              )}
            </div>

            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon}>
                <FiDollarSign />
              </span>

              <div>
                <h3>Salary range</h3>
                <p>Enter the annual salary in lakhs (LPA).</p>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="salaryMin">Minimum salary</label>

              <div className={styles.inputWithSuffix}>
                <input
                  id="salaryMin"
                  type="number"
                  min="0"
                  step="any"
                  placeholder="4"
                  {...register("salaryMin")}
                />
                <span>LPA</span>
              </div>

              {errors.salaryMin && (
                <span className={styles.error}>{errors.salaryMin.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="salaryMax">Maximum salary</label>

              <div className={styles.inputWithSuffix}>
                <input
                  id="salaryMax"
                  type="number"
                  min="0"
                  step="any"
                  placeholder="8"
                  {...register("salaryMax")}
                />
                <span>LPA</span>
              </div>

              {errors.salaryMax && (
                <span className={styles.error}>{errors.salaryMax.message}</span>
              )}
            </div>

            <div className={styles.formActions}>
              <Link to="/jobspage" className={styles.cancelButton}>
                <FiArrowLeft />
                Cancel
              </Link>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding job..." : "Publish job"}
                <FiArrowRight />
              </button>
            </div>
          </form>

          <div className={styles.security}>
            <span className={styles.securityIcon}>✓</span>

            <p>
              Review your job details before publishing. You can manage your
              listings from your dashboard.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
