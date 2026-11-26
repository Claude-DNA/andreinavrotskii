import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { isRussianSite, englishUrl, russianUrl } from "../../site-language";
import styles from "../kibernetika-na-dvoikh/reader.module.css";
import paragraphs from "./manuscript.json";

const title = "Peculiarities of Planetary Conquest — Andrei Navrotskii";
const url = englishUrl + "/writing/peculiarities-of-planetary-conquest";
const art = "/writing/problemy-zakhvata/";
export const metadata: Metadata = {
  title, description: "An illustrated science fiction story by Andrei Navrotskii.",
  alternates: { canonical: url },
  openGraph: { title, url, type: "article", locale: "en_US", images: [englishUrl + art + "vstrecha.webp"] },
};

export default async function StoryPage() {
  if (await isRussianSite()) notFound();
  return (
    <main lang="en" className={styles.reader}>
      <a href="/#writing">← Written Works</a>
      <article>
        <header><h1>Peculiarities of Planetary Conquest</h1><p>Andrei Navrotskii</p><a href={russianUrl + "/writing/problemy-zakhvata"} lang="ru" hrefLang="ru">Русский оригинал</a></header>
        <div className={styles.prose}>
          {paragraphs.map((paragraph, i) => (
            <Fragment key={i}>
              {/^_+$/.test(paragraph) ? <hr className="my-10 mx-auto w-16 border-gold-500/50" /> : <p>{paragraph}</p>}
              {i === 2 && <figure><Image src={art + "vstrecha.webp"} width={1440} height={960} sizes="(max-width: 736px) 100vw, 736px" alt="Kostya watches a woman standing in the doorway of the ruined office." /></figure>}
              {i === 22 && <figure><Image src={art + "na-orbite.webp"} width={1440} height={810} sizes="(max-width: 736px) 100vw, 736px" alt="Two reptilian figures struggle over a capsule beneath a projection of Earth." /></figure>}
            </Fragment>
          ))}
        </div>
      </article>
      <a href="/#writing">← Written Works</a>
    </main>
  );
}
