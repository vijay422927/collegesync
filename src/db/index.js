import mongoose from "mongoose";
import logger from "../utils/logger";
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
      `${process.env.DB_URL}/${process.env.DB_NAME}`
    );
    logger.info(
      "monggose connected",
      (await connectionInstance).connection.name
    );
  } catch (error) {
    logger.warn("Error while connecting to the database", error);
    process.exit(1);
  }
};
export { connectdb };
