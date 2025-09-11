import {
  registerUser,
  loginUser,
  logout,
  changePassword,
  resetPassword,
  forgotpassword,
} from "../controllers/auth.controller.js";
import { verifyjwt } from "../middlewares/jwt.js";

import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", verifyjwt, logout);
router.patch("/forgot-password", forgotpassword);
router.patch("/change-password", verifyjwt, changePassword);
router.patch("/reset-password/:token", resetPassword);
export default router;
