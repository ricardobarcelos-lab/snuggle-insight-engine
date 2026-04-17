const rows = [
  { entrega: "Shortlist Qualificada", desc: "Candidatos validados com score técnico e cultural", status: "Incluído", variant: "green" as const },
  { entrega: "Relatório de Mercado", desc: "Insights de remuneração e concorrência", status: "Incluído", variant: "green" as const },
  { entrega: "Assessment Estruturado", desc: "Avaliação profunda de competências", status: "Opcional", variant: "yellow" as const },
];

const badgeClass = {
  green: "bg-badge-green text-emerald-100",
  blue: "bg-badge-blue text-blue-100",
  yellow: "bg-badge-yellow text-amber-100",
};

const Deliverables = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-8 text-3xl md:text-4xl">Modelo de Entregáveis</h2>
      <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface/40">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="p-4 text-left text-sm font-semibold">Entrega</th>
              <th className="p-4 text-left text-sm font-semibold">Descrição</th>
              <th className="p-4 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.entrega} className={i !== rows.length - 1 ? "border-b border-border-subtle" : ""}>
                <td className="p-4 font-medium">{r.entrega}</td>
                <td className="p-4 text-sm text-muted-foreground">{r.desc}</td>
                <td className="p-4">
                  <span className={`inline-block rounded-lg px-3 py-1.5 text-xs font-medium ${badgeClass[r.variant]}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Deliverables;
