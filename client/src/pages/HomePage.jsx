import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import PerformancesSection from "../components/sections/PerformancesSection";
import PresidentSection from "../components/sections/PresidentSection";
import TeamSection from "../components/sections/TeamSection";
import UpcomingEventSection from "../components/sections/UpcomingEventSection";
import PageShell from "../components/common/PageShell";

function HomePage() {
  return (
    <PageShell>
      <h1 style={{textAlign:"center"}}>DevOps CI/CD Pipeline Working 🚀</h1>
      <HeroSection />
      <AboutSection />
      <PerformancesSection />
      <UpcomingEventSection />
      <PresidentSection />
      <TeamSection />
      <ContactSection />
    </PageShell>
  );
}

export default HomePage;
