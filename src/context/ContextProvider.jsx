import { JobContext } from "./JobContext";
import { jobs } from "../data/data.js";
import { useReducer, useState } from "react";

const initialState = {
  keyword: "",
  location: "Anywhere",
  category: "All category",
  filteredJobs: jobs,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "SEARCH": {
      const filteredJobs = jobs.filter((job) => {
        let keywordMatch = true;
        let locationMatch = true;
        let categoryMatch = true;

        if (state.keyword !== "") {
          keywordMatch =
            job.title.toLowerCase().includes(state.keyword.toLowerCase()) ||
            job.company.toLowerCase().includes(state.keyword.toLowerCase());
        }

        if (state.location !== "Anywhere") {
          locationMatch = job.location === state.location;
        }

        if (state.category !== "All category") {
          categoryMatch = job.category === state.category;
        }

        return keywordMatch && locationMatch && categoryMatch;
      });

      return {
        ...state,
        filteredJobs,
      };
    }

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [typeOfJob, setTypeOfJob] = useState("");

  return (
    <JobContext.Provider
      value={{
        state,
        dispatch,
        typeOfJob,
        setTypeOfJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
