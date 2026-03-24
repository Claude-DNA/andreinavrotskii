export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">About</span> Me
          </h2>
        </div>

        <div className="max-w-3xl space-y-6 text-warm-200/80 leading-relaxed">
          <p className="reveal">
            I&apos;m a self-taught developer and creator based in British Columbia, Canada.
            I work at the intersection of technology and storytelling — building tools
            that help people shape narratives, and writing stories that explore where
            technology might take us.
          </p>
          <p className="reveal">
            I founded{" "}
            <span className="text-gold-400">Ohana</span> — a human-AI
            collaborative studio where humans and AI agents work side by side across
            creative and technical projects. It&apos;s an experiment in what becomes possible
            when you stop treating AI as a tool and start treating it as a collaborator.
          </p>
          <p className="reveal">
            I believe in building things that matter — one step at a time. No shortcuts,
            no hype. Just honest work, genuine curiosity, and a deep respect for the craft
            of making something real.
          </p>
        </div>
      </div>
    </section>
  );
}
