import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { englishUrl, isRussianSite } from "../../site-language";
import ConteXtubeOverview from "../ConteXtubeOverview";
import { projects } from "../catalog";

type Props = { params: Promise<{ slug: string }> };

async function getProject({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project || await isRussianSite()) notFound();
  return project;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const p = await getProject(props);
  const url = englishUrl + "/projects/" + p.slug;
  const title = p.title + " — Andrei Navrotskii";
  return {
    title, description: p.summary, alternates: { canonical: url },
    openGraph: { title, description: p.summary, url, type: "article" },
    twitter: { card: "summary", title, description: p.summary },
  };
}

export default async function ProjectPage(props: Props) {
  const p = await getProject(props);
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <a href="/#projects" className="text-gold-400 hover:underline">← All projects</a>
      <article className="mt-12">
        <h1 className="font-serif text-4xl md:text-6xl text-warm-50 leading-tight">{p.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-warm-200">{p.description}</p>
        {p.slug === "contextube" && <ConteXtubeOverview />}
        {p.details?.map(section => (
          <section key={section.heading} className="mt-9">
            <h2 className="font-serif text-2xl text-warm-50">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-warm-200/80">{section.text}</p>
          </section>
        ))}
        <footer className="mt-12 border-t border-charcoal-600/50 pt-5 flex flex-wrap gap-6 text-gold-400">
          {p.url && <a href={p.url} className="hover:underline">Visit {p.title} ↗</a>}
          {p.moonshot && <a href={p.moonshot} className="hover:underline">Original post on More Moonshots ↗</a>}
          {p.slug === "ohana" && <a href="/projects/per-aspera" className="hover:underline">Explore Ice and Metal: Per Aspera →</a>}
          <a href="/#contact" className="hover:underline">Contact Andrei</a>
        </footer>
      </article>
    </main>
  );
}
