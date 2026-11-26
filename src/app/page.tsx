import { getCards } from "../lib/content";

export default function Home() {
  return (
    <main>
      <p className="eyebrow">Independent reference implementation</p>
      <h1>Quality Gates Lab</h1>
      <p>Build confidence before code reaches production.</p>
      <section aria-label="Engineering practices" className="cards">
        {getCards().map((card) => (
          <article key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
