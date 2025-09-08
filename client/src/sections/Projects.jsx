import { useEffect, useState } from "react";
import { api } from "../utils/api";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [items, setItems] = useState([]);      // toujours un tableau
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api.get("/projects")
      .then(({ data }) => {
        if (!mounted) return;
        // Normalise la réponse en tableau quoi qu’il arrive
        let list = [];
        if (Array.isArray(data)) list = data;
        else if (Array.isArray(data?.projects)) list = data.projects;
        else if (Array.isArray(data?.items)) list = data.items;
        else if (data && typeof data === "object") list = Object.values(data); // dernier recours
        setItems(list);
      })
      .catch((e) => {
        if (!mounted) return;
        console.error("[Projects] fetch error:", e?.message);
        setErr(e);
        setItems([]); // évite toute valeur non-tableau
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  // Toujours dériver une "list" sûre pour le rendu
  const list = Array.isArray(items) ? items : [];

  return (
    <div className="projects container">
      <h2 className="projects__title">Projets</h2>

      {loading && (
        <div className="projects__grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="project-card project-card--skeleton" key={i}>
              <div className="project-card__media skeleton" />
              <div className="project-card__body">
                <div className="skeleton skeleton--text" />
                <div className="skeleton skeleton--text small" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && err && (
        <div className="projects__error">
          <p>Oups, impossible de charger les projets.</p>
          <button onClick={() => window.location.reload()}>Réessayer</button>
        </div>
      )}

      {!loading && !err && list.length === 0 && (
        <p className="projects__empty">Aucun projet pour le moment.</p>
      )}

      {!loading && !err && list.length > 0 && (
        <div className="projects__grid">
          {list.map((p) => (
            <ProjectCard key={p.slug || p.title} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}