const bars = [
  { label: "Fit Técnico", value: 85 },
  { label: "Fit Cultural", value: 78 },
  { label: "Senioridade", value: 90 },
];

const Scorecard = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-8 text-3xl md:text-4xl">Scorecard de Aderência</h2>
      <div className="grid gap-6 rounded-2xl bg-surface p-8 shadow-card md:grid-cols-1">
        {bars.map(({ label, value }) => (
          <div key={label}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-sm font-medium">{label}</span>
              <span className="text-sm text-primary font-semibold">{value}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-md bg-background/60">
              <div
                className="h-full rounded-md bg-gradient-accent transition-[width] duration-700 ease-out"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scorecard;
