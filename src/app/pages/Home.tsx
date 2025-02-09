import Container from "@/app/components/ui/Container";
import HeroSection from "@/app/components/hero/HeroSection";
import AboutSection from "@/app/components/about/AboutSection";
import ServicesSection from "@/app/components/services/ServicesSection";
import ProjectSection from "@/app/components/projects/ProjectSection";
import RecommendationsSection from "@/app/components/recommendations/RecommendationsSection";
import ContactSection from "@/app/components/contact/ContactSection";

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