const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("/auth", authController.login);
router.get("/auth/callback/google", authController.callback);

module.exports = router;
