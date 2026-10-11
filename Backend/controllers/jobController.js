/* eslint-disable no-undef */
const Jobs = require("../models/Jobs");

const addJobs = async (req, res) => {
  try {
    const {
      company,
      jobTitle,
      experienceMin,
      experienceMax,
      salaryMin,
      salaryMax,
      place,
      jobType,
    } = req.body;

    const existingJob = await Jobs.findOne({
      company,
      jobTitle,
    });

    if (existingJob) {
      return res.status(400).json({
        message: "Job already exists",
      });
    }

    const newJob = await Jobs.create({
      company,
      jobTitle,
      experienceMin,
      experienceMax,
      salaryMin,
      salaryMax,
      place,
      jobType,
    });

    return res.status(201).json({
      message: "Job added successfully",
      job: newJob,
    });
  } catch (error) {
    console.error("ADD JOB ERROR:", error);

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

const deleteJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteJob = await Jobs.findByIdAndDelete(id);

    if (!deleteJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    return res.status(200).json({
      message: "Job deleted successfully",
      job: deleteJob,
    });
  } catch (error) {
    console.error("DELETE JOB ERROR:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { addJobs, getJobs, deleteJobs };
