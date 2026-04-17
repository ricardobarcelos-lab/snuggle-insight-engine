import { Brain, Database, Network, Shield, Sparkles, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "IA Proprietária",
    description: "Modelos treinados em milhares de processos seletivos para precisão de matching.",
  },
  {
    icon: Database,
    title: "Talent Pool Exclusivo",
    description: "Base ativa com profissionais validados, fora do alcance dos job boards.",
  },
  {
    icon: Network,
    title: "Rede de Especialistas",
    description: "Headhunters seniores com profundo conhecimento setorial.",
  },
  {
    icon: Workflow,
    title: "Processo Estruturado",
    description: "Metodologia dividida em 4 atos, com entregáveis claros em cada fase.",
  },
  {
    icon: Shield,
    title: "Garantia de Resultado",
    description: "Reposição assegurada conforme a faixa contratada, sem letras miúdas.",
  },
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description: "Cuidado em cada touchpoint, do briefing à integração do contratado.",
  },
];

const Ecosystem = () => {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-gradient-primary opacity-10 blur-3xl" />

      <div className="container relative max-w-[1240px] px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-soft">
            Ecossistema Harpio
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl">
            Tudo o que você precisa para{" "}
            <span className="text-gradient">contratar com confiança</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Um ecossistema integrado de tecnologia, dados e expertise humana, conectado para gerar resultado de ponta a ponta.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:border-primary/30 hover:shadow-card"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
