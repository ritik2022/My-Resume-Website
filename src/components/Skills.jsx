import { skills, toolkit } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <p className="muted">Technical business analysis is the core. Product management is how I apply it.</p>

        <div className="grid">
          {skills.map((skill) => (
            <article className={`card ${skill.type}`} key={skill.title}>
              <h3>{skill.title}</h3>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="card tech">
          <h3>Technical toolkit</h3>
          <dl className="kit">
            {toolkit.map(([label, items]) => (
              <div key={label} className="kit-row">
                <dt>{label}</dt>
                <dd><ul className="tags">{items.map((item) => <li key={item}>{item}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
