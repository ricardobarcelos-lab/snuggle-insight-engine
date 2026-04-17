const ClientLogo = ({ name, className }: { name: string; className?: string }) => (
  <div className={`flex items-center gap-2 ${className ?? ""}`}>
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-base font-bold text-white">
      {name.charAt(0).toUpperCase()}
    </div>
    <span className="text-xl font-bold tracking-tight text-foreground">{name}</span>
  </div>
);

export default ClientLogo;
