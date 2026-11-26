import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { isRussianSite, russianUrl, englishUrl } from "../../site-language";
import styles from "../kibernetika-na-dvoikh/reader.module.css";
import paragraphs from "./manuscript.json";

const title = "Проблемы захвата технически развитых планет — Андрей Навроцкий";
const url = russianUrl + "/writing/problemy-zakhvata";
const art = "/writing/problemy-zakhvata/";
export const metadata: Metadata = {
  title, description: "Фантастический рассказ Андрея Навроцкого. Полный текст с иллюстрациями.",
  alternates: { canonical: url },
  openGraph: { title, url, type: "article", locale: "ru_RU", images: [russianUrl + art + "vstrecha.webp"] },
};

export default async function StoryPage() {
  if (!(await isRussianSite())) notFound();
  return (
    <main lang="ru" className={styles.reader}>
      <a href="/#writing">← Книги и сценарии</a>
      <article>
        <header><h1>Проблемы захвата технически развитых планет</h1><p>Андрей Навроцкий</p><a href={englishUrl + "/writing/peculiarities-of-planetary-conquest"} lang="en" hrefLang="en">Read in English</a></header>
        <div className={styles.prose}>
          {paragraphs.map((paragraph, i) => (
            <Fragment key={i}>
              <p>{paragraph}</p>
              {i === 2 && <figure><Image src={art + "vstrecha.webp"} width={1440} height={960} sizes="(max-width: 736px) 100vw, 736px" alt="Костя видит девушку в дверях разрушенного офиса." /></figure>}
              {i === 20 && <figure><Image src={art + "na-orbite.webp"} width={1440} height={810} sizes="(max-width: 736px) 100vw, 736px" alt="Два ящера тянут капсулу в разные стороны на фоне проекции Земли." /></figure>}
            </Fragment>
          ))}
        </div>
      </article>
      <a href="/#writing">← Книги и сценарии</a>
    </main>
  );
}
