import { useContext } from "react";
import styles from "./SubNavbar.module.css";
import { JobContext } from "../context/JobContext";

export const SubNavbar = () => {
  const { dispatch } = useContext(JobContext);
  return (
    <div className={styles.searchBar}>
      <div className={styles.field}>
        <label htmlFor="keyword">Keyword</label>
        <input
          id="keyword"
          type="text"
          name="keyword"
          placeholder="Job title or keyword"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              payload: { name: "keyword", value: e.target.value },
            })
          }
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="location">Location</label>
        <select
          id="location"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              payload: { name: "location", value: e.target.value },
            })
          }
        >
          <option value="Anywhere">Anywhere</option>
          <option value="Bangalore, India">India</option>
          <option value="Hyderabad, India">Japan</option>
          <option value="Pune, India">Pune, India</option>
          <option value="Chennai, India">Chennai, India</option>
          <option value="Mumbai, India">Mumbai, India</option>
          <option value="Delhi, India">Delhi, India</option>
          <option value="Noida, India">Noida, India</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              payload: { name: "category", value: e.target.value },
            })
          }
        >
          <option value="All category">All categories</option>
          <option value="Engineering">Web Developer</option>
          <option value="Data & AI">Mobile Developer</option>
          <option value="Cloud & DevOps">Cloud & DevOps</option>
          <option value="Quality Assurance">Quality Assurance</option>
          <option value="Design">Design</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Product">Product</option>
          <option value="Business & Analytics">Business & Analytics</option>
        </select>
      </div>

      <button
        className={styles.searchButton}
        onClick={() => dispatch({ type: "SEARCH" })}
      >
        Search Jobs
      </button>
    </div>
  );
};
