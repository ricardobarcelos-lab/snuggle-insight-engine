import { Lightbulb, Users, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Descoberta",
    description: "Imersão estratégica para entender contexto, cultura e objetivos do negócio.",
  },
  {
    icon: Users,
    title: "Mapeamento",
    description: "Identificação dos melhores talentos do mercado, mesmo os que não estão buscando.",
  },
  {
    icon: Target,
    title: "Curadoria",
    description: "Avaliação técnica, comportamental e cultural para garantir o match perfeito.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Acompanhamento da contratação ao onboarding, com garantia de permanência.",
  },
];

const InnovationJourney = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container max-w-[1240px] px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Jornada de Inovação
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl">
            Um processo desenhado para{" "}
            <span className="text-gradient">transformar contratações</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Cada etapa foi projetada para combinar precisão de IA com sensibilidade humana, entregando previsibilidade do início ao fim.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-button">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Etapa {idx + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
