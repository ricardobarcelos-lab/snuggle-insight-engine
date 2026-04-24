import { Check, ShieldCheck } from "lucide-react";
import { pricingTiers, brlFormat } from "@/data/harpio";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Investment = () => {
  return (
    <section id="investimento" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            Investimento Transparente
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Tabela de valores por faixa salarial
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cobrança fracionada em 4 atos — você paga conforme o processo evolui. Garantia de reposição proporcional
            à faixa contratada.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            "Pagamento dividido em 4 etapas — sem risco antecipado",
            "Garantia de reposição de 1 a 6 meses",
            "Até 10x mais econômico que consultorias tradicionais",
          ].map((h) => (
            <div key={h} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{h}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl border bg-card shadow-elevated overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary/10 to-primary-glow/10 hover:bg-primary/10">
                <TableHead className="font-semibold text-foreground">Faixa</TableHead>
                <TableHead className="font-semibold text-foreground">Salário</TableHead>
                <TableHead className="font-semibold text-foreground text-right">1º ATO</TableHead>
                <TableHead className="font-semibold text-foreground text-right">2º ATO</TableHead>
                <TableHead className="font-semibold text-foreground text-right whitespace-pre-line">{"3º ATO\n"}</TableHead>
                <TableHead className="font-semibold text-foreground text-right">4º ATO</TableHead>
                <TableHead className="font-semibold text-primary text-right">Total</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Garantia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingTiers.map((tier) => (
                <TableRow key={tier.faixa} className="hover:bg-muted/40">
                  <TableCell className="font-semibold">{tier.faixa}</TableCell>
                  <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {brlFormat(tier.start)} – {brlFormat(tier.final)}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{brlFormat(tier.ato1)}</TableCell>
                  <TableCell className="text-right tabular-nums">{brlFormat(tier.ato2)}</TableCell>
                  <TableCell className="text-right tabular-nums">{brlFormat(tier.ato3)}</TableCell>
                  <TableCell className="text-right tabular-nums">{brlFormat(tier.ato4)}</TableCell>
                  <TableCell className="text-right tabular-nums font-bold text-primary">
                    {brlFormat(tier.total)}
                  </TableCell>
                  <TableCell className="text-center text-sm">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap">
                      {tier.garantia}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          <span className="text-primary font-semibold">*</span> Os valores demonstrados não consideram os impostos
          de <span className="font-semibold text-foreground">14,25%</span>. Valores referenciais. Faixa 8 (acima
          de R$ 35k) atendida sob demanda com escopo customizado.
        </p>
      </div>
    </section>
  );
};

export default Investment;
