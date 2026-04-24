import { Star } from "lucide-react";
import HarpioLogo from "./HarpioLogo";
import cornerstoneLogo from "@/assets/cornerstone-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="container max-w-[1240px] px-5 pb-24 pt-12 md:pb-32 md:pt-16">
        {/* Logo */}
        <div className="mb-16 flex items-center gap-5 md:mb-24">
          <HarpioLogo />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            em parceria
          </span>
          <img
            src={cornerstoneLogo}
            alt="Cornerstone"
            className="h-8 w-auto object-contain"
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* Left: copy */}
          <div>
            <h1 className="text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-[64px]">
              Estamos Transformando o{" "}
              <span className="text-gradient">Recrutamento</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              O poder do modelo híbrido, combinando IA e expertise humana para
              impulsionar resultados nas empresas que buscam os melhores talentos.
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-full max-w-md bg-border" />

            {/* Social proof + CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-amber-400", "bg-rose-400", "bg-violet-500"].map((c, i) => (
                    <div
                      key={i}
                      className={`h-9 w-9 rounded-full border-2 border-background ${c}`}
                    />
                  ))}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-foreground text-[10px] font-semibold text-background">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground">4.8/5</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Aprovado por +2K Profissionais
                  </div>
                </div>
              </div>

              <button className="group relative inline-flex items-center justify-center rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-button transition-smooth hover:scale-[1.02] hover:shadow-glow">
                Acessar o estudo da sua vaga
              </button>
            </div>
          </div>

          {/* Right: floating mockup cards */}
          <div className="relative h-[480px] hidden lg:block">
            {/* Search card */}
            <div className="absolute left-0 top-8 w-[340px] rounded-2xl bg-dark-card p-5 shadow-elevated">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-primary" />
                <span className="text-sm font-medium text-dark-card-foreground/80">
                  Buscando profissionais...
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex gap-3">
                  <span className="text-dark-card-foreground/30">1</span>
                  <span className="text-dark-card-foreground/90">Inicializando busca de talentos...</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-dark-card-foreground/30">2</span>
                  <span className="text-emerald-400">Verificando compatibilidade cultural...</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-dark-card-foreground/30">3</span>
                  <span className="text-dark-card-foreground/60">Cruzando dados de mercado...</span>
                </div>
              </div>
            </div>

            {/* Audio bubble */}
            <div className="absolute right-4 top-0 flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-dark-card shadow-elevated">
              <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-dark-card-foreground/10">
                <div className="h-3 w-3 rounded-sm bg-dark-card-foreground/70" />
              </div>
              <div className="text-[10px] text-dark-card-foreground/60">00:00</div>
              <div className="text-[8px] text-dark-card-foreground/40">Processando...</div>
            </div>

            {/* Matching card */}
            <div className="absolute bottom-0 right-0 w-[416px] rounded-2xl bg-dark-card p-8 shadow-elevated">
              <div className="mb-5 text-base font-semibold text-dark-card-foreground">
                Matching de Candidatos
              </div>
              <div className="flex items-center gap-6">
                <div className="relative h-32 w-32 shrink-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(340 90% 60%)" strokeWidth="8"
                      strokeDasharray={`${0.89 * 264} 264`} strokeLinecap="round" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="hsl(82 78% 55%)" strokeWidth="8"
                      strokeDasharray={`${0.88 * 201} 201`} strokeLinecap="round" />
                    <circle cx="50" cy="50" r="22" fill="none" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="22" fill="none" stroke="hsl(195 85% 55%)" strokeWidth="8"
                      strokeDasharray={`${0.86 * 138} 138`} strokeLinecap="round" />
                  </svg>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="text-[13px] uppercase tracking-wider text-dark-card-foreground/50">Técnico</div>
                    <div><span className="text-xl font-bold text-rose-400">89</span><span className="text-rose-400/70">%</span></div>
                  </div>
                  <div>
                    <div className="text-[13px] uppercase tracking-wider text-dark-card-foreground/50">Comportamental</div>
                    <div><span className="text-xl font-bold text-lime-400">88</span><span className="text-lime-400/70">%</span></div>
                  </div>
                  <div>
                    <div className="text-[13px] uppercase tracking-wider text-dark-card-foreground/50">Cultural</div>
                    <div><span className="text-xl font-bold text-sky-400">86</span><span className="text-sky-400/70">%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
