import { JobContext } from "./JobContext";
import { jobs } from "../data/data.js";
import { useReducer, useState } from "react";

let initialState = {
  keyword: "",
  location: "",
  category: "",
  filteredJobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    // case "SEARCH": {
    //   const { keyword, location, category } = state;

    //   let filterjobs = jobs.filter((j) => {
    //     keyword === "" ||
    //       j.title.toLowerCase().includes(keyword.toLowerCase()) ||
    //       j.company.toLocaleLowerCase().includes(keyword.toLowerCase());

    //     category === "" ||
    //     j.category
    //   });
    // }

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [job, setJob] = useState(jobs);
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <JobContext.Provider
      value={{ job, setJob, input, setInput, state, dispatch }}
    >
      {children}
    </JobContext.Provider>
  );
};
