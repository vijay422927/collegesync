/* app-->index.js */

import express from "express";
import userrouter from "./src/routes/auth.route.js";
import semrouter from "./src/routes/semister.router.js"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/v1/users", userrouter);
  

app.use("/api/v1/sem",semrouter);


export { app };
