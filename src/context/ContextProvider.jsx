import { useJobs } from "../hooks/jobs";
import { JobContext } from "./JobContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { jobs, setJobs, error, loading } = useJobs();
  const [user, setUser] = useState(null);

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
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
