import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isRussianSite, russianUrl } from "../../site-language";
import manuscript from "./manuscript.json";
import styles from "./reader.module.css";

const title = "Кибернетика на двоих — Андрей Навроцкий";
const url = russianUrl + "/writing/kibernetika-na-dvoikh";
export const metadata: Metadata = {
  title,
  description: "Фантастический рассказ Андрея Навроцкого. Полный текст с иллюстрациями.",
  alternates: { canonical: url },
  openGraph: { title, url, type: "article", locale: "ru_RU", images: [russianUrl + "/Images/cybernetics/lab.webp"] },
  twitter: { card: "summary_large_image", title, images: [russianUrl + "/Images/cybernetics/lab.webp"] },
};

export default async function StoryPage() {
  if (!(await isRussianSite())) notFound();

  return (
    <main className={styles.reader}>
      <a href="/#writing">← Книги и сценарии</a>
      <article>
        <header>
          <h1>Кибернетика на двоих</h1>
          <p>Андрей Навроцкий</p>
        </header>
        <div className={styles.prose} dangerouslySetInnerHTML={{ __html: manuscript }} />
      </article>
      <a href="/#writing">← Книги и сценарии</a>
    </main>
  );
}
