const axes = [
  { label: "Liderança", value: 0.85 },
  { label: "Técnico", value: 0.9 },
  { label: "Cultural", value: 0.78 },
  { label: "Execução", value: 0.82 },
  { label: "Visão", value: 0.75 },
  { label: "Comunicação", value: 0.88 },
];

const size = 320;
const center = size / 2;
const radius = 120;

const pointAt = (index: number, total: number, r: number) => {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
};

const CompetencyRadar = () => {
  const polygon = axes
    .map((a, i) => {
      const p = pointAt(i, axes.length, radius * a.value);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-8 text-3xl md:text-4xl">Radar de Competências</h2>
      <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-surface p-8 shadow-card md:flex-row md:gap-12">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
          {[0.25, 0.5, 0.75, 1].map((ring) => (
            <polygon
              key={ring}
              points={axes
                .map((_, i) => {
                  const p = pointAt(i, axes.length, radius * ring);
                  return `${p.x},${p.y}`;
                })
                .join(" ")}
              fill="none"
              stroke="hsl(var(--border-subtle))"
              strokeWidth={1}
            />
          ))}
          {axes.map((_, i) => {
            const p = pointAt(i, axes.length, radius);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={p.x}
                y2={p.y}
                stroke="hsl(var(--border-subtle))"
                strokeWidth={1}
              />
            );
          })}
          <polygon
            points={polygon}
            fill="hsl(var(--primary) / 0.25)"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
          {axes.map((a, i) => {
            const p = pointAt(i, axes.length, radius * a.value);
            return <circle key={i} cx={p.x} cy={p.y} r={4} fill="hsl(var(--primary))" />;
          })}
          {axes.map((a, i) => {
            const p = pointAt(i, axes.length, radius + 22);
            return (
              <text
                key={a.label}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-muted-foreground text-[11px] font-medium"
              >
                {a.label}
              </text>
            );
          })}
        </svg>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {axes.map((a) => (
            <li key={a.label} className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">{a.label}</span>
              <span className="font-semibold text-primary">{Math.round(a.value * 100)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompetencyRadar;
