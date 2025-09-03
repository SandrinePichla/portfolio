import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import projectsRouter from "./routes/projects.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectsRouter);

const PORT = process.env.PORT || 5174;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`API OK http://localhost:${PORT}`));
  })
  .catch(err => console.error("MongoDB error:", err));