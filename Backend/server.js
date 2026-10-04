/* eslint-disable no-undef */
require("dotenv").config();

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./Routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

//Develoyement
const FRONTEND_URL = "https://job-portal-react-brown.vercel.app";
app.use(
  cors({
    origin: ["http://localhost:5173", FRONTEND_URL],
    credentials: true,
  }),
);

//Local
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }),
// );

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error.message);
  }
};

startServer();
