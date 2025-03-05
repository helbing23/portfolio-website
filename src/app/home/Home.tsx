import Container from "@/components/ui/Container";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProjectSection from "@/components/projects/ProjectSection";
import RecommendationsSection from "@/components/recommendations/RecommendationsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <Container as="div">     
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectSection />
        <RecommendationsSection />
        <ContactSection />
    </Container>
  );
}