import Hero from "@/components/harpio/Hero";
import InnovationJourney from "@/components/harpio/InnovationJourney";
import Ecosystem from "@/components/harpio/Ecosystem";
import MarketReading from "@/components/harpio/MarketReading";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <InnovationJourney />
      <Ecosystem />
      <MarketReading />
      {/* Próximas seções serão adicionadas aqui em sequência */}
    </main>
  );
};

export default Index;
