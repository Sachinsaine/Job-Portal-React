import { JobContext } from "./JobContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  return (
    <JobContext.Provider
      value={{
        loading,
        setLoading,
        errors,
        setErrors,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
