import { useContext, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await logOut();
    toast.success("Logout successful!");
    navigate("/");
    closeMenu();
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="JobTrack" className={styles.logoIcon} />
        </Link>

        <nav className={styles.navLinks}>
          <NavLink to="/dashboard" end>
            Home
          </NavLink>

          <NavLink to="/jobspage">Jobs</NavLink>

          <NavLink to="/myapplicatoins">Applications</NavLink>

          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className={styles.navActions}>
          {/* <Link to="/signup" className={styles.postJob}>
            Get Started
            <FiArrowUpRight />
          </Link> */}

          {!loading &&
            (user ? (
              <button className={styles.postJob} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/signin" className={styles.postJob}>
                Sign In
              </Link>
            ))}
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

            <NavLink to="/jobs">Jobs</NavLink>

            <NavLink to="/companies">Companies</NavLink>

            <NavLink to="/applications">Applications</NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </nav>

          <div className={styles.mobileActions}>
            {!loading &&
              (user ? (
                <button className={styles.mobileSignIn} onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
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
                </>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};
