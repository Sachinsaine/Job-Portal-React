import { FiBriefcase, FiArrowUpRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { requireLogin } from "../../utils/authGuard";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <FiBriefcase />
          </span>

          <span className={styles.logoText}>JobTrack</span>
        </Link>

        <nav className={styles.navLinks}>
          <a
            href="#jobs"
            onClick={(e) => {
              e.preventDefault();
              requireLogin();
            }}
          >
            Find Jobs
          </a>

          <a
            href="#companies"
            onClick={(e) => {
              e.preventDefault();
              requireLogin();
            }}
          >
            Companies
          </a>

          <a
            href="#categories"
            onClick={(e) => {
              e.preventDefault();
              requireLogin();
            }}
          >
            Categories
          </a>

          <a
            href="#resources"
            onClick={(e) => {
              e.preventDefault();
              requireLogin();
            }}
          >
            Career Resources
          </a>
        </nav>

        <div className={styles.navActions}>
          <Link to="/login" className={styles.signIn}>
            Sign in
          </Link>

          <button className={styles.postJob} onClick={requireLogin}>
            Post a Job
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
