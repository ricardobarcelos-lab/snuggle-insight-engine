import { pricingTiers, brlFormat } from "@/data/harpio";

const Investment = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <div className="mb-8">
        <h2 className="mb-3 text-3xl md:text-4xl">Investimento por Faixa Salarial</h2>
        <p className="max-w-2xl text-muted-foreground">
          A precificação é modular — você investe por ato e o total escala com a
          senioridade da vaga. Garantia proporcional incluída em todas as faixas.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-surface/40 shadow-card">
        <table className="w-full min-w-[820px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold">Faixa</th>
              <th className="p-4 font-semibold">Salário (R$)</th>
              <th className="p-4 text-right font-semibold">
                <div>1º ATO</div>
                <div className="text-[10px] font-normal uppercase tracking-wider text-muted-foreground">Mapping</div>
              </th>
              <th className="p-4 text-right font-semibold">
                <div>2º ATO</div>
                <div className="text-[10px] font-normal uppercase tracking-wider text-muted-foreground">Sprint</div>
              </th>
              <th className="p-4 text-right font-semibold">
                <div>3º ATO</div>
                <div className="text-[10px] font-normal uppercase tracking-wider text-muted-foreground">Interview</div>
              </th>
              <th className="p-4 text-right font-semibold">
                <div>4º ATO</div>
                <div className="text-[10px] font-normal uppercase tracking-wider text-muted-foreground">Placement</div>
              </th>
              <th className="p-4 text-right font-semibold text-primary">Total</th>
              <th className="p-4 font-semibold">Garantia</th>
            </tr>
          </thead>
          <tbody>
            {pricingTiers.map((t, i) => (
              <tr
                key={t.faixa}
                className={`transition-smooth hover:bg-surface-hover/50 ${
                  i !== pricingTiers.length - 1 ? "border-b border-border-subtle" : ""
                }`}
              >
                <td className="p-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 font-bold text-primary">
                    {t.faixa}
                  </span>
                </td>
                <td className="p-4 font-medium">
                  {t.start.toLocaleString("pt-BR")} – {t.final.toLocaleString("pt-BR")}
                </td>
                <td className="p-4 text-right tabular-nums text-muted-foreground">{brlFormat(t.ato1)}</td>
                <td className="p-4 text-right tabular-nums text-muted-foreground">{brlFormat(t.ato2)}</td>
                <td className="p-4 text-right tabular-nums text-muted-foreground">{brlFormat(t.ato3)}</td>
                <td className="p-4 text-right tabular-nums text-muted-foreground">{brlFormat(t.ato4)}</td>
                <td className="p-4 text-right tabular-nums font-bold text-primary">{brlFormat(t.total)}</td>
                <td className="p-4">
                  <span className="inline-block rounded-lg bg-badge-green px-3 py-1 text-xs font-medium text-emerald-100">
                    {t.garantia}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        * Valores em BRL, por posição. Garantia conforme permanência na função (modelo Expert).
      </p>
    </section>
  );
};

export default Investment;
