import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

import styles from "./Registration.module.css";
import { Link } from "react-router-dom";

const registrationSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),

    email: z.string().trim().email("Please enter a valid email address"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string().min(6, "Please confirm your password"),

    accountType: z.enum(["jobSeeker", "employer"]),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registrationSchema),

    defaultValues: {
      accountType: "jobSeeker",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:4001/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <main className={styles.registrationPage}>
      <div className={styles.registrationContainer}>
        <section className={styles.registrationContent}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>
              <FiBriefcase />
            </span>

            <span>JobTrack</span>
          </div>

          <div className={styles.heading}>
            <span className={styles.sectionLabel}>START YOUR JOURNEY</span>

            <h1>
              Build your
              <span>next chapter.</span>
            </h1>

            <p>
              Create your JobTrack account and discover opportunities, connect
              with companies, and take control of your career.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <FiCheckCircle />
              </span>

              <div>
                <strong>Discover better opportunities</strong>
                <span>Find jobs that match your skills and goals.</span>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <FiCheckCircle />
              </span>

              <div>
                <strong>Manage your applications</strong>
                <span>Keep your job search organized in one place.</span>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <FiCheckCircle />
              </span>

              <div>
                <strong>Connect with employers</strong>
                <span>Get discovered by companies looking for talent.</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.registrationCard}>
          <div className={styles.cardHeader}>
            <span className={styles.mobileLabel}>CREATE YOUR ACCOUNT</span>

            <h2>Create an account</h2>

            <p>Join JobTrack and start your next career move.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full name</label>

              <input
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                {...register("name")}
              />

              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email")}
              />

              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                {...register("password")}
              />

              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm password</label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                {...register("confirmPassword")}
              />

              {errors.confirmPassword && (
                <span className={styles.error}>
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Account type</label>

              <div className={styles.accountTypes}>
                <label className={styles.accountOption}>
                  <input
                    type="radio"
                    value="jobSeeker"
                    {...register("accountType")}
                  />

                  <span>
                    <strong>Job Seeker</strong>
                    <small>Find your next job</small>
                  </span>
                </label>

                <label className={styles.accountOption}>
                  <input
                    type="radio"
                    value="employer"
                    {...register("accountType")}
                  />

                  <span>
                    <strong>Employer</strong>
                    <small>Find great talent</small>
                  </span>
                </label>
              </div>
            </div>

            <label className={styles.terms}>
              <input type="checkbox" {...register("terms")} />

              <span>
                I agree to the <a href="#terms">Terms & Conditions</a> and{" "}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            {errors.terms && (
              <span className={styles.error}>{errors.terms.message}</span>
            )}

            <button type="submit" className={styles.registerButton}>
              Create account
              <FiArrowRight />
            </button>
          </form>

          <div className={styles.loginLink}>
            <span>Already have an account?</span>

            <Link to="/login">Sign in</Link>
          </div>

          <div className={styles.security}>
            <FiShield />

            <span>Your personal information is securely protected.</span>
          </div>
        </section>
      </div>
    </main>
  );
};
