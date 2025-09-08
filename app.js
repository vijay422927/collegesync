/* app-->index.js */


import express from 'express';
import googlerouter from './src/routes/auth.route.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

app.use('/api/v1/users',googlerouter);

export {app};