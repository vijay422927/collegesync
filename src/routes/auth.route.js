import {
  registerUser,
  loginUser,
  logout,
  changePassword,
} from "../controllers/auth.controller.js";
import { verifyjwt } from "../middlewares/jwt.js";

import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", verifyjwt, logout);
router.patch("/change-password", verifyjwt, changePassword);
export default router;
