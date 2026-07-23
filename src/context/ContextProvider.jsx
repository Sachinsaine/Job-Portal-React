import { JobContext } from "./JobContext";
import { jobs } from "../data/data.js";
import { useEffect, useState } from "react";
export const ContextProvider = ({ children }) => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await fetch(jobs);
        const jobData = await getData.json();
        setJob(jobData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [job]);
  return (
    <JobContext.Provider value={{ job, setJob }}>
      {children}
    </JobContext.Provider>
  );
};
