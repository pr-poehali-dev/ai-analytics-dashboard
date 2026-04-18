const works = [
  {
    year: "2024",
    title: "Проект «Огород на подоконнике»",
    description: "Экологический проект, в котором дети своими руками вырастили рассаду прямо в группе. Наблюдали за ростом растений, учились заботиться о природе.",
    tag: "Экология",
  },
  {
    year: "2024",
    title: "Проект «Спасем планету»",
    description: "Экологическая инициатива о бережном отношении к окружающей среде. Дети узнали о раздельном сборе мусора, экономии воды и защите природы.",
    tag: "Экология",
  },
  {
    year: "2024",
    title: "STEAM-образование в группе",
    description: "Внедрение элементов STEAM-подхода в ежедневные занятия: опыты, конструирование, логические задачи — всё в игровой форме по ФГОС ДО.",
    tag: "STEAM",
  },
  {
    year: "2023",
    title: "ИКТ в образовательном процессе",
    description: "Освоение и применение информационно-коммуникационных технологий в работе с детьми дошкольного возраста согласно обновлённому ФГОС ДО.",
    tag: "ИКТ",
  },
];

const courses = [
  {
    date: "26.02.2025",
    hours: "72 ч.",
    title: "Организация образовательной деятельности с детьми с ОВЗ в ДОО в соответствии с требованиями ФГОС ДО",
    org: 'ООО "Образовательный центр ИТ-перемена"',
  },
  {
    date: "26.02.2025",
    hours: "72 ч.",
    title: "ИКТ в работе воспитателя ДОО в соответствии с требованиями обновлённого ФГОС ДО",
    org: 'ООО "Образовательный центр ИТ-перемена"',
  },
  {
    date: "05.03.2024",
    hours: "72 ч.",
    title: "STEAM-образование дошкольников: особенности и практика в условиях ФГОС ДО",
    org: 'ООО "Образовательный центр ИТ-перемена"',
  },
  {
    date: "01.02.2023",
    hours: "36 ч.",
    title: "Эффективное применение ИКТ в дошкольном образовании",
    org: 'АНО ДПО "Инновационный образовательный центр повышения квалификации и переподготовки"',
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

        <div className="space-y-0 mb-24">
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

        <p className="font-mono text-xs uppercase text-primary tracking-widest mb-8">
          Повышение квалификации
        </p>
        <div className="space-y-0">
          {courses.map((c, i) => (
            <div
              key={i}
              className="grid sm:grid-cols-[100px_1fr_60px] gap-6 items-start py-6 border-t border-border"
            >
              <span className="font-mono text-xs text-foreground/40 pt-1">{c.date}</span>
              <div>
                <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-1">{c.title}</p>
                <p className="font-mono text-xs text-foreground/40">{c.org}</p>
              </div>
              <span className="font-mono text-xs text-primary whitespace-nowrap text-right">{c.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
