import { useMemo, useState } from "react";
import { Calculator, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { pricingTiers, brlFormat, atoSplits } from "@/data/harpio";

const MIN_SAL = 2000;
const MAX_SAL = 50000;

const Simulator = () => {
  const [salary, setSalary] = useState(8000);

  const tier = useMemo(
    () => pricingTiers.find((t) => salary >= t.start && salary <= t.final) ?? pricingTiers[pricingTiers.length - 1],
    [salary]
  );

  const atoValues = [
    { ...atoSplits[0], value: tier.ato1 },
    { ...atoSplits[1], value: tier.ato2 },
    { ...atoSplits[2], value: tier.ato3 },
    { ...atoSplits[3], value: tier.ato4 },
  ];

  const traditionalCost = Math.round(salary * 3);
  const savings = traditionalCost - tier.total;
  const savingsPct = Math.max(0, Math.round((savings / traditionalCost) * 100));

  return (
    <section id="simulador" className="py-24 px-6 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Simulador Interativo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Quanto custa contratar com a Harpio?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Arraste o slider e descubra o investimento total — fracionado em 4 atos — para a faixa salarial da vaga.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Slider card */}
          <div className="lg:col-span-3 rounded-3xl border bg-card p-8 md:p-10 shadow-elevated">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Salário mensal da vaga</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                Faixa {tier.faixa}
              </span>
            </div>
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-bold tabular-nums bg-gradient-to-r from-primary to-accent-magenta bg-clip-text text-transparent">
                {brlFormat(salary)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Faixa correspondente: {brlFormat(tier.start)} – {brlFormat(tier.final)}
              </div>
            </div>

            <Slider
              value={[salary]}
              min={MIN_SAL}
              max={MAX_SAL}
              step={500}
              onValueChange={(v) => setSalary(v[0])}
              className="my-6"
            />
            <div className="flex justify-between text-xs text-muted-foreground mb-8">
              <span>{brlFormat(MIN_SAL)}</span>
              <span>{brlFormat(MAX_SAL)}+</span>
            </div>

            {/* ATO breakdown */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-foreground mb-2">Distribuição em 4 atos</div>
              {atoValues.map((a) => {
                const pct = (a.value / tier.total) * 100;
                return (
                  <div key={a.key} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        <span className="text-primary font-semibold">{a.label}</span> · {a.title}
                      </span>
                      <span className="tabular-nums font-semibold text-foreground">{brlFormat(a.value)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent-magenta transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Result card */}
          <div className="lg:col-span-2 rounded-3xl p-8 md:p-10 shadow-elevated bg-gradient-to-br from-primary to-accent-magenta text-primary-foreground relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Investimento total
              </div>
              <div className="text-5xl md:text-6xl font-bold tabular-nums mb-1 leading-none">
                {brlFormat(tier.total)}
              </div>
              <div className="text-sm opacity-80 mb-8">pago de forma fracionada nos 4 atos</div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-white/10 backdrop-blur p-4">
                  <div className="flex items-center gap-1.5 text-xs opacity-80 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Garantia
                  </div>
                  <div className="text-lg font-bold">{tier.garantia}</div>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur p-4">
                  <div className="flex items-center gap-1.5 text-xs opacity-80 mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Economia
                  </div>
                  <div className="text-lg font-bold">{savingsPct}%</div>
                </div>
              </div>

              <div className="rounded-xl bg-white/10 backdrop-blur p-4 text-sm">
                <div className="opacity-80 mb-1">Consultoria tradicional (~3x salário)</div>
                <div className="flex items-baseline justify-between">
                  <span className="line-through opacity-70 tabular-nums">{brlFormat(traditionalCost)}</span>
                  <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">
                    Você economiza {brlFormat(Math.max(0, savings))}
                  </span>
                </div>
              </div>

              {salary > 35000 && (
                <div className="mt-4 text-xs bg-white/15 rounded-lg p-3">
                  ⚡ Faixa premium — escopo customizado sob demanda.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;