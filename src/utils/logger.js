import winston from "winston";
import dotenv from "dotenv";
dotenv.config();

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",

  format: winston.format.combine(
    winston.format.json(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.timestamp()
  ),
  transports: [
    new winston.format.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

export default logger;
