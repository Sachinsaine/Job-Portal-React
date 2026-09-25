/* eslint-disable no-undef */
require("dotenv").config();

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
