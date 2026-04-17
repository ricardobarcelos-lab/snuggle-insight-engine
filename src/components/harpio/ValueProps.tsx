import { Target, Crosshair, Repeat } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Inteligência de Mercado",
    desc: "Mapeamento profundo de talento, concorrência e dinâmica de oferta/demanda.",
  },
  {
    icon: Crosshair,
    title: "Execução Premium",
    desc: "Hunting ativo com abordagem consultiva e precisão de targeting.",
  },
  {
    icon: Repeat,
    title: "Previsibilidade",
    desc: "Modelo recorrente com pipeline contínuo de talentos qualificados.",
  },
];

const ValueProps = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-10 text-3xl md:text-4xl">Proposta de Valor</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group rounded-2xl bg-surface p-6 shadow-card transition-smooth hover:-translate-y-1 hover:bg-surface-hover"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
