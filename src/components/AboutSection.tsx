export function AboutSection() {
  const stats = [
    { value: "15+", label: "лет опыта" },
    { value: "300+", label: "выпускников" },
    { value: "1-я", label: "квалификационная категория" },
  ];

  return (
    <section id="about" className="relative z-10 py-32 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase text-primary tracking-widest mb-6">
              Обо мне
            </p>
            <h2 className="font-sentient text-4xl sm:text-5xl leading-tight mb-8">
              Воспитатель, который{" "}
              <i className="font-light">любит своё дело</i>
            </h2>
            <p className="text-foreground/60 font-mono text-sm leading-relaxed mb-6">
              Меня зовут Мария Ивановна. Я воспитатель дошкольного образовательного учреждения с многолетним стажем. Работаю с детьми от 3 до 7 лет, создаю безопасную, развивающую и тёплую атмосферу для каждого ребёнка.
            </p>
            <p className="text-foreground/60 font-mono text-sm leading-relaxed">
              Моя цель — помочь каждому малышу раскрыть свой потенциал, развить любознательность и подготовиться к школе с радостью, а не со страхом.
            </p>
          </div>

          <div>
            <img
              src="https://cdn.poehali.dev/projects/f4469937-a10c-4725-80d4-81f35eafad3c/files/016e170f-a0c1-4c1a-b526-87005ea2bbb8.jpg"
              alt="Уютный детский сад"
              className="w-full aspect-square object-cover rounded-sm border border-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-24 border-t border-border pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-sentient text-5xl text-primary mb-3">{stat.value}</div>
              <div className="font-mono text-xs uppercase text-foreground/50 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
