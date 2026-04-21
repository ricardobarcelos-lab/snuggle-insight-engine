import wordmark from "@/assets/harpio-wordmark.svg?react";

const HarpioLogo = ({ className }: { className?: string }) => {
  const Wordmark = wordmark as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
  return (
    <Wordmark
      aria-label="harpiö"
      role="img"
      className={`h-8 w-auto text-foreground ${className ?? ""}`}
    />
  );
};

export default HarpioLogo;
