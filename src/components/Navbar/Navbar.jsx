import { useState } from "react";
import { FiBriefcase, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <FiBriefcase />
          </span>

          <span className={styles.logoText}>JobTrack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <a href="#jobs">Find Jobs</a>
          <a href="#companies">Companies</a>
          <a href="#categories">Categories</a>
          <a href="#resources">Career Resources</a>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.navActions}>
          <Link to="/login" className={styles.signIn}>
            Sign in
          </Link>

          <button className={styles.postJob}>
            Post a Job
            <FiArrowUpRight />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileLinks}>
            <a href="#jobs" onClick={closeMenu}>
              Find Jobs
            </a>

            <a href="#companies" onClick={closeMenu}>
              Companies
            </a>

            <a href="#categories" onClick={closeMenu}>
              Categories
            </a>

            <a href="#resources" onClick={closeMenu}>
              Career Resources
            </a>
          </nav>

          <div className={styles.mobileActions}>
            <button className={styles.mobileSignIn}>Sign in</button>

            <button className={styles.mobilePostJob}>
              Post a Job
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
