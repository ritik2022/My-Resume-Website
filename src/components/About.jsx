import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="surface-section">
      <div className="wrap about">
        <div>
          <h2>About me</h2>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="facts">
          {profile.facts.map(([label, value]) => (
            <li key={label}><b>{label}</b>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
