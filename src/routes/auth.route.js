import { registerUser ,loginUser,logout,forgotpassword} from "../controllers/auth.controller.js";
import { verifyjwt } from "../middlewares/jwt.js";

import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/logout',verifyjwt,logout);
router.post('/forgot',verifyjwt,forgotpassword);
export default router;
