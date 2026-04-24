const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        background:
          "linear-gradient(135deg, hsl(262 83% 48%) 0%, hsl(280 90% 65%) 60%, hsl(290 95% 80%) 100%)",
      }}
    >
      <div className="container mx-auto px-6 py-10 flex flex-col items-center gap-3 text-center">
        <p className="text-sm md:text-base font-medium opacity-95">
          Conheça todos os produtos e serviços Harpio
        </p>
        <a
          href="https://www.harpio.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl font-semibold underline-offset-4 hover:underline transition-all"
        >
          Explore em www.harpio.com.br
        </a>
        <p className="text-xs opacity-75 mt-4">
          © {new Date().getFullYear()} Harpio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;