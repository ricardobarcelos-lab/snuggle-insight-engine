import Hero from "@/components/harpio/Hero";
import InnovationJourney from "@/components/harpio/InnovationJourney";
import Ecosystem from "@/components/harpio/Ecosystem";
import MarketReading from "@/components/harpio/MarketReading";
import Services from "@/components/harpio/Services";
import Technology from "@/components/harpio/Technology";
import Investment from "@/components/harpio/Investment";
import Simulator from "@/components/harpio/Simulator";
import CreditPackages from "@/components/harpio/CreditPackages";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <InnovationJourney />
      <Ecosystem />
      <MarketReading />
      <Services />
      <Technology />
      <Investment />
      <Simulator />
      <CreditPackages />
    </main>
  );
};

export default Index;
