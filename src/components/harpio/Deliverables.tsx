import { deliverables, atoSplits } from "@/data/harpio";
import { Check } from "lucide-react";

const atoColors: Record<string, string> = {
  ato1: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  ato2: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
  ato3: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
  ato4: "from-primary/20 to-primary/5 border-primary/30",
};

const Deliverables = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <div className="mb-10">
        <h2 className="mb-3 text-3xl md:text-4xl">Modelo de Entregáveis</h2>
        <p className="max-w-2xl text-muted-foreground">
          Quatro atos orquestrados que transformam uma demanda em contratação.
          Cada ato entrega artefatos concretos e valor mensurável.
        </p>
      </div>

      <div className="space-y-8">
        {atoSplits.map((ato) => {
          const groups = deliverables.filter((d) => d.ato === ato.key);
          return (
            <div
              key={ato.key}
              className={`rounded-2xl border bg-gradient-to-br p-6 md:p-8 shadow-card ${atoColors[ato.key]}`}
            >
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-border-subtle/50 pb-5">
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {ato.label}
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {ato.title}
                    {ato.subtitle && (
                      <span className="ml-2 text-base font-normal text-muted-foreground">
                        · {ato.subtitle}
                      </span>
                    )}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Peso no escopo</div>
                  <div className="text-2xl font-bold text-primary">
                    {Math.round(ato.share * 100)}%
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {groups.map((g) => (
                  <div key={g.title} className="rounded-xl bg-background/40 p-5">
                    <h4 className="mb-1 font-semibold">{g.title}</h4>
                    {g.tagline && (
                      <p className="mb-3 text-xs italic text-muted-foreground">{g.tagline}</p>
                    )}
                    <ul className="space-y-2">
                      {g.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Deliverables;
