/* eslint-disable no-undef */
const Jobs = require("../models/Jobs");

const addJobs = async (req, res) => {
  try {
    const { company, jobTitle, experience, salary, place, jobType } = req.body;

    const existingJob = await Jobs.findOne({
      jobTitle,
      company,
    });

    if (existingJob) {
      return res.status(400).json({
        message: "Job already exists",
      });
    }

    const newJob = await Jobs.create({
      company,
      jobTitle,
      experience,
      salary,
      place,
      jobType,
    });

    return res.status(201).json({
      message: "Job added successfully",
      job: newJob,
    });
  } catch (error) {
    console.log("ADD JOB ERROR:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();

    return res.status(200).json({
      message: "Jobs fetched successfully",
      jobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports = { addJobs, getJobs };
