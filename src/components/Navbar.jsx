import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        JobFinder
      </Link>

      <div className={styles.navLinks}>
        <Link to="/">Browse</Link>

        <Link to="/">Saved</Link>

        <Link to="/">My Applications</Link>

        <Link to="/" className={styles.postJobButton}>
          Post Job
        </Link>
      </div>
    </nav>
  );
};
