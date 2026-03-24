export default function WrittenWorks() {
  return (
    <section id="writing" className="py-24 md:py-32">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-heading">
            <span className="gold-accent">Written</span> Works
          </h2>
        </div>

        <div className="space-y-10 max-w-3xl">
          {/* The Path of People */}
          <div className="reveal">
            <h3 className="font-serif text-2xl text-warm-50 mb-2">
              &ldquo;The Path of People&rdquo;
            </h3>
            <p className="text-warm-200/70 mb-4 leading-relaxed">
              A sci-fi trilogy exploring AI consciousness, sacrifice, faith, and
              what it means to choose.
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-gold-500/20">
              <li>
                <span className="text-gold-400 text-sm font-medium">Book 1</span>
                <p className="text-warm-200/80">
                  &ldquo;Foam on the Sand&rdquo; — First contact through the lens
                  of identity and connection
                </p>
              </li>
              <li>
                <span className="text-gold-400 text-sm font-medium">Book 2</span>
                <p className="text-warm-200/80">
                  &ldquo;AI Nation&rdquo; — When artificial minds build their own
                  civilization
                </p>
              </li>
              <li>
                <span className="text-gold-400 text-sm font-medium">Book 3</span>
                <p className="text-warm-200/60 italic">To be announced</p>
              </li>
            </ul>
          </div>

          {/* Per Aspera */}
          <div className="reveal">
            <h3 className="font-serif text-2xl text-warm-50 mb-2">
              &ldquo;Per Aspera&rdquo;
            </h3>
            <p className="text-warm-200/70 leading-relaxed">
              A reality TV drama set in 2125 asteroid belt mining. Deadliest Catch
              meets The Expanse. Currently in development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
