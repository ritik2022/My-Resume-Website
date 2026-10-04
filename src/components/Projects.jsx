import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="muted">Case studies in moving from analysing problems to owning solutions.</p>

        {projects.map((project, index) => (
          <article className="proj" key={project.title}>
            <div className="pbody">
              <h3>{project.title}</h3>
              <h4>Context and problem</h4>
              <p>{project.context}</p>
              <h4>The BA to PM value transition</h4>
              <p>{project.transition}</p>

              <details open={index === 0}>
                <summary>Key actions and execution</summary>
                <ul className="act">
                  {project.actions.map(([label, text]) => (
                    <li key={label}><b>{label}:</b> {text}</li>
                  ))}
                </ul>
              </details>

              <div className="impact"><b>Impact</b>{project.impact}</div>
              <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
