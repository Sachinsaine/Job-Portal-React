import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { requireLogin } from "../../utils/authGuard";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRequireLogin = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    requireLogin();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="JobTrack" className={styles.logoIcon} />
        </Link>

        <nav className={styles.navLinks}>
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/jobs" onClick={handleRequireLogin}>
            Jobs
          </NavLink>

          <NavLink to="/companies" onClick={handleRequireLogin}>
            Companies
          </NavLink>

          <NavLink to="/applications" onClick={handleRequireLogin}>
            Applications
          </NavLink>

          <NavLink to="/about">About</NavLink>
        </nav>

        <div className={styles.navActions}>
          <Link to="/signin" className={styles.signIn}>
            Sign In
          </Link>

          <Link to="/signup" className={styles.postJob}>
            Get Started
            <FiArrowUpRight />
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileLinks}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/jobs" onClick={handleRequireLogin}>
              Jobs
            </NavLink>

            <NavLink to="/companies" onClick={handleRequireLogin}>
              Companies
            </NavLink>

            <NavLink to="/applications" onClick={handleRequireLogin}>
              Applications
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </nav>

          <div className={styles.mobileActions}>
            <Link
              to="/signin"
              className={styles.mobileSignIn}
              onClick={closeMenu}
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className={styles.mobilePostJob}
              onClick={closeMenu}
            >
              Get Started
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
