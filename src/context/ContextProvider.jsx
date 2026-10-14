import { useJobs } from "../hooks/jobs";
import { JobContext } from "./JobContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { jobs, setJobs, error, loading } = useJobs();
  const [user, setUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

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
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
