import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservtaionRouter from "./routes/reservation.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors());
const corsOptions = {
  origin: "https://669bebf212f07f0a30b37b07--stirring-fox-cbfc00.netlify.app",
  credentials: true, // This allows the server to accept cookies and credentials
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservtaionRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
