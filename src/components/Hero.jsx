import { useEffect, useRef } from "react";
import { boardCards } from "../data/portfolio";

export default function Hero({ onContact }) {
  const boardRef = useRef(null);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const cards = boardCards.map(([title, type, column]) => {
      const element = document.createElement("div");
      element.className = `kc ${type}`;
      element.textContent = title;
      board.appendChild(element);
      return { element, column };
    });

    const render = () => {
      const gap = 6;
      const width = board.clientWidth;
      const columnWidth = (width - 3 * gap) / 4;
      const rows = [0, 0, 0, 0];

      cards.forEach((card) => {
        const row = rows[card.column]++;
        card.element.style.width = `${columnWidth - 8}px`;
        card.element.style.left = `${card.column * (columnWidth + gap) + 4}px`;
        card.element.style.top = `${34 + row * 56}px`;
      });
    };

    render();
    window.addEventListener("resize", render);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let interval;
    if (!reduceMotion) {
      let index = 0;
      interval = window.setInterval(() => {
        const card = cards[index % cards.length];
        card.column = (card.column + 1) % 4;
        index += 1;
        render();
      }, 1400);
    }

    return () => {
      window.removeEventListener("resize", render);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="wrap hero">
        <div>
          <p className="role">Technical Business Analyst moving into Product Management</p>
          <h1>Ritik Kumar</h1>
          <p className="lead">
            I find the problem worth solving, prioritise it, and help ship it. Six years of turning messy stakeholder needs into delivered outcomes, now ready to own the product.
          </p>
          <div className="row">
            <button className="btn p" onClick={onContact}>Get in touch</button>
            <a className="btn" href="#experience">View experience</a>
          </div>
        </div>

        <figure className="viz" role="img" aria-label="Animated board showing work moving from discover to define, build and ship">
          <div className="board" ref={boardRef} aria-hidden="true">
            <div className="cols">
              {["Discover", "Define", "Build", "Shipped"].map((label) => (
                <div className="col" key={label}><h4>{label}</h4></div>
              ))}
            </div>
          </div>
          <div className="legend">
            <span><i className="legend-ba" />Business analysis</span>
            <span><i className="legend-tech" />Technical</span>
            <span><i className="legend-pm" />Product</span>
          </div>
          <figcaption>From discovery to release: the work I do at every stage.</figcaption>
        </figure>
      </div>
    </section>
  );
}
