const works = [
  {
    year: "2024",
    title: "Проект «Мир природы»",
    description: "Экологический мини-проект для детей 5–6 лет. Дети вырастили рассаду, вели дневники наблюдений и сделали презентацию для родителей.",
    tag: "Экология",
  },
  {
    year: "2024",
    title: "Театральная постановка",
    description: "Совместная постановка сказки «Репка» на новый лад. Дети сами придумали продолжение истории и нарисовали декорации.",
    tag: "Творчество",
  },
  {
    year: "2023",
    title: "Математика через игру",
    description: "Авторская серия занятий по формированию математических представлений с использованием LEGO и дидактических игр.",
    tag: "Развитие",
  },
  {
    year: "2023",
    title: "Открытое занятие для педагогов",
    description: "Проведение открытого занятия по речевому развитию для коллег из района. Высокая оценка методической комиссии.",
    tag: "Профессиональное",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative z-10 py-32 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase text-primary tracking-widest mb-6">
          Моя работа
        </p>
        <h2 className="font-sentient text-4xl sm:text-5xl mb-16">
          Проекты и <i className="font-light">достижения</i>
        </h2>

        <div className="space-y-0">
          {works.map((work, i) => (
            <div
              key={i}
              className="group grid sm:grid-cols-[100px_1fr_auto] gap-6 items-start py-8 border-t border-border hover:border-primary/40 transition-colors duration-300"
            >
              <span className="font-mono text-xs text-foreground/40 pt-1">{work.year}</span>
              <div>
                <h3 className="font-sentient text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                  {work.title}
                </h3>
                <p className="font-mono text-sm text-foreground/50 leading-relaxed">{work.description}</p>
              </div>
              <span className="font-mono text-xs uppercase text-foreground/30 border border-border px-3 py-1 whitespace-nowrap">
                {work.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
