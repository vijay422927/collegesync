import { app } from "./app.js";
import { connectdb } from "./src/database/dbconnect.js";
import dotenv from "dotenv";
dotenv.config();
await connectdb()
  .then(() => {
    app.listen(process.env.PORT || 3800, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
