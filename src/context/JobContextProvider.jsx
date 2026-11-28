import { useJobs } from "../hooks/jobs";
import { JobContext } from "./JobContext";
import { useState, useEffect } from "react";

export const JobContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { jobs, setJobs, error, loading } = useJobs();
  const [user, setUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const savedJobs = localStorage.getItem("appliedJobs");

    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const [inputTitle, setInputTitle] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputJobType, setInputJobType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);
  return (
    <JobContext.Provider
      value={{
        error,
        loading,
        open,
        setOpen,
        jobs,
        setJobs,
        user,
        setUser,
        appliedJobs,
        setAppliedJobs,
        inputTitle,
        setInputTitle,
        inputPlace,
        setInputPlace,
        inputJobType,
        setInputJobType,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
