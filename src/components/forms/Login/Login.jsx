import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Login failed");
        return;
      }

      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <section className={styles.loginContent}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>
              <img src={logo} alt="" />
            </span>
          </div>

          <div className={styles.heading}>
            <span className={styles.sectionLabel}>WELCOME BACK</span>

            <h1>
              Your next
              <span>opportunity</span>
              starts here.
            </h1>

            <p>
              Sign in to discover new jobs, track your applications, and stay
              connected with opportunities that move your career forward.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <FiCheckCircle />
              </span>

              <div>
                <strong>Track applications</strong>
                <span>Keep every application organized.</span>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <FiTrendingUp />
              </span>

              <div>
                <strong>Grow your career</strong>
                <span>Discover opportunities built for you.</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.loginCard}>
          <div className={styles.cardHeader}>
            <span className={styles.mobileLabel}>JOBTRACK ACCOUNT</span>

            <h2>Welcome back</h2>

            <p>Sign in to continue to your JobTrack account.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* Password */}

            <div className={styles.formGroup}>
              <div className={styles.passwordHeader}>
                <label htmlFor="password">Password</label>

                <a href="#forgot-password">Forgot password?</a>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                {...register("password")}
              />

              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </div>

            {/* Remember */}

            <label className={styles.remember}>
              <input type="checkbox" />

              <span>Remember me</span>
            </label>

            {/* Submit */}

            <button type="submit" className={styles.loginButton}>
              Sign in
              <FiArrowRight />
            </button>
          </form>

          {/* Divider */}

          <div className={styles.divider}>
            <span>New to JobTrack?</span>
          </div>

          {/* Signup */}

          <Link to="/registration" className={styles.signupButton}>
            Create an account
          </Link>

          {/* Security */}

          <div className={styles.security}>
            <FiShield />

            <span>
              Your account and personal information are securely protected.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};
