import { FiArrowUpRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { requireLogin } from "../../utils/authGuard";
import logo from "../../assets/logo.svg";

function Navbar() {
  const handleRequireLogin = (e) => {
    e.preventDefault();
    requireLogin();
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="" className={styles.logoIcon} />
        </Link>

        <nav className={styles.navLinks}>
          <a href="#jobs" onClick={handleRequireLogin}>
            Find Jobs
          </a>

          <a href="#companies" onClick={handleRequireLogin}>
            Companies
          </a>

          <a href="#categories" onClick={handleRequireLogin}>
            Categories
          </a>

          <a href="#resources" onClick={handleRequireLogin}>
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
