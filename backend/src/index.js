import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRouter } from "./routes/index.js";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => res.send("hat geklappt!"));

app.use("/api/user", userRouter.default);

const serverListenToPort = () =>
    app.listen(PORT, () => console.log("Server listening on port: ", PORT));

// setup server and database connection
console.log("Connecting to database...");
mongoose
    .connect(MONGODB_URL, { dbName: "portfolioApp" })
    .then(() => {
        console.log("Database connection successful");
        serverListenToPort();
    })
    .catch((err) => {
        console.log("### Error connecting to database! ###");
        console.log(err);
        console.log("Server will not start. Aborting...");
        process.exit();
    });