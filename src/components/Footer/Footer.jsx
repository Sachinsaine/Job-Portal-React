import {
  FiBriefcase,
  FiArrowUpRight,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          {/* Brand */}
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

            <button className={styles.exploreButton}>
              Explore Jobs
              <FiArrowUpRight />
            </button>
          </div>

          {/* Links */}
          <div className={styles.linkGroup}>
            <h3>For Job Seekers</h3>

            <a href="#jobs">Find Jobs</a>
            <a href="#companies">Companies</a>
            <a href="#categories">Job Categories</a>
            <a href="#resources">Career Resources</a>
            <a href="#profile">My Profile</a>
          </div>

          <div className={styles.linkGroup}>
            <h3>For Employers</h3>

            <a href="#post-job">Post a Job</a>
            <a href="#employers">Employer Dashboard</a>
            <a href="#talent">Find Talent</a>
            <a href="#pricing">Pricing</a>
            <a href="#solutions">Hiring Solutions</a>
          </div>

          <div className={styles.linkGroup}>
            <h3>Company</h3>

            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#help">Help Center</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} JobTrack. All rights reserved.</p>

          <div className={styles.socialLinks}>
            <a href="#linkedin" aria-label="LinkedIn">
              <FiLinkedin />
            </a>

            <a href="#twitter" aria-label="Twitter">
              <FiTwitter />
            </a>

            <a href="#instagram" aria-label="Instagram">
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
