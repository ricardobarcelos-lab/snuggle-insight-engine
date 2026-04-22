import { Check, Coins, CreditCard, Sparkles, Wallet } from "lucide-react";
import { brlFormat } from "@/data/harpio";

type Pkg = {
  name: string;
  credits: number;
  bonus: number;
  price: number;
  popular?: boolean;
  extra?: string;
};

const packages: Pkg[] = [
  { name: "Starter", credits: 15000, bonus: 1500, price: 15000 },
  { name: "Growth", credits: 30000, bonus: 3000, price: 30000, popular: true },
  { name: "Scale", credits: 50000, bonus: 5000, price: 50000 },
  { name: "Enterprise", credits: 100000, bonus: 10000, price: 100000, extra: "Deep Research Harpio" },
];

const baseBenefits = [
  "Validade 12 meses",
  "Garantia de Entrevistas",
  "Acesso ao Banco de Talentos Harpio",
  "Panorama Profissional",
  "Análises de IA Avançadas",
  "Gerente de Sucesso Dedicado",
];

const fmtCredits = (n: number) => n.toLocaleString("pt-BR");

const CreditPackages = () => {
  return (
    <section id="creditos" className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Coins className="w-4 h-4" />
            Pacotes de Créditos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Flexibilidade com economia progressiva
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote que faz sentido para o seu volume de contratações. Conversão fixa:{" "}
            <span className="font-semibold text-foreground">1 crédito = R$ 1,00</span>.
          </p>
        </div>

        {/* Payment options banner */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center gap-4 p-5 rounded-2xl border bg-card shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Contrato anual parcelado</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-primary">12x</span> sem juros — parcela em destaque em cada pacote.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-br from-primary/10 to-accent-magenta/10 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Pagamento à vista</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-primary">15% de desconto</span> sobre o valor total do pacote.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((p) => {
            const installment = p.price / 12;
            const cashPrice = p.price * 0.85;
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl border bg-card p-6 flex flex-col shadow-sm hover:shadow-elevated transition-shadow ${
                  p.popular ? "ring-2 ring-primary border-primary/30" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-5">
                  {fmtCredits(p.credits)} créditos + {fmtCredits(p.bonus)} de bônus
                </p>

                {/* Highlighted installment */}
                <div
                  className={`rounded-xl p-4 mb-3 ${
                    p.popular
                      ? "bg-gradient-to-br from-primary to-accent-magenta text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className={`text-[10px] font-bold tracking-wider mb-1 ${p.popular ? "opacity-90" : "text-muted-foreground"}`}>
                    12X NO ANUAL
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tabular-nums leading-none">
                      {brlFormat(installment)}
                    </span>
                    <span className={`text-xs ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>/mês</span>
                  </div>
                  <p className={`text-[11px] mt-1 ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>
                    Total {brlFormat(p.price)}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs mb-5 px-1">
                  <span className="text-muted-foreground">À vista (15% off)</span>
                  <span className="font-bold text-primary tabular-nums">{brlFormat(cashPrice)}</span>
                </div>

                <ul className="space-y-2 text-sm flex-1">
                  {baseBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                  {p.extra && (
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-primary">{p.extra}</span>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-xs text-muted-foreground space-y-1 text-center">
          <p>* Créditos podem ser usados para qualquer serviço. Consulte a tabela de consumo.</p>
          <p>* Créditos mensais e anuais não são acumulativos.</p>
          <p>
            * Os valores demonstrados não consideram os impostos de{" "}
            <span className="font-semibold text-foreground">14,25%</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditPackages;