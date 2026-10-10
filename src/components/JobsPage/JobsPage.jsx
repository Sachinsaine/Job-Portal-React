import styles from "./jobspage.module.css";
import "../../../src/index.css";
export const JobsPage = () => {
  return (
    <div className={styles.jobsPage}>
      <h1>Find your next job</h1>
      <div>
        <input type="text" placeholder="Search title or company" />
        <input type="text" placeholder="Location" />
        <select name="" id="">
          <option value=" All types"> All types</option>
          <option value="">Full-time</option>
          <option value="">Part-time</option>
          <option value="">Contract</option>
          <option value="">Internship</option>
          <option value="">Remote</option>
        </select>
      </div>
      <div>
        <h5>Frontend developer</h5>
        <p>Zomato</p>
        <p>Hyderabad</p>
        <p> ₹18–24 LPA</p>
        <button>Apply now</button>
        <button>save</button>
      </div>
    </div>
  );
};
