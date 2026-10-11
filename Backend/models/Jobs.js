/* eslint-disable no-undef */
const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    experienceMin: {
      type: Number,
      required: true,
      min: 0,
    },
    experienceMax: {
      type: Number,
      required: true,
      min: 0,
    },
    salaryMin: {
      type: Number,
      required: true,
      min: 0,
    },
    salaryMax: {
      type: Number,
      required: true,
      min: 0,
    },
    place: {
      type: String,
      required: true,
      trim: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["full-time", "part-time", "contract", "internship"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Jobs", jobsSchema);
