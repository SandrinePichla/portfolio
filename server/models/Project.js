import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug:  { type: String, required: true, unique: true },
  description: String,
  tags: [String],
  repoUrl: String,
  demoUrl: String,
  cover: String,
  featured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Project", ProjectSchema);