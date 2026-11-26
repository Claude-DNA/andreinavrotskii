"use client";

import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import WrittenWorks from "./components/WrittenWorks";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home({ russian }: { russian: boolean }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation russian={russian} />
      <main>
        <Hero russian={russian} />
        <About russian={russian} />
        <Projects russian={russian} />
        <WrittenWorks russian={russian} />
        {!russian && (
          <section id="essays" className="py-20 bg-charcoal-800/40">
            <div className="section-container">
              <h2 className="section-heading"><a className="gold-accent hover:underline" href="/essays">Essays →</a></h2>
              <p className="max-w-2xl text-warm-200/80">What happens to human purpose when work becomes optional? What can a group of AI agents learn together? Essays on cooperation, agency and life alongside AI.</p>
            </div>
          </section>
        )}
        <Philosophy russian={russian} />
        <Contact russian={russian} />
      </main>
      <Footer russian={russian} />
    </>
  );
}
