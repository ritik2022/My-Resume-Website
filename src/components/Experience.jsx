import { useMemo, useState } from "react";
import { education, experience, experienceFilters } from "../data/portfolio";

export default function Experience() {
  const [filter, setFilter] = useState("All");

  const visibleExperience = useMemo(() => {
    return experience.map((job) => ({
      ...job,
      bullets: filter === "All"
        ? job.bullets
        : job.bullets.filter(([category]) => category === filter)
    }));
  }, [filter]);

  return (
    <section id="experience" className="surface-section">
      <div className="wrap">
        <h2>Experience</h2>
        <p className="muted">Filter my work by product management or business analysis theme.</p>

        <div className="filters2" role="group" aria-label="Filter experience by theme">
          {experienceFilters.map(({ group, filters }) => (
            <div className="grp" key={group}>
              {group !== "All" && <span className="gl">{group}</span>}
              {filters.map((item) => (
                <button
                  className="chip"
                  aria-pressed={filter === item}
                  data-f={item}
                  onClick={() => setFilter(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>

        {visibleExperience.map((job) => (
          <article className="job2" key={job.title}>
            <h3>{job.title}</h3>
            <p className="muted small">
              <b>{job.company}</b>, {job.location} · {job.period}<br />
              {job.description}
            </p>

            <p className="small muted pm-skill-label">PM skills shown in this role</p>
            <ul className="tags pm-skill-tags">
              {job.pmSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>

            <ul className="bul">
              {job.bullets.map(([category, group, label, text]) => (
                <li key={`${category}-${label}`} data-cat={category} data-grp={group}>
                  <span className="cat">{category}</span>
                  <b>{label}</b> {text}
                </li>
              ))}
              {job.bullets.length === 0 && <li>No experience items match this filter.</li>}
            </ul>
          </article>
        ))}

        <div className="edu">
          <div>
            <b>Education</b><br />
            {education.degree}<br />
            <span className="muted small">{education.school}</span>
          </div>
          <div><b>Certification</b><br />{education.certification}</div>
        </div>
      </div>
    </section>
  );
}
