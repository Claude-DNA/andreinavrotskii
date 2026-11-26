import { projects } from "../projects/catalog";

export default function Projects({ russian }: { russian: boolean }) {
  return (
    <section id="projects" className="py-24 md:py-32 bg-charcoal-800/40">
      <div className="section-container">
        <h2 className="section-heading reveal">
          <span className="gold-accent">{russian ? "Мои" : "Things"}</span>{russian ? " проекты" : " I'm Building"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(project => !russian || project.descriptionRu).map(project => (
            <article key={project.slug} className="reveal relative rounded-xl border border-charcoal-600/50 bg-charcoal-800/60 p-6 md:p-8 hover:border-gold-500/40">
              <h3 className="font-serif text-xl md:text-2xl text-warm-50 mb-3">
                {russian ? project.titleRu ?? project.title : (
                  <a className="after:absolute after:inset-0 after:rounded-xl focus-visible:after:outline focus-visible:after:outline-gold-400" href={`/projects/${project.slug}`}>
                    {project.title} <span aria-hidden="true" className="text-gold-400">→</span>
                  </a>
                )}
              </h3>
              <p className="text-warm-200/70 leading-relaxed">{russian ? project.descriptionRu : project.summary}</p>
              {russian && project.url && <a href={project.url} className="mt-4 inline-block text-sm text-gold-400 hover:underline" target="_blank" rel="noopener noreferrer">Открыть проект ↗</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
