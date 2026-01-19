import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import LabSection from "@/components/LabSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <LabSection />
      <Footer />
    </main>
  );
};

export default Index;