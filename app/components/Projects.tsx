const projects = [
  {
    title: "ContextTube",
    url: "https://contextube.ai",
    descriptionRu: "Платформа для писателей и сценаристов. Вместе с ИИ здесь можно придумать мир, проработать характеры героев и выстроить сюжет.",
    description:
      "AI-powered creative development platform for storytellers. Build story worlds, develop characters, and structure narratives with AI as creative partner.",
  },
  {
    title: "Context Cloud",
    url: "https://contextcloud.studio",
    descriptionRu: "Визуальный редактор вымышленных миров. Персонажи, сцена, мир, материалы, идеи и сюжетная арка образуют шесть связанных слоёв истории.",
    description:
      "Visual story world editor. Six interconnected layers — Characters, Stage, World, References, Ideas, and Arc — for building rich narrative universes.",
  },
  {
    title: "Op Assistant",
    url: null,
    descriptionRu: "Приложение для iOS помогает операторам экструзионных линий сканировать и подбирать материалы с помощью ИИ. Доступно в TestFlight.",
    description:
      "iOS app for industrial operations. AI-powered material scanning and matching for plastic extrusion manufacturing. Available on TestFlight.",
  },
  {
    title: "Ohana",
    url: null,
    descriptionRu: "Студия, где люди и ИИ-агенты вместе берутся за творческие и технические проекты.",
    description:
      "Human-AI collaborative studio. A team of humans and AI agents working together across creative and technical projects.",
  },
];

export default function Projects({ russian }: { russian: boolean }) {
  return (
    <section id="projects" className="py-24 md:py-32 bg-charcoal-800/40">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">{russian ? "Мои" : "Things"}</span>{russian ? " проекты" : " I'm Building"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="reveal group relative rounded-xl border border-charcoal-600/50 bg-charcoal-800/60 p-6 md:p-8 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <h3 className="font-serif text-xl md:text-2xl text-warm-50 mb-3">
                  {project.title}
                </h3>
                <p className="text-warm-200/70 leading-relaxed mb-4">
                  {russian ? project.descriptionRu : project.description}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-500 transition-colors"
                  >
                    {russian ? "Открыть проект" : "Visit"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
