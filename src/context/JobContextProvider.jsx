import { useJobs } from "../hooks/jobs";
import { JobContext } from "./JobContext";
import { useState } from "react";

export const JobContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { jobs, setJobs, error, loading } = useJobs();
  const [user, setUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputJobType, setInputJobType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

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
