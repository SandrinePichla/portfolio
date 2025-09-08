// routes/Projects.js
import { Router } from "express";
import Project from "../models/Project.js";

const router = Router();

/**
 * GET /api/projects
 * Liste paginée (simple)
 */
router.get("/", async (req, res) => {
  try {
    const { q, tag } = req.query;
    const query = {};
    if (q) {
      query.$or = [
        { title: new RegExp(q, "i") },
        { description: new RegExp(q, "i") },
        { tags: new RegExp(q, "i") },
      ];
    }
    if (tag) {
      query.tags = tag;
    }
    const projects = await Project.find(query).sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

/**
 * GET /api/projects/:slug
 * Détail par slug
 */
router.get("/:slug", async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ error: "Not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

/**
 * POST /api/projects
 * Création
 */
router.post("/", async (req, res) => {
  try {
    const created = await Project.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "Slug already exists" });
    }
    res.status(400).json({ error: "Bad request", details: err.message });
  }
});

/**
 * PATCH /api/projects/:id
 * Mise à jour partielle par _id
 */
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Bad request", details: err.message });
  }
});

/**
 * DELETE /api/projects/:id
 * Suppression
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ error: "Bad request", details: err.message });
  }
});

export default router;