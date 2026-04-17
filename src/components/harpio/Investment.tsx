const plans = [
  { name: "Starter", scope: "1 posição / mês", price: "R$ XX.XXX", highlight: false },
  { name: "Growth", scope: "3 posições / mês", price: "R$ XX.XXX", highlight: true },
  { name: "Enterprise", scope: "Volume customizado", price: "Sob consulta", highlight: false },
];

const Investment = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-8 text-3xl md:text-4xl">Investimento</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`rounded-2xl p-8 shadow-card transition-smooth hover:-translate-y-1 ${
              p.highlight
                ? "bg-gradient-accent text-primary-foreground shadow-glow"
                : "bg-surface hover:bg-surface-hover"
            }`}
          >
            {p.highlight && (
              <span className="mb-4 inline-block rounded-full bg-background/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Recomendado
              </span>
            )}
            <h3 className="mb-1 text-2xl">{p.name}</h3>
            <p className={`mb-6 text-sm ${p.highlight ? "opacity-90" : "text-muted-foreground"}`}>
              {p.scope}
            </p>
            <div className="text-3xl font-bold">{p.price}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Investment;
