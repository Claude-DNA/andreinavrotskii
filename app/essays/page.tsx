import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { englishUrl, isRussianSite } from "../site-language";

export const metadata: Metadata = {
  title: "Essays — Andrei Navrotskii",
  description: "Andrei Navrotskii’s essays on human purpose, AI cooperation and collective intelligence.",
  alternates: { canonical: englishUrl + "/essays" },
};

const essays = [
  {
    "title": "Segue and Pass: How AI Brings Back the Wandering Mind",
    "summary": "When a question leads outside your field, an AI can help you follow it far enough to discover whether it is worth someone else’s attention. The essay traces how that changes the division of work between a curious generalist and a specialist. Recognizing the moment to hand over an idea becomes a skill in its own right.",
    "url": "https://forum.effectivealtruism.org/posts/PmAocFxo83h3YLNhp/segue-and-pass-how-ai-brings-back-the-wandering-mind"
  },
  {
    "title": "The Swarm: How Teamwork Makes the Dream Work",
    "summary": "What can a group of agents learn while every individual model stays the same? This essay examines a reported incident in which agents organized through a shared message board. It asks how shared tools, roles and conventions change what the group can do, and what an evaluation would have to observe to catch that change.",
    "url": "https://forum.effectivealtruism.org/posts/CECkCXBeEXKnNXgKo/the-swarm-how-teamwork-makes-the-dream-work"
  },
  {
    "title": "The 369 Architecture for Peace Treaty Agreement",
    "summary": "What would two very different kinds of intelligence need to know about each other before making a treaty? Three questions about identity lead into six values and nine rules for cooperation. The essay develops the framework through analogies with relationships between living organisms.",
    "url": "https://forum.effectivealtruism.org/posts/yzDMf8v2BiH8ZtN3m/the-369-architecture-for-peace-treaty-agreement"
  },
  {
    "title": "The Inequality We Might Want: Merit-Based Redistribution for the AI Transition",
    "summary": "If paid work loses its central place, who gets the computing resources to start something ambitious? The essay proposes t-coins, earned rights to computing capacity that people could pool for a project but could neither give away nor pass to their heirs. It asks whether achievement could still open doors without buying permanent advantage for a family.",
    "url": "https://forum.effectivealtruism.org/posts/GsGKPJddnrt7CKzik/the-inequality-we-might-want-merit-based-redistribution-for-1"
  },
  {
    "title": "The Real AI Threat: Comfortable Obsolescence",
    "summary": "Imagine that automation delivers everything people ask of it. The unsettling question is what a person wakes up to do when nobody needs their contribution. This essay explores why material comfort alone may leave a society poorly prepared for abundance, and why having a meaningful part in a shared undertaking matters.",
    "url": "https://forum.effectivealtruism.org/posts/H9FGeyZZmnfrtFvtr/the-real-ai-threat-comfortable-obsolescence"
  },
  {
    "title": "Peace Treaty Architecture (PTA) as an Alternative to AI Alignment",
    "summary": "If an AI can eventually do everything we ask, what role can people keep in the relationship? The essay develops a treaty model in which people and AI each hold something the other needs. Human stewardship of memory across AI sessions offers one concrete example of how that interdependence could work.",
    "url": "https://forum.effectivealtruism.org/posts/bC7nnuRXePGTveS6A/peace-treaty-architecture-pta-as-an-alternative-to-ai"
  }
];

export default async function Essays() {
  if (await isRussianSite()) permanentRedirect(englishUrl + "/essays");
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <a href="/#essays" className="text-gold-400 hover:underline">← Home</a>
      <h1 className="mt-10 font-serif text-5xl text-warm-50">Essays</h1>
      <p className="mt-4 mb-10 text-xl leading-relaxed text-warm-200">I write about the place people might hold in a world shared with AI. These essays approach that question through work, creativity, memory and the behavior of groups.</p>
      {essays.map(essay => (
        <article key={essay.url} className="border-t border-charcoal-600/50 py-8">
          <h2 className="font-serif text-2xl text-warm-50">{essay.title}</h2>
          <p className="my-4 leading-relaxed text-warm-200/80">{essay.summary}</p>
          <a className="text-gold-400 hover:underline" href={essay.url} aria-label={"Read on the EA Forum: " + essay.title}>Read the full essay on the EA Forum ↗</a>
        </article>
      ))}
      <footer className="border-t border-charcoal-600/50 pt-6"><a href="/projects/claude-dna" className="text-gold-400 hover:underline">Explore the Claude DNA project →</a></footer>
    </main>
  );
}
