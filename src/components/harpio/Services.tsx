import {
  Crosshair,
  LineChart,
  Rocket,
  Compass,
  ArrowRight,
  Check,
  Sparkles,
  Target,
  Users,
  Award,
  Search,
} from "lucide-react";

type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Crosshair;
  accent: string;
  highlights: string[];
};

const pillars: Pillar[] = [
  {
    id: "expert-hunting",
    eyebrow: "High-Touch Recruitment",
    title: "Expert Hunting",
    subtitle: "Busca ativa para posições estratégicas",
    description:
      "Metodologia proprietária para C-Level, diretoria e posições críticas — alta precisão em cada etapa.",
    icon: Crosshair,
    accent: "from-violet-500 to-fuchsia-500",
    highlights: ["C-Level & Diretoria", "Shortlist 3-5", "SLA 15 dias"],
  },
  {
    id: "market-intel",
    eyebrow: "Intelligence Unit",
    title: "Inteligência de Mercado",
    subtitle: "Estratégia de talentos e tendências",
    description:
      "Diagnóstico de competitividade, benchmark salarial e mapeamento de skills para decisões orientadas por dado.",
    icon: LineChart,
    accent: "from-fuchsia-500 to-pink-500",
    highlights: ["Benchmark vs Top 3", "Gap de Skills", "Employer Brand"],
  },
  {
    id: "sprint",
    eyebrow: "Speed & Volume",
    title: "Sprint",
    subtitle: "Consultoria focada nas habilidades da vaga",
    description:
      "Sprints de 2-4 semanas para vagas de média complexidade com perfis abertos ou blindados.",
    icon: Rocket,
    accent: "from-pink-500 to-rose-500",
    highlights: ["2-4 semanas", "Perfis abertos/blindados", "Garantia de entrevistas"],
  },
  {
    id: "career",
    eyebrow: "Career Service",
    title: "Transição Profissional",
    subtitle: "Outplacement e recolocação",
    description:
      "Acompanhamento humano e de IA para transições estratégicas e recolocação executiva acelerada.",
    icon: Compass,
    accent: "from-rose-500 to-orange-500",
    highlights: ["Mentoria 1:1", "Marca pessoal", "Network ativo"],
  },
];

const expertSteps = [
  {
    icon: Target,
    title: "Calibração de Perfil",
    badge: "100% Alinhamento",
    items: [
      "Deep diving na cultura organizacional",
      "Mapeamento de requisitos técnicos",
      "Definição de soft skills prioritárias",
      "Alinhamento de faixa salarial",
    ],
  },
  {
    icon: Search,
    title: "Hunting Ativo",
    badge: "150+ Perfis/Sprint",
    items: [
      "Busca em bases proprietárias",
      "Abordagem direta de competidores",
      "Ativação de networking estratégico",
      "Mapeamento de lideranças do setor",
    ],
  },
  {
    icon: Award,
    title: "Deep Assessment",
    badge: "Top 3-5 Shortlist",
    items: [
      "Entrevistas por competência",
      "Avaliação de fit cultural",
      "Validação técnica especializada",
      "Análise de potencial de crescimento",
    ],
  },
];

const journey = [
  "Identificamos os melhores",
  "Entrevistas profundas",
  "Validação técnica",
  "Negociação de oferta",
  "Contratação garantida",
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-[0.07] blur-3xl" />

      <div className="container relative max-w-[1240px] px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Nossos Serviços
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl">
            Soluções completas para cada{" "}
            <span className="text-gradient">decisão de talento</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Quatro frentes integradas — do hunting executivo à inteligência de mercado — para
            orquestrar contratações com precisão cirúrgica e velocidade real.
          </p>
        </div>

        {/* 4 service pillars */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-2xl transition-smooth group-hover:opacity-25`}
                />
                <div
                  className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-button`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="relative text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.eyebrow}
                </div>
                <h3 className="relative mt-1 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="relative mt-1.5 text-sm text-muted-foreground">{p.subtitle}</p>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="relative mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Featured: Expert Hunting deep-dive */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-[0.12] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 opacity-[0.10] blur-3xl" />

            {/* Top header */}
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <Crosshair className="h-3.5 w-3.5" />
                  High-Touch Recruitment
                </span>
                <h3 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                  Expert <span className="text-gradient">Hunting</span>
                </h3>
                <p className="mt-3 max-w-xl text-base text-muted-foreground">
                  Metodologia proprietária de busca ativa para posições estratégicas. Transformamos
                  dados de mercado em contratações de alta precisão.
                </p>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-background/60 p-5 text-center backdrop-blur">
                  <div className="text-3xl font-extrabold text-gradient md:text-4xl">15<span className="ml-1 text-base font-semibold text-muted-foreground">dias</span></div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">SLA Médio</div>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-5 text-center backdrop-blur">
                  <div className="text-3xl font-extrabold text-gradient md:text-4xl">95<span className="text-base font-semibold text-muted-foreground">%</span></div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Retenção</div>
                </div>
              </div>
            </div>

            {/* 3-step columns */}
            <div className="relative mt-10 grid gap-5 md:grid-cols-3">
              {expertSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="group relative rounded-2xl border border-border bg-background/60 p-6 backdrop-blur transition-smooth hover:border-primary/40 hover:bg-background"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-button">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                    <div className="mt-1 inline-block rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-accent-foreground">
                      {step.badge}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {step.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                          <span className="leading-snug">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Journey flow */}
            <div className="relative mt-10 rounded-2xl border border-dashed border-border bg-background/40 p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Users className="h-3.5 w-3.5 text-primary" />
                Jornada do Candidato
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-foreground md:text-sm">
                {journey.map((step, idx) => (
                  <div key={step} className="flex items-center gap-3">
                    <span
                      className={
                        idx === journey.length - 1
                          ? "text-gradient font-bold"
                          : "text-foreground"
                      }
                    >
                      {step}
                    </span>
                    {idx < journey.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
