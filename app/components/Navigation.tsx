"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About", ru: "Обо мне" },
  { href: "#projects", label: "Projects", ru: "Проекты" },
  { href: "#writing", label: "Writing", ru: "Книги и сценарии" },
  { href: "/essays", label: "Essays", ru: "Эссе" },
  { href: "#philosophy", label: "Philosophy", ru: "Принципы" },
  { href: "#contact", label: "Contact", ru: "Контакты" },
];

export default function Navigation({ russian }: { russian: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-900/90 backdrop-blur-md border-b border-charcoal-600/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-serif text-lg text-warm-50 hover:text-gold-400 transition-colors"
        >
          A.N.
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={russian && link.href === "/essays" ? "https://andreinavrotskii.com/essays" : link.href}
                className="text-sm text-warm-200/70 hover:text-gold-400 transition-colors"
              >
                {russian ? (link.href === "/essays" ? "Эссе (EN)" : link.ru) : link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={russian ? "https://andreinavrotskii.com" : "https://ru.andreinavrotskii.com"}
          hrefLang={russian ? "en" : "ru"} lang={russian ? "en" : "ru"}
          className="ml-auto mr-4 md:ml-4 md:mr-0 text-sm text-gold-400 hover:underline">
          {russian ? "English" : "Русский"}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-warm-200/70 hover:text-gold-400 transition-colors"
          aria-expanded={mobileOpen}
          aria-label={russian ? "Меню" : "Toggle menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-600/50">
          <ul className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={russian && link.href === "/essays" ? "https://andreinavrotskii.com/essays" : link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-warm-200/70 hover:text-gold-400 transition-colors"
                >
                  {russian ? (link.href === "/essays" ? "Эссе (EN)" : link.ru) : link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
