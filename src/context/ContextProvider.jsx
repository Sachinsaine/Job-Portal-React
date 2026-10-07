import { useJobs } from "../hooks/jobs";
import { JobContext } from "./JobContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { jobs, setJobs, error, loading } = useJobs();

  return (
    <JobContext.Provider
      value={{
        error,
        loading,
        open,
        setOpen,
        jobs,
        setJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
