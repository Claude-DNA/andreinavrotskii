export default function Hero({ russian }: { russian: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient dot-pattern overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gold-500/[0.03] blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold-500/[0.03] blur-3xl" />

      <div className="relative text-center px-6">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-50 mb-6 animate-fade-in gold-glow">
          {russian ? "Андрей Навроцкий" : "Andrei Navrotskii"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gold-400 tracking-wide font-light animate-fade-in-up">
          {russian ? "Творение и творец" : "Creature and Creator"}
        </p>
        <div className="mt-12 animate-fade-in-up">
          <a
            href="#about"
            className="inline-block text-warm-200/50 hover:text-gold-400 transition-colors"
            aria-label={russian ? "Перейти к разделу «Обо мне»" : "Scroll down"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
