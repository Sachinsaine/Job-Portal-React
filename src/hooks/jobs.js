import { useEffect, useState } from "react";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/jobs`,
        );

        if (!data.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const response = await data.json();
        setJobs(response.jobs);

        console.log("Jobs:", response);
      } catch (error) {
        console.log("Fetch jobs error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { jobs, setJobs, loading, error };
};
