import { useEffect, useState } from "react";
import { api } from "../utils/api";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [items, setItems] = useState([]);
  useEffect(() => { api.get("/projects").then(setItems); }, []);
  return (
    <div className="projects">
      <h2>Projets</h2>
      <div className="projects__grid">
        {items.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}