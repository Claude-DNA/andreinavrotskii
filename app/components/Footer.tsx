export default function Footer({ russian }: { russian: boolean }) {
  return (
    <footer className="border-t border-charcoal-600/30 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-warm-200/40">
        <p>&copy; 2026 {russian ? "Андрей Навроцкий" : "Andrei Navrotskii"}</p>
        <p>{russian ? "Сайт создан в сотрудничестве с ИИ" : "Built with human-AI collaboration"}</p>
      </div>
    </footer>
  );
}
