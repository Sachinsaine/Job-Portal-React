/* eslint-disable no-undef */
const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
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
    experience: {
      min: {
        type: Number,
        required: true,
        min: 0,
      },
      max: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    salary: {
      min: {
        type: Number,
        required: true,
        min: 0,
      },
      max: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    place: {
      type: String,
      required: true,
      trim: true,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
