const Hero = () => {
  return (
    <section className="bg-gradient-hero px-5 py-20 md:py-28">
      <div className="container max-w-[1200px]">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Harpio · Talent is Strategy
        </div>
        <h1 className="mb-5 text-4xl leading-tight md:text-5xl lg:text-6xl">
          Proposta Estratégica
          <br />
          de Talentos
        </h1>
        <p className="max-w-2xl text-base opacity-80 md:text-lg">
          A Harpio não recruta pessoas. Arquitetamos vantagem competitiva via capital humano.
          Aqui está o blueprint de como sua empresa escala com precisão cirúrgica.
        </p>
      </div>
    </section>
  );
};

export default Hero;
