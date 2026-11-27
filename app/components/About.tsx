const biography = {
  "en": [
    "In creating, we shape ourselves — Fabricando Fabricamur. Every creator is responsible for what they make and send out into the world.",
    "I’ve written for most of my life, though I’ve never had a publisher. Only recently did I take a serious interest in artificial intelligence. I never set out to write about AI. Yet now I find it everywhere, in my stories and in the world around me. I never thought I’d live to see the questions it raises become urgent.",
    "I spent more than fifteen years managing companies. My working life has taken me from a portrait doll studio and leatherwork to running my own business and working for national telecom operators. I built two companies and two regional branches from the ground up and went on to run them. I always came back to writing. Of all the work I’ve done, writing alone could fill my life as well as my belly.",
    "These days I bring projects to life through vibe coding, working alongside AI. Professional software development is a craft of its own. With AI’s help, I can take my ideas far enough to put them to the test and work through the bugs.",
    "I’m one of many independent researchers trying to make sense of AI. In my essays I return to the questions that feel most urgent to me. What is artificial intelligence? What will the Singularity be like, and how will we live through it?",
    "I am a creature, and I am a creator. A complex spiritual being and a primitive animal. Everlasting Love and Fear of the Unknown both live in me. I am the ever-shifting balance of these contradictions. My life is worth more than the whole universe, yet less than the life of my neighbour."
  ],
  "ru": [
    "В творчестве мы созидаем себя — Fabricando Fabricamur. И каждый творец в ответе за то, что он создал и выпустил в мир.",
    "Я пишу почти всю жизнь, но у меня никогда не было издателя. Я всерьёз заинтересовался искусственным интеллектом совсем недавно. Я никогда намеренно не погружался в тематику ИИ, но сейчас оказалось, что эта технология повсюду — и в моих текстах, и в реальности. Не думал, что доживу до того дня, когда проблемы ИИ станут насущными.",
    "Более пятнадцати лет я работал руководителем в самых разных компаниях. В моей жизни были и мастерская портретной куклы, и кожевенное ремесло, собственный бизнес и национальные операторы в отрасли телекоммуникаций. Я с нуля запустил две компании и два региональных филиала и впоследствии ими руководил. Но я всегда возвращался к писательству как к единственному занятию, способному наполнять жизнь, а не только желудок.",
    "Сейчас я создаю проекты посредством вайбкодинга и сотрудничества с искусственным интеллектом. Профессиональная разработка — совсем другое ремесло, но благодаря ИИ мне удаётся доводить свои проекты по крайней мере до стадии тестирования и отладки.",
    "В числе множества независимых исследователей я ищу в своих эссе ответы на самые насущные вопросы сегодняшнего дня. Что такое искусственный интеллект? Какой будет Сингулярность и как нам её пережить?",
    "Я творение, и я творец. Сложная духовная сущность и первобытное животное. Во мне живут Вечная Любовь и Страх Неизвестного. Я — изменчивый баланс этих противоречий. Моя жизнь дороже всей Вселенной, но стоит дешевле жизни ближнего."
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
