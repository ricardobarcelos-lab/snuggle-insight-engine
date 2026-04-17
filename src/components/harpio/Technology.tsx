import { Brain, Cpu, Database, GitBranch, Sparkles, TrendingUp } from "lucide-react";

const Technology = () => {
  const candidates = [
    { name: "Ana Ribeiro", role: "Head of TA", score: 96, match: "Excelente" },
    { name: "Carlos Mendes", role: "Sr. Recruiter", score: 91, match: "Forte" },
    { name: "Júlia Santos", role: "Talent Lead", score: 88, match: "Forte" },
    { name: "Rafael Costa", role: "TA Manager", score: 84, match: "Bom" },
  ];

  const pipeline = [
    { stage: "Mapeados", count: 312, color: "from-violet-500 to-fuchsia-500" },
    { stage: "Abordados", count: 187, color: "from-fuchsia-500 to-pink-500" },
    { stage: "Engajados", count: 94, color: "from-pink-500 to-rose-500" },
    { stage: "Entrevistados", count: 28, color: "from-rose-500 to-amber-500" },
    { stage: "Shortlist", count: 5, color: "from-amber-500 to-orange-500" },
  ];

  const maxPipeline = pipeline[0].count;

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
            <div className="p-5 space-y-3">
              {candidates.map((c) => (
                <div key={c.name} className="flex items-center gap-4 p-3 rounded-xl border bg-background">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    {c.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium truncate">{c.name}</p>
                      <span className="text-xs text-muted-foreground">{c.match}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{c.role}</p>
                    <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary-glow"
                        style={{ width: `${c.score}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{c.score}</p>
                    <p className="text-[10px] text-muted-foreground -mt-1">match</p>
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
                    <span className="text-sm font-medium">{s.stage}</span>
                    <span className="text-sm font-bold tabular-nums">{s.count}</span>
                  </div>
                  <div className="h-8 rounded-lg bg-muted overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${s.color} flex items-center justify-end pr-3`}
                      style={{ width: `${(s.count / maxPipeline) * 100}%` }}
                    >
                      <span className="text-[10px] font-semibold text-white">
                        {Math.round((s.count / maxPipeline) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-3 mt-2 border-t flex items-center justify-between text-xs text-muted-foreground">
                <span>Conversão mapeados → shortlist</span>
                <span className="font-semibold text-primary">1.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
