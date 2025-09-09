import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { verifyjwt } from "../middlewares/jwt.js";
import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
export default router;
