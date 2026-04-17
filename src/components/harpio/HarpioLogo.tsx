const HarpioLogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className ?? ""}`}>
    <div className="relative h-7 w-7">
      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-90" />
      <div className="absolute inset-[5px] rounded-full bg-background" />
      <div className="absolute inset-[9px] rounded-full bg-gradient-primary" />
    </div>
    <span className="text-xl font-bold tracking-tight text-foreground">harpio</span>
  </div>
);

export default HarpioLogo;
