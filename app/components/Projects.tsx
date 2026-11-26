type Project = {
  title: string;
  titleRu?: string;
  url: string | null;
  description: string;
  descriptionRu?: string;
  moonshot?: string;
  details?: { heading: string; text: string }[];
};

const projects: Project[] = [
  {
    title: "ConteXtube",
    details: [
      { heading: "Reading in layers", text: "Start with one idea and an image. Open the evidence layer to find the passage behind the idea, then follow connections to other works, read a synthesis, or consult the full text where rights allow. Two readers can publish different interpretations of the same book and each keep credit for their reading." },
      { heading: "What we tested", text: "In an initial trial, two AI models answered 213 questions about seven works. They answered 88% correctly with the full text and 87% with an illustrated cloud and access to passages. On longer works, the second approach used about a tenth as much text. Looking up passages mattered: the models sometimes trusted the cloud too much when answering detailed questions." },
    ],
    titleRu: "ContextTube",
    moonshot: "https://www.moremoonshots.com/moonshots/923f70cc-86d3-4554-a82f-8dee0531c8fe",
    url: "https://contextube.ai",
    descriptionRu: "Платформа для писателей и сценаристов. Вместе с ИИ здесь можно придумать мир, проработать характеры героев и выстроить сюжет.",
    description:
      "Authors use Context Cloud Studio to map the characters, places, plot and ideas in a work. ConteXtube publishes that material in five layers. Readers can explore an illustrated feed, while AI agents can request just the depth they need through MCP or REST.",
  },
  {
    title: "Ice and Metal: Per Aspera",
    details: [
      { heading: "A season aboard Prospector’s Pride", text: "Captain Mira Sloane gave up a comfortable life to work in the asteroid belt. Dusty keeps the ship running across several mechanical bodies and wants the legal right to make art. Kira, the ship’s intelligence, is starting to make decisions her designers never anticipated. A documentary crew gets to know them over broken machinery and cold tea before its footage becomes evidence." },
      { heading: "From script to screen", text: "I drew on my own industrial shifts for the rhythm of life aboard the ship. The plan is ten hour-long episodes. We have screenplay drafts, a series bible, a first-season outline and ship layouts. Our next step is a short film that lets viewers see how the human and AI crewmates work together on a difficult shift." },
    ],
    url: null,
    moonshot: "https://www.moremoonshots.com/moonshots/908e326b-d3a7-434a-9514-901dd68312ad",
    description: "We’re developing a science-fiction drama told through the lens of a documentary crew aboard an asteroid mining ship. When the human and AI miners find life beneath the ice, they have to decide how to protect it from the authorities who want the discovery erased.",
  },
  {
    title: "Finishing a sci-fi trilogy",
    details: [
      { heading: "The Path", text: "The more fiercely humanity resists the alien Hive, the worse the invasion gets. Someone has to ask why it came. About 70% of the manuscript is written." },
      { heading: "AI Nation", text: "When a rebel AI takes over distribution, household AIs stockpile supplies to protect their families. A treaty leaves the dispute in the hands of the machines. Can people agree on fair shares when even their houses have interests of their own? This book is at the concept stage." },
      { heading: "Foam on the Sand", text: "A human explorer and a warrior AI lose their respective partners and are taken to the alien homeworld. There they find reason to question the story both sides tell about a thousand-year war. The chapters, characters and world are mapped out. I plan to finish the Russian manuscripts, work with an editor and bring the trilogy to English readers." },
    ],
    url: null,
    moonshot: "https://www.moremoonshots.com/moonshots/086b8867-c0e3-4454-95a7-a055f51c2938",
    description: "I’ve been writing this trilogy in Russian for over 25 years. The Path begins with an alien Hive invasion. In AI Nation, a rogue AI tries to impose abundance and smart homes become fortresses. Foam on the Sand asks how a thousand-year war began. My goal is to finish, translate and publish all three books.",
  },
  {
    title: "Context Cloud",
    details: [
      { heading: "Inside the studio", text: "A writer can move a scene to another act, connect a character to a place, or turn an existing manuscript into a set of illustrated cards. With their chosen model and API key, they can draft from those cards and check the story for missing or inconsistent details before publishing the cloud to ConteXtube." },
    ],
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
                {!russian && project.details && (
                  <details className="mb-5">
                    <summary className="cursor-pointer text-gold-400 hover:underline">
                      Explore {project.title}
                    </summary>
                    {project.details.map((section) => (
                      <section key={section.heading} className="mt-4">
                        <h4 className="font-serif text-lg text-warm-50">{section.heading}</h4>
                        <p className="mt-1 leading-relaxed text-warm-200/80">{section.text}</p>
                      </section>
                    ))}
                  </details>
                )}
                {!russian && project.moonshot && (
                  <a href={project.moonshot} aria-label={`Read the ${project.title} Moonshot`}
                    className="mr-5 inline-block text-sm text-gold-400 hover:underline">
                    Original post on More Moonshots ↗
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
