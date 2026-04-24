import {
  ArrowRight,
  Check,
  Sparkles,
  Map,
  Users,
  PhoneCall,
  ClipboardList,
  FileSignature,
} from "lucide-react";

type Ato = {
  id: string;
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Map;
  accent: string;
  highlights: string[];
  count: string;
};

const atos: Ato[] = [
  {
    id: "ato-1",
    number: "01",
    label: "01 ATO _ Harpio Mind",
    title: "Mapeamento Estratégico",
    subtitle: "Candidatos interessados e aderentes",
    description:
      "Hunting ativo em bases proprietárias e mercado, qualificando perfis aderentes ao DNA da vaga e validando interesse real na oportunidade.",
    icon: Map,
    accent: "from-violet-500 to-fuchsia-500",
    highlights: ["Pesquisa de mercado", "Validação de interesse", "Dados de contato"],
    count: "20 profissionais",
  },
  {
    id: "ato-2",
    number: "02",
    label: "02 ATO - Harpio Srint",
    title: "Pré-entrevista Qualificada",
    subtitle: "Script validado pelo cliente",
    description:
      "Conduzimos entrevistas estruturadas com roteiro co-criado com o cliente, garantindo profundidade técnica, fit cultural e aderência aos requisitos críticos.",
    icon: PhoneCall,
    accent: "from-fuchsia-500 to-pink-500",
    highlights: ["Script co-criado", "Avaliação por competência", "Relatório por candidato"],
    count: "10 profissionais",
  },
  {
    id: "ato-3",
    number: "03",
    label: "03 ATO - Harpio Expert",
    title: "Shortlist & Negociação",
    subtitle: "Headhunter expert conduzindo o processo",
    description:
      "Shortlist final composta e conduzida por headhunter especialista na área. Negociação com o candidato finalista, alinhamento de proposta e fechamento.",
    icon: ClipboardList,
    accent: "from-pink-500 to-rose-500",
    highlights: ["Headhunter dedicado", "Shortlist 3-5", "Negociação de oferta"],
    count: "4 profissionais",
  },
  {
    id: "ato-4",
    number: "04",
    label: "ATO FINAL _ Complition Expert",
    title: "Placement",
    subtitle: "Termos finais e contratação",
    description:
      "Formalização dos termos finais do contrato, onboarding assistido e acompanhamento pós-contratação para garantir retenção e sucesso na posição.",
    icon: FileSignature,
    accent: "from-rose-500 to-orange-500",
    highlights: ["Termos contratuais", "Onboarding assistido", "Garantia de retenção"],
    count: "1 placement",
  },
];

const journey = [
  "Mapeamento estratégico",
  "Pré-entrevista qualificada",
  "Shortlist & negociação",
  "Placement",
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
            Um processo orquestrado em 4 ATOS — do mapeamento estratégico ao placement —
            para garantir contratações de alta precisão, velocidade real e retenção.
          </p>
        </div>

        {/* 4 ATOS grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {atos.map((a) => {
            const Icon = a.icon;
            return (
              <article
                key={a.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${a.accent} opacity-10 blur-2xl transition-smooth group-hover:opacity-25`}
                />
                <div className="relative flex items-start justify-between">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${a.accent} text-white shadow-button`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`bg-gradient-to-br ${a.accent} bg-clip-text text-3xl font-extrabold tracking-tight text-transparent`}
                  >
                    {a.number}
                  </span>
                </div>
                <div className="relative mt-5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {a.label}
                </div>
                <h3 className="relative mt-1 text-xl font-bold text-foreground">{a.title}</h3>
                <p className="relative mt-1.5 text-sm text-muted-foreground">{a.subtitle}</p>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
                <div className="relative mt-5 border-t border-border pt-4">
                  <ul className="space-y-2">
                    {a.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                        <span
                          className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${a.accent} text-white`}
                        >
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                    <Users className="h-3 w-3" />
                    {a.count}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Journey flow */}
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/60 p-5 backdrop-blur">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Fluxo dos 4 ATOS
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
    </section>
  );
};

export default Services;
