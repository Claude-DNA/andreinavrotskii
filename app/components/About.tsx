const biography = {
  "en": [
    "I’ve been writing for most of my life. I’ve never had a publisher. For years I wrote about the choices people might face if the machines they built could make choices of their own. I took a serious interest in AI only recently. I never thought I’d live to see those questions leave the pages of my stories.",
    "I spent more than fifteen years in senior management. At one end of that career was a studio that made portrait dolls. At the other were nationwide telecom companies. Along the way I set up companies and branch offices, four in all, and ran them myself. Through all those years, writing was the thing I kept coming back to.",
    "These days I build software by vibe coding. I describe what I have in mind, try what the AI produces, and work with it until the result feels right. Software development is a different craft. There’s a belief behind my experiments that goes back much further: when we make something, we also make ourselves. And whatever part AI plays, I’m responsible for what I put into the world.",
    "I think of myself as both creature and creator. A complex spiritual being and a primitive animal. Capable of everlasting love and still afraid of the unknown. The balance shifts every day. My life is worth more than the whole universe to me, yet someone else’s life can be worth more than mine."
  ],
  "ru": [
    "Я пишу почти всю жизнь. У меня никогда не было издателя. Много лет назад я писал о выборе, перед которым окажется человек, если созданная им машина тоже сможет выбирать. Всерьёз я заинтересовался искусственным интеллектом совсем недавно. Не думал, что доживу до того дня, когда эти вопросы сойдут со страниц моих рассказов.",
    "Больше пятнадцати лет я работал руководителем в самых разных компаниях. В моей жизни были и мастерская портретной куклы, и телекоммуникационные компании, работавшие по всей стране. Я с нуля открывал компании и филиалы — всего четыре — и сам ими руководил. И все эти годы возвращался к тому, что любил больше всего: писать.",
    "Сейчас я делаю программы с помощью вайбкодинга. Объясняю ИИ свой замысел, пробую то, что получилось, и вместе с ним довожу результат до ума. Профессиональная разработка — другое ремесло. А убеждение, с которым я за всё это берусь, гораздо старше моего интереса к ИИ. Создавая что-то, мы создаём и самих себя. И за то, что я выпускаю в мир, отвечаю я.",
    "Я и творение, и творец. Сложное духовное существо и первобытное животное. Во мне уживаются вечная любовь и страх перед неизвестным, и равновесие между ними всё время меняется. Моя жизнь для меня дороже всей Вселенной, а чья-то чужая жизнь может оказаться дороже моей."
  ]
};

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
            {biography[russian ? "ru" : "en"].map(paragraph => (
              <p key={paragraph} className="reveal">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
