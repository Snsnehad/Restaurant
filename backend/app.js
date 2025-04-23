import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservtaionRouter from "./routes/reservation.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [
  "https://669bebf212f07f0a30b37b07--stirring-fox-cbfc00.netlify.app", // Your Netlify domain
  "http://localhost:5173", // Your local development domain
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true); // Allow requests from the allowed origins
      } else {
        callback(new Error("Not allowed by CORS")); // Reject requests from other origins
      }
    },
    credentials: true, // Allow credentials
  })
);
app.get("/", (req, res) => {
  res.send("Restaurant API is working! 🍽️🚀");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservtaionRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
