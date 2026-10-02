import {
  FiArrowUpRight,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import styles from "./Footer.module.css";
import { requireLogin } from "../../utils/authGuard";
import logo from "../../assets/logo.svg";

function Footer() {
  const handleRequireRegistration = (e) => {
    e.preventDefault();
    requireLogin();
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.brandSection}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="Logo" className={styles.logoIcon} />
            </a>

            <p className={styles.description}>
              Find meaningful work, discover great companies, and take the next
              step in your career with JobTrack.
            </p>

            <button className={styles.exploreButton} onClick={requireLogin}>
              Explore Jobs
              <FiArrowUpRight />
            </button>
          </div>

          <div className={styles.linkGroup}>
            <h3>For Job Seekers</h3>

            <a
              href="#jobs"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Find Jobs
            </a>
            <a href="#companies" onClick={handleRequireRegistration}>
              Companies
            </a>
            <a href="#categories" onClick={handleRequireRegistration}>
              Job Categories
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
            <a href="#profile" onClick={handleRequireRegistration}>
              My Profile
            </a>
          </div>

          <div className={styles.linkGroup}>
            <h3>For Employers</h3>

            <a href="#post-job" onClick={handleRequireRegistration}>
              Post a Job
            </a>
            <a href="#employers" onClick={handleRequireRegistration}>
              Employer Dashboard
            </a>
            <a href="#talent" onClick={handleRequireRegistration}>
              Find Talent
            </a>
            <a href="#pricing" onClick={handleRequireRegistration}>
              Pricing
            </a>
            <a href="#solutions" onClick={handleRequireRegistration}>
              Hiring Solutions
            </a>
          </div>

          <div className={styles.linkGroup}>
            <h3>Company</h3>

            <a href="#about" onClick={handleRequireRegistration}>
              About Us
            </a>
            <a href="#contact" onClick={handleRequireRegistration}>
              Contact
            </a>
            <a href="#privacy" onClick={handleRequireRegistration}>
              Privacy Policy
            </a>
            <a href="#terms" onClick={handleRequireRegistration}>
              Terms & Conditions
            </a>
            <a href="#help" onClick={handleRequireRegistration}>
              Help Center
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} JobTrack. All rights reserved.</p>

          <div className={styles.socialLinks}>
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              onClick={handleRequireRegistration}
            >
              <FiLinkedin />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
              onClick={handleRequireRegistration}
            >
              <FiTwitter />
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
              onClick={handleRequireRegistration}
            >
              <FiInstagram />
            </a>
          </div>

          <p className={styles.madeWith}>Built for your next career move.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
