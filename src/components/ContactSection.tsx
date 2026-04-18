export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-32 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs uppercase text-primary tracking-widest mb-6">
          Контакты
        </p>
        <h2 className="font-sentient text-4xl sm:text-5xl md:text-6xl mb-8">
          Напишите мне —<br />
          <i className="font-light">отвечу на любой вопрос</i>
        </h2>
        <p className="font-mono text-sm text-foreground/50 max-w-md mx-auto mb-16 leading-relaxed">
          Если вы хотите узнать больше о моей работе, методиках или задать вопрос о развитии вашего ребёнка — я всегда на связи.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:педагог@почта.ру"
            className="font-mono text-sm uppercase text-foreground/60 hover:text-foreground transition-colors duration-150 border border-border px-8 py-4 hover:border-primary/60"
          >
            Написать на почту
          </a>
          <a
            href="tel:+79001234567"
            className="font-mono text-sm uppercase text-primary hover:text-primary/80 transition-colors duration-150 border border-primary/40 px-8 py-4 hover:border-primary"
          >
            Позвонить
          </a>
        </div>

        <div className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-foreground/30 uppercase tracking-widest">
            Воспитатель ДОУ
          </span>
          <span className="font-mono text-xs text-foreground/30">
            © 2025 — с любовью к детям
          </span>
        </div>
      </div>
    </section>
  );
}
