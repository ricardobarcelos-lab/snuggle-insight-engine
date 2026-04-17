const steps = [
  { when: "Semana 1", what: "Kickoff + alinhamento estratégico" },
  { when: "Semana 2-3", what: "Hunting e entrevistas iniciais" },
  { when: "Semana 4", what: "Apresentação de shortlist" },
];

const Timeline = () => {
  return (
    <section className="container max-w-[1200px] px-5 py-20">
      <h2 className="mb-8 text-3xl md:text-4xl">Timeline do Processo</h2>
      <div className="relative border-l-2 border-border-subtle pl-6">
        {steps.map((s, i) => (
          <div key={s.when} className={i !== steps.length - 1 ? "mb-8" : ""}>
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-primary shadow-glow ring-4 ring-background" />
            <strong className="block text-sm uppercase tracking-widest text-primary">
              {s.when}
            </strong>
            <p className="mt-1 text-base text-foreground/90">{s.what}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
