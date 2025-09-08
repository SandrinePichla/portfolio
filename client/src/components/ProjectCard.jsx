export default function ProjectCard({ project }) {
  if (!project) return null;

  const codeUrl = project.repoUrl || project.githubUrl || "";
  const demoUrl = project.demoUrl || "";

  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      {project.description && (
        <p className="project-card__desc">{project.description}</p>
      )}

      {Array.isArray(project.tags) && project.tags.length > 0 && (
        <ul className="project-card__tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <div className="project-card__links">
        {codeUrl && (
          <a className="project-card__link" href={codeUrl} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {demoUrl && (
          <a className="project-card__link" href={demoUrl} target="_blank" rel="noreferrer">
            Démo
          </a>
        )}
      </div>
    </article>
  );
}
