import { Brain, Cpu, Database, GitBranch, Linkedin, Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const Technology = () => {
  const [open, setOpen] = useState(false);
  const candidates = [
    {
      code: "G03·A",
      score: 90,
      company: "Stone",
      role: "Senior Software Engineer · 5+ anos Elixir, 3+ anos Golang · Vitória, ES",
      fit: "Stone é referência em infra de adquirência no Brasil, com volume transacional massivo. Combinação Elixir + Go traz mentalidade de sistemas distribuídos.",
      attention: "Stone paga acima da média. Atratividade do MB tende a ganhar tração por escopo (cripto + RWA) mais do que por pacote.",
      tags: ["TOP 5 ADERÊNCIA", "ADQUIRÊNCIA", "PACOTE: R$ 22–28K"],
      featured: true,
    },
    {
      code: "G04·A",
      score: 86,
      company: "CI&T (alocado Itaú Unibanco)",
      role: "Senior Software Engineer · Bank Modernization · Java, Golang · 9+ anos",
      fit: "9+ anos em modernização bancária — exatamente o tipo de exposição que prepara para o equilíbrio entre legado e greenfield. 2x AWS Certified.",
      attention: "Modelo de alocação via CI&T pode influenciar pertencimento ao time. Validar disponibilidade real para vínculo CLT direto.",
      tags: ["ITAÚ VIA CI&T", "BANK MODERNIZATION", "PACOTE: R$ 18–24K"],
    },
  ];

  const pipeline = [
    { stage: "Mapeados", count: "300+", pct: 100, sub: "100% do universo-alvo", color: "from-violet-500 to-fuchsia-500" },
    { stage: "Abordados", count: "90", pct: 30, sub: "30% dos mapeados · em até 48h", color: "from-fuchsia-500 to-pink-500" },
    { stage: "Engajados", count: "20", pct: 22, sub: "20–22% dos abordados", color: "from-pink-500 to-rose-500" },
    { stage: "Entrevistados", count: "10", pct: 50, sub: "50% dos engajados", color: "from-rose-500 to-amber-500" },
    { stage: "Finalistas", count: "3–5", pct: 45, sub: "40–50% dos entrevistados", color: "from-amber-500 to-orange-500" },
  ];

  return (
    <section id="tecnologia" className="py-24 px-6 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Tecnologia Proprietária
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            IA que entende contexto humano
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso motor de inteligência combina dados públicos, histórico setorial e análise comportamental para
            ranquear candidatos com precisão cirúrgica.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Brain, title: "Modelos Próprios", desc: "Treinados com +50k perfis validados em recrutamento executivo." },
            { icon: Database, title: "Dados Enriquecidos", desc: "Cruzamento de LinkedIn, Glassdoor, bases proprietárias e sinais de mercado." },
            { icon: GitBranch, title: "Decisão Híbrida", desc: "IA propõe, especialista decide. Cada match passa por curadoria humana." },
          ].map((p) => (
            <div key={p.title} className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-elevated transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Mockups */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scoring Mockup */}
          <div className="rounded-2xl border bg-card shadow-elevated overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b bg-muted/40">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">AI Scoring · Vaga #2841</span>
              </div>
              <span className="text-xs text-muted-foreground">atualizado agora</span>
            </div>
            <div className="p-5 space-y-4">
              {candidates.map((c) => (
                <div
                  key={c.code}
                  className={`rounded-2xl border bg-background p-4 ${
                    c.featured ? "ring-1 ring-primary/30 shadow-sm" : ""
                  }`}
                >
                  {/* Header bar */}
                  <div className="flex items-stretch gap-3 mb-3">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-foreground text-background flex-1 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-[11px] font-bold tracking-wider whitespace-nowrap">
                        CAND · {c.code}
                      </span>
                      <span className="h-4 w-px bg-background/30" />
                      <span className="text-[10px] font-semibold tracking-wider text-primary truncate">
                        IDENTIDADE RESERVADA
                      </span>
                    </div>
                    <div className="text-right flex flex-col justify-center">
                      <div className="leading-none">
                        <span className="text-2xl font-extrabold text-primary tabular-nums">{c.score}</span>
                        <span className="text-xs font-semibold text-muted-foreground">/100</span>
                      </div>
                      <p className="text-[9px] font-bold tracking-wider text-muted-foreground mt-0.5">
                        SCORE HARPIO
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <p className="text-sm leading-snug mb-2">
                    <span className="font-semibold">{c.company}</span>
                    <span className="text-muted-foreground"> · {c.role}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border bg-background hover:bg-muted/40 mb-3"
                  >
                    <Linkedin className="w-3 h-3 text-[#0A66C2]" />
                    VER PERFIL
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  {/* Two columns */}
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t">
                    <div>
                      <p className="text-[10px] font-bold tracking-wider text-primary mb-1">LEITURA DE FIT</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.fit}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-wider text-primary mb-1">PONTO DE ATENÇÃO</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.attention}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t">
                    {c.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`text-[10px] font-semibold tracking-wider px-2 py-1 rounded-md ${
                          i === 0 && c.featured
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline Mockup */}
          <div className="rounded-2xl border bg-card shadow-elevated overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b bg-muted/40">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Pipeline · Sprint atual</span>
              </div>
              <span className="text-xs text-muted-foreground">D+12</span>
            </div>
            <div className="p-5 space-y-4">
              {pipeline.map((s) => (
                <div key={s.stage}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <span className="text-sm font-medium">{s.stage}</span>
                      <span className="text-[11px] text-muted-foreground ml-2">{s.sub}</span>
                    </div>
                    <span className="text-sm font-bold tabular-nums">{s.count}</span>
                  </div>
                  <div className="h-8 rounded-lg bg-muted overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${s.color} flex items-center justify-end pr-3`}
                      style={{ width: `${s.pct}%` }}
                    >
                      <span className="text-[10px] font-semibold text-white">{s.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-3 mt-2 border-t flex items-center justify-between text-xs text-muted-foreground">
                <span>Conversão mapeados → finalistas</span>
                <span className="font-semibold text-primary">~1,5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
