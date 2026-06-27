import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(
  cors({
    origin: "https://laya-ksxri9pr2-aiswaryanm224-clouds-projects.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Laya backend is running 🚀");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});