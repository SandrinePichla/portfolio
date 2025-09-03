export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.cover && <img src={project.cover} alt={project.title} />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-card__links">
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Code</a>}
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Démo</a>}
      </div>
      {project.tags?.length > 0 && (
        <ul className="project-card__tags">
          {project.tags.map(t => <li key={t}>{t}</li>)}
        </ul>
      )}
    </article>
  );
}