import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

/* -------------------- MIDDLEWARE -------------------- */

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

/* -------------------- ROUTES -------------------- */

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send("EventCompanionApp API running");
});

/* -------------------- SERVER -------------------- */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
