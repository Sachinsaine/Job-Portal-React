import {
  FiBriefcase,
  FiArrowUpRight,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import styles from "./Footer.module.css";
import { requireLogin } from "../../utils/authGuard";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.brandSection}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoIcon}>
                <FiBriefcase />
              </span>

              <span>JobTrack</span>
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
            <a
              href="#profile"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              My Profile
            </a>
          </div>

          <div className={styles.linkGroup}>
            <h3>For Employers</h3>

            <a
              href="#post-job"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Post a Job
            </a>
            <a
              href="#employers"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Employer Dashboard
            </a>
            <a
              href="#talent"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Find Talent
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Pricing
            </a>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Hiring Solutions
            </a>
          </div>

          <div className={styles.linkGroup}>
            <h3>Company</h3>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Contact
            </a>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              Terms & Conditions
            </a>
            <a
              href="#help"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
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
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              <FiLinkedin />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
            >
              <FiTwitter />
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
              onClick={(e) => {
                e.preventDefault();
                requireLogin();
              }}
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
