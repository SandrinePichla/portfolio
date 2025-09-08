import 'dotenv/config';
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import projectsRouter from "./routes/Projects.js"; // respecte la MAJUSCULE

const app = express();

// Config
const PORT = process.env.PORT || 5174;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

// Middlewares
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

// Santé
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Routes
app.use("/api/projects", projectsRouter);

// Connexion MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // options par défaut OK avec Mongoose 8
    });
    console.log("✅ MongoDB connecté");

    app.listen(PORT, () => {
      console.log(`✅ API up on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Erreur MongoDB :", err.message);
    process.exit(1);
  }
})();