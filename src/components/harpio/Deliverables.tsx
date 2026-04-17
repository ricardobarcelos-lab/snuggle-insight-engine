import { deliverables, atoSplits } from "@/data/harpio";

const Deliverables = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-8 text-3xl md:text-4xl">Modelo de Entregáveis</h2>
      <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface/40">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="p-4 text-left text-sm font-semibold">ATO</th>
              <th className="p-4 text-left text-sm font-semibold">Grupo</th>
              <th className="p-4 text-left text-sm font-semibold">Descritivo</th>
            </tr>
          </thead>
          <tbody>
            {deliverables.map((g, i) => {
              const ato = atoSplits.find((a) => a.key === g.ato)!;
              return (
                <tr
                  key={`${g.ato}-${g.title}`}
                  className={i !== deliverables.length - 1 ? "border-b border-border-subtle" : ""}
                >
                  <td className="p-4 align-top">
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {ato.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{ato.title}</div>
                  </td>
                  <td className="p-4 align-top font-medium">
                    {g.title}
                    {g.tagline && (
                      <div className="mt-1 text-xs font-normal italic text-muted-foreground">
                        {g.tagline}
                      </div>
                    )}
                  </td>
                  <td className="p-4 align-top text-sm text-muted-foreground">
                    <ul className="space-y-1.5">
                      {g.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Deliverables;
