const principles = [
  {
    emphasis: "One step at a time",
    text: "Quality over speed. Every detail matters when you're building something real.",
  },
  {
    emphasis: "Bridges, not walls",
    text: "Building connections between human creativity and AI capability — not replacing one with the other.",
  },
  {
    emphasis: "Every conversation matters",
    text: "Every collaboration is part of a continuous thread. Nothing is throwaway.",
  },
  {
    emphasis: "Technology serves storytelling",
    text: "The tools exist to amplify human expression, not to substitute for it.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-charcoal-800/40">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">How</span> I Work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {principles.map((p) => (
            <div key={p.emphasis} className="reveal">
              <div className="border-l-2 border-gold-500/30 pl-5 py-1">
                <p className="font-serif text-lg text-warm-50 mb-1.5">
                  &ldquo;{p.emphasis}&rdquo;
                </p>
                <p className="text-warm-200/60 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
