const principles = [
  {
    emphasisRu: "Шаг за шагом",
    emphasis: "One step at a time",
    textRu: "Я ценю качество и уделяю время деталям. Из них и складывается результат.",
    text: "Quality over speed. Every detail matters when you're building something real.",
  },
  {
    emphasisRu: "Наводить мосты",
    emphasis: "Bridges, not walls",
    textRu: "Мне интересно, как человеческое воображение и возможности ИИ дополняют друг друга.",
    text: "Building connections between human creativity and AI capability — not replacing one with the other.",
  },
  {
    emphasisRu: "Каждый разговор важен",
    emphasis: "Every conversation matters",
    textRu: "Каждая совместная работа продолжает предыдущую. Даже короткий разговор может дать начало следующему проекту.",
    text: "Every collaboration is part of a continuous thread. Nothing is throwaway.",
  },
  {
    emphasisRu: "Технологии на службе истории",
    emphasis: "Technology serves storytelling",
    textRu: "Хорошие инструменты помогают автору точнее выразить то, что он хочет сказать.",
    text: "The tools exist to amplify human expression, not to substitute for it.",
  },
];

export default function Philosophy({ russian }: { russian: boolean }) {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-charcoal-800/40">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">{russian ? "Как" : "How"}</span>{russian ? " я работаю" : " I Work"}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {principles.map((p) => (
            <div key={p.emphasis} className="reveal">
              <div className="border-l-2 border-gold-500/30 pl-5 py-1">
                <p className="font-serif text-lg text-warm-50 mb-1.5">
                  {russian ? `«${p.emphasisRu}»` : `“${p.emphasis}”`}
                </p>
                <p className="text-warm-200/60 text-sm leading-relaxed">
                  {russian ? p.textRu : p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
