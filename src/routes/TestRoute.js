const express = require("express");
const authController = require("../controllers/AuthController");
const JwtProcessor = require("../helpers/JwtProcessor");
const router = express.Router();


router.post("/api/auth/login", authController.login)
router.post("/api/jwt/verify" ,JwtProcessor.verifyToken)



module.exports = router