type Project = {
  title: string;
  titleRu?: string;
  url: string | null;
  description: string;
  descriptionRu?: string;
  moonshot?: string;
};

const projects: Project[] = [
  {
    title: "ConteXtube",
    titleRu: "ContextTube",
    moonshot: "https://www.moremoonshots.com/moonshots/923f70cc-86d3-4554-a82f-8dee0531c8fe",
    url: "https://contextube.ai",
    descriptionRu: "Платформа для писателей и сценаристов. Вместе с ИИ здесь можно придумать мир, проработать характеры героев и выстроить сюжет.",
    description:
      "Authors use Context Cloud Studio to map the characters, places, plot and ideas in a work. ConteXtube publishes that material in five layers. Readers can explore an illustrated feed, while AI agents can request just the depth they need through MCP or REST.",
  },
  {
    title: "Ice and Metal: Per Aspera",
    url: null,
    moonshot: "https://www.moremoonshots.com/moonshots/908e326b-d3a7-434a-9514-901dd68312ad",
    description: "We’re developing a science-fiction drama told through the lens of a documentary crew aboard an asteroid mining ship. When the human and AI miners find life beneath the ice, they have to decide how to protect it from the authorities who want the discovery erased.",
  },
  {
    title: "Finishing a sci-fi trilogy",
    url: null,
    moonshot: "https://www.moremoonshots.com/moonshots/086b8867-c0e3-4454-95a7-a055f51c2938",
    description: "I’ve been writing this trilogy in Russian for over 25 years. The Path begins with an alien Hive invasion. In AI Nation, a rogue AI tries to impose abundance and smart homes become fortresses. Foam on the Sand asks how a thousand-year war began. My goal is to finish, translate and publish all three books.",
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
          {projects.filter((project) => !russian || project.descriptionRu).map((project) => (
            <div
              key={russian ? project.titleRu ?? project.title : project.title}
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
                {!russian && project.moonshot && (
                  <a href={project.moonshot} aria-label={`Read the ${project.title} Moonshot`}
                    className="mr-5 inline-block text-sm text-gold-400 hover:underline">
                    Read the Moonshot
                  </a>
                )}
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
