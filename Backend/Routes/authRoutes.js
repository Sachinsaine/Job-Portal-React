/* eslint-disable no-undef */

const express = require("express");
const { userSignup, userSignin } = require("../controllers/authController");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/signup", userSignup);
router.post("/signin", userSignin);

router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "You are authenticated",
    user: req.user,
  });
});

module.exports = router;
