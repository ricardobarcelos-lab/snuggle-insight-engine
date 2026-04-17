import { TrendingUp, AlertCircle, Compass } from "lucide-react";

const insights = [
  {
    metric: "73%",
    label: "dos talentos sêniores não estão ativos em job boards",
    description: "A guerra por talentos exige hunting ativo e abordagem consultiva, não apenas anúncios.",
    icon: AlertCircle,
    accent: "from-rose-500/10 to-rose-500/5",
    iconColor: "text-rose-500",
  },
  {
    metric: "42 dias",
    label: "é o tempo médio para preencher uma vaga estratégica",
    description: "Cada dia em aberto custa produtividade, oportunidade e moral do time existente.",
    icon: TrendingUp,
    accent: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    metric: "3,2x",
    label: "é o custo de uma má contratação sobre o salário anual",
    description: "Errar dói. Por isso, validação técnica, comportamental e cultural não são opcionais.",
    icon: Compass,
    accent: "from-violet-500/10 to-violet-500/5",
    iconColor: "text-primary",
  },
];

const MarketReading = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container max-w-[1240px] px-5">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Leitura Estratégica de Mercado
            </span>
            <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl">
              O cenário mudou. <br />
              <span className="text-gradient">Sua estratégia precisa acompanhar.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground md:text-lg">
            Recrutar hoje é disputar atenção, narrativa e propósito com os melhores players do mundo. Os números abaixo mostram por que o modelo tradicional já não basta — e como nos preparamos para esse novo jogo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.metric}
                className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${insight.accent} p-7 shadow-soft transition-smooth hover:shadow-card`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-lg bg-card ${insight.iconColor} shadow-soft`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-4xl font-extrabold text-foreground md:text-5xl">{insight.metric}</div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{insight.label}</div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketReading;
