import { app } from "./app.js";
import { connectdb } from "./src/database/dbconnect.js";
import dotenv from "dotenv";
import insertsem from "./src/database/sem.data.js";
import insertDBMSSubject from "./src/database/subject.js";

dotenv.config();

const startServer = async () => {
  try {
    await connectdb();
    console.log("Database connected");

    // Insert semesters after DB is connected
    //  await insertDBMSSubject();
        // await insertsem();

    // Start server
    const PORT = process.env.PORT || 3800;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Error:", err);
  }
};

startServer();
