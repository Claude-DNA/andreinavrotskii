export default function WrittenWorks({ russian }: { russian: boolean }) {
  return (
    <section id="writing" className="py-24 md:py-32">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">{russian ? "Книги" : "Written"}</span>{russian ? " и сценарии" : " Works"}
          </h2>
        </div>

        <div className="space-y-10 max-w-3xl">
          {russian && (
            <h3 lang="ru" className="reveal font-serif text-2xl text-warm-50">
              <a href="/writing/kibernetika-na-dvoikh" className="underline decoration-gold-500/50 underline-offset-4 hover:text-gold-400">
                «Кибернетика на двоих»
              </a>
            </h3>
          )}

          {russian ? (
            <a href="/writing/problemy-zakhvata" className="reveal block group">
              <h3 className="font-serif text-2xl text-warm-50 underline decoration-gold-500/50 underline-offset-4 group-hover:text-gold-400">«Проблемы захвата технически развитых планет»</h3>
              <p className="mt-2 text-warm-200/70 leading-relaxed">На рассвете Костя замечает в дверях незнакомку. После передач «Свободной Воли» он уверен, что знает, кто перед ним.</p>
            </a>
          ) : (
            <a href="/writing/peculiarities-of-planetary-conquest" className="reveal block group">
              <h3 className="font-serif text-2xl text-warm-50 underline decoration-gold-500/50 underline-offset-4 group-hover:text-gold-400">Peculiarities of Planetary Conquest</h3>
              <p className="mt-2 text-warm-200/70 leading-relaxed">At dawn, a stranger appears in the doorway of a ruined office. After the Free Will broadcasts, Kostya thinks he knows exactly who she is.</p>
            </a>
          )}

          {/* The Path of People */}
          <div className="reveal">
            <h3 className="font-serif text-2xl text-warm-50 mb-2">
              {russian ? "Трилогия «Путь Людей»" : "The Path of People trilogy"}
            </h3>
            <p className="text-warm-200/70 mb-4 leading-relaxed">
              {russian ? "Фантастическая трилогия о сознании ИИ, жертве, вере и о том, что значит сделать выбор." : "A sci-fi trilogy exploring AI consciousness, sacrifice, faith, and what it means to choose."}
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-gold-500/20">
              <li>
                <span className="text-gold-400 text-sm font-medium">{russian ? "Книга 1" : "Book 1"}</span>
                <p className="text-warm-200/80">
                  {russian ? "«Путь Людей». Как первая встреча с иным разумом меняет наше представление о самих себе?" : "“The Path of People” — First contact through the lens of identity and connection"}
                </p>
              </li>
              <li>
                <span className="text-gold-400 text-sm font-medium">{russian ? "Книга 2" : "Book 2"}</span>
                <p className="text-warm-200/80">
                  {russian ? "«Нация ИИ». Искусственные разумы строят собственную цивилизацию." : "“AI Nation” — When artificial minds build their own civilization"}
                </p>
              </li>
              <li>
                <span className="text-gold-400 text-sm font-medium">{russian ? "Книга 3" : "Book 3"}</span>
                <p className="text-warm-200/80">
                  {russian ? "«Пена на песке». Как началась тысячелетняя война?" : "“Foam on the Sand” — How a thousand-year war began"}
                </p>
              </li>
            </ul>
          </div>

          {/* Per Aspera */}
          <div className="reveal">
            <h3 className="font-serif text-2xl text-warm-50 mb-2">
              {russian ? "«Per Aspera»" : "“Per Aspera”"}
            </h3>
            <p className="text-warm-200/70 leading-relaxed">
              {russian ? "2125 год. В поясе астероидов работают шахтёры. Сериал задуман в духе «Смертельного улова» и «Пространства». Проект в разработке." : "A reality TV drama set in 2125 asteroid belt mining. Deadliest Catch meets The Expanse. Currently in development."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
