import { JobContext } from "./JobContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <JobContext.Provider
      value={{
        loading,
        setLoading,
        errors,
        setErrors,
        open,
        setOpen,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
