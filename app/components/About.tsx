export default function About({ russian }: { russian: boolean }) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">{russian ? "Обо" : "About"}</span>{russian ? " мне" : " Me"}
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
          {/* Portrait */}
          <div className="reveal relative shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-2xl" />
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-gold-500/30 ring-1 ring-gold-500/10">
              <img
                src="/Images/portrait-smile-800.jpg"
                alt={russian ? "Андрей Навроцкий" : "Andrei Navrotskii"}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="max-w-2xl space-y-6 text-warm-200/80 leading-relaxed">
            <p className="reveal">
              {russian ? "Я разработчик-самоучка, живу в канадской провинции Британская Колумбия. Создаю инструменты для тех, кто пишет книги и сценарии, а в собственных историях исследую, как технологии меняют нашу жизнь." : <>
              I&apos;m a self-taught developer and creator based in British Columbia, Canada.
              I work at the intersection of technology and storytelling — building tools
              that help people shape narratives, and writing stories that explore where
              technology might take us.
            </>}
            </p>
            <p className="reveal">
              {russian ? "Я основал студию Ohana, где люди и ИИ-агенты вместе работают над творческими и техническими проектами. Мне интересно, что мы можем придумать и сделать, когда у искусственного интеллекта появляется роль соавтора." : <>
              I founded{" "}
              <span className="text-gold-400">Ohana</span> — a human-AI
              collaborative studio where humans and AI agents work side by side across
              creative and technical projects. It&apos;s an experiment in what becomes possible
              when you stop treating AI as a tool and start treating it as a collaborator.
            </>}
            </p>
            <p className="reveal">
              {russian ? "Мне нравится шаг за шагом делать вещи, в которых есть смысл. Для этого нужны любопытство, честная работа и уважение к своему ремеслу." : <>
              I believe in building things that matter — one step at a time. No shortcuts,
              no hype. Just honest work, genuine curiosity, and a deep respect for the craft
              of making something real.
            </>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
