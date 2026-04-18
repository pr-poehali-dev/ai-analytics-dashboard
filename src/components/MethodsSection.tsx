const methods = [
  {
    num: "01",
    title: "Игровое обучение",
    desc: "Все занятия строятся через игру — самый естественный и эффективный способ познания мира для дошкольников.",
  },
  {
    num: "02",
    title: "Проектная деятельность",
    desc: "Дети участвуют в мини-проектах, где сами исследуют, задают вопросы и находят ответы под моим руководством.",
  },
  {
    num: "03",
    title: "Индивидуальный подход",
    desc: "Каждый ребёнок уникален. Я изучаю темп и стиль каждого и адаптирую занятия под его особенности.",
  },
  {
    num: "04",
    title: "Сотрудничество с семьёй",
    desc: "Регулярно общаюсь с родителями, провожу консультации и совместные мероприятия для укрепления связи дом–сад.",
  },
];

export function MethodsSection() {
  return (
    <section id="methods" className="relative z-10 py-32 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase text-primary tracking-widest mb-6">
          Методики
        </p>
        <h2 className="font-sentient text-4xl sm:text-5xl mb-16">
          Как я <i className="font-light">работаю с детьми</i>
        </h2>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {methods.map((m) => (
            <div
              key={m.num}
              className="bg-background p-10 group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="font-mono text-4xl text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-300">
                {m.num}
              </div>
              <h3 className="font-sentient text-2xl mb-4">{m.title}</h3>
              <p className="font-mono text-sm text-foreground/50 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
