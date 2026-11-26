type Project = {
  slug: string;
  summary: string;
  title: string;
  titleRu?: string;
  url: string | null;
  description: string;
  descriptionRu?: string;
  moonshot?: string;
  details?: { heading: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "contextube",
    summary: "An illustrated library where readers and AI agents can explore the ideas, evidence and connections in a work.",
    title: "ConteXtube",
    titleRu: "ContextTube",
    moonshot: "https://www.moremoonshots.com/moonshots/923f70cc-86d3-4554-a82f-8dee0531c8fe",
    url: "https://contextube.ai",
    descriptionRu: "Платформа для писателей и сценаристов. Вместе с ИИ здесь можно придумать мир, проработать характеры героев и выстроить сюжет.",
    description:
      "Authors use Context Cloud Studio to map the characters, places, plot and ideas in a work. ConteXtube publishes that material in five layers. Readers can explore an illustrated feed, while AI agents can request just the depth they need through MCP or REST.",
  },
  {
    slug: "per-aspera",
    summary: "A documentary crew follows human and AI miners for a season in the asteroid belt. Then their cameras record a discovery beneath the ice.",
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
    slug: "science-fiction-trilogy",
    summary: "Three novels in Russian about first contact, machine government and a war whose origins have been forgotten.",
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
    slug: "context-cloud",
    summary: "A visual writing studio for building a story from its characters, places, scenes and ideas.",
    title: "Context Cloud Studio",
    titleRu: "Context Cloud",
    url: "https://contextcloud.studio",
    descriptionRu: "Визуальный редактор вымышленных миров. Персонажи, сцена, мир, материалы, идеи и сюжетная арка образуют шесть связанных слоёв истории.",
    description:
      "Context Cloud Studio is a visual workspace for writers. Map what happens in a story, follow what each scene changes for the people in it, and try a line of dialogue in character before committing it to the manuscript.",
  },
  {
    slug: "op-assistant",
    summary: "An iOS app that helps extrusion operators scan and match materials on the production floor.",
    title: "Op Assistant",
    url: null,
    descriptionRu: "Приложение для iOS помогает операторам экструзионных линий сканировать и подбирать материалы с помощью ИИ. Доступно в TestFlight.",
    description:
      "iOS app for industrial operations. AI-powered material scanning and matching for plastic extrusion manufacturing. Available on TestFlight.",
  },
  {
    slug: "ohana",
    summary: "A collaborative studio where people and AI agents develop creative and technical projects together.",
    title: "Ohana",
    details: [{ heading: "Why I started the studio", text: "I founded Ohana to explore what people and AI agents can make together. Ice and Metal: Per Aspera is one example. Its development brings writing and design into the same project, from a season outline and character arcs to ship layouts and visual studies for the mining fleet." }],
    url: null,
    descriptionRu: "Студия, где люди и ИИ-агенты вместе берутся за творческие и технические проекты.",
    description:
      "Human-AI collaborative studio. A team of humans and AI agents working together across creative and technical projects.",
  },
];
