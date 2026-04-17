import { Map, Zap, UserSearch, Trophy, ArrowRight, Check } from "lucide-react";

const acts = [
  {
    number: "01",
    label: "1º ATO",
    title: "Strategic Mapping",
    subtitle: "Competition",
    icon: Map,
    description:
      "Imersão profunda no setor, na concorrência e na vaga para construir um mapa preciso de onde estão os melhores talentos.",
    deliverables: [
      "Análise setorial e tendências de contratação",
      "Mapeamento de 10+ players concorrentes",
      "Análise crítica da Job Description",
      "20 profissionais com aderência >70%",
    ],
    accent: "from-violet-500 to-fuchsia-500",
    glow: "shadow-[0_20px_60px_-20px_hsl(270_91%_58%/0.5)]",
  },
  {
    number: "02",
    label: "2º ATO",
    title: "Approach & Screening",
    subtitle: "Sprint",
    icon: Zap,
    description:
      "Abordagem consultiva e ágil que ativa talentos passivos de alto nível, eliminando ghosting e triagem demorada.",
    deliverables: [
      "Acesso a talent pool exclusivo",
      "Engajamento profissional e estratégico",
      "Entrevista garantida ou investimento de volta",
      "Até 10x mais econômico que consultorias",
    ],
    accent: "from-fuchsia-500 to-pink-500",
    glow: "shadow-[0_20px_60px_-20px_hsl(320_90%_60%/0.5)]",
  },
  {
    number: "03",
    label: "3º ATO",
    title: "Interview",
    subtitle: "HeadHunter Expert",
    icon: UserSearch,
    description:
      "Curadoria profunda com especialistas seniores que entregam shortlist enxuta de candidatos validados em todas as dimensões.",
    deliverables: [
      "Calibração de perfil — 100% alinhamento",
      "Hunting ativo: 150+ perfis por sprint",
      "Deep assessment técnico e comportamental",
      "Top 3-5 shortlist com fit cultural validado",
    ],
    accent: "from-pink-500 to-rose-500",
    glow: "shadow-[0_20px_60px_-20px_hsl(340_90%_60%/0.5)]",
  },
  {
    number: "04",
    label: "4º ATO",
    title: "Placement",
    subtitle: "Contratação Garantida",
    icon: Trophy,
    description:
      "Acompanhamento até a assinatura e onboarding, com garantia de reposição conforme a faixa contratada.",
    deliverables: [
      "Acompanhamento de proposta e negociação",
      "Suporte no onboarding do contratado",
      "Garantia de reposição por permanência",
      "Relacionamento contínuo pós-contratação",
    ],
    accent: "from-rose-500 to-orange-500",
    glow: "shadow-[0_20px_60px_-20px_hsl(15_90%_60%/0.5)]",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-[0.07] blur-3xl" />

      <div className="container relative max-w-[1240px] px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-soft">
            Nossos Serviços
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl">
            Quatro atos para uma{" "}
            <span className="text-gradient">contratação extraordinária</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Uma metodologia estruturada em 4 atos complementares — cada um com escopo, entregáveis e garantias claras.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {acts.map((act) => {
            const Icon = act.icon;
            return (
              <article
                key={act.number}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:${act.glow}`}
              >
                {/* Decorative gradient corner */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${act.accent} opacity-10 blur-2xl transition-smooth group-hover:opacity-20`}
                />

                {/* Header row */}
                <div className="relative mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${act.accent} text-white shadow-button`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {act.label}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {act.subtitle}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`bg-gradient-to-br ${act.accent} bg-clip-text text-5xl font-extrabold leading-none text-transparent`}
                  >
                    {act.number}
                  </div>
                </div>

                {/* Title + description */}
                <h3 className="relative mb-3 text-2xl font-bold text-foreground md:text-[26px]">
                  {act.title}
                </h3>
                <p className="relative mb-6 text-sm leading-relaxed text-muted-foreground">
                  {act.description}
                </p>

                {/* Deliverables */}
                <ul className="relative space-y-2.5 border-t border-border pt-5">
                  {act.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${act.accent} text-white`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Footer flow indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>Strategic Mapping</span>
          <ArrowRight className="h-3.5 w-3.5" />
          <span>Sprint</span>
          <ArrowRight className="h-3.5 w-3.5" />
          <span>HeadHunter Expert</span>
          <ArrowRight className="h-3.5 w-3.5" />
          <span className="text-gradient font-bold">Placement</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
