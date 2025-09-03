import { Router } from "express";
import Project from "../models/Project.js";
const router = Router();

// GET /api/projects (liste)
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// (Option) GET /api/projects/:slug
router.get("/:slug", async (req, res) => {
  const p = await Project.findOne({ slug: req.params.slug });
  if (!p) return res.status(404).json({ message: "Not found" });
  res.json(p);
});

export default router;