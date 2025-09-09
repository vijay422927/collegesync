import mongoose from "mongoose";
/*

...........database connection ...........
db/index.js--->index.js
DB_NAME,DB_NAME from env


*/
import dotenv from "dotenv";
dotenv.config();
const connectdb = async () => {
  try {
    const connectionInstance = mongoose.connect(
      `${process.env.DB_URL}${process.env.DB_NAME}`
    );
    console.log(
      "monggose connected",
      (await connectionInstance).connection.name
    );
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};
export { connectdb };
