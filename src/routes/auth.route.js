import { authcontroller } from "../controllers/auth.controller.js";
import { verifyjwt } from "../middlewares/jwt.js";
import express from 'express';

const router=express.Router();

router.post('/google_login',authcontroller);
export default router;
