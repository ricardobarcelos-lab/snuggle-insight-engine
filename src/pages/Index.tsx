import Hero from "@/components/harpio/Hero";
import ValueProps from "@/components/harpio/ValueProps";
import Deliverables from "@/components/harpio/Deliverables";
import Scorecard from "@/components/harpio/Scorecard";
import CompetencyRadar from "@/components/harpio/CompetencyRadar";
import Timeline from "@/components/harpio/Timeline";
import Investment from "@/components/harpio/Investment";
import Footer from "@/components/harpio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ValueProps />
      <Deliverables />
      <Scorecard />
      <CompetencyRadar />
      <Timeline />
      <Investment />
      <Footer />
    </main>
  );
};

export default Index;
