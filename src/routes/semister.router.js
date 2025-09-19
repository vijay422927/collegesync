import express from 'express';
import { search_semister ,sem_s} from '../controllers/semister.controller.js';
import { verifyjwt } from '../middlewares/jwt.js';
 
const router=express.Router();
router.get('/sem',verifyjwt,search_semister);
router.get('/sems',verifyjwt,sem_s);

export  default router;