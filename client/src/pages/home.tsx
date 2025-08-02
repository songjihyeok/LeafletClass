import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { CurriculumSection } from "@/components/home/CurriculumSection";
import { InstructorSection } from "@/components/home/InstructorSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { PricingSection } from "@/components/home/PricingSection";
import { RegistrationForm } from "@/components/home/RegistrationForm";
import { ScheduleInfo } from "@/components/home/ScheduleInfo";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onScrollToRegistration={scrollToRegistration} />

      <HeroSection onScrollToRegistration={scrollToRegistration} />

      <CurriculumSection />

      <InstructorSection />

      <PortfolioSection />

      <PricingSection onScrollToRegistration={scrollToRegistration} />

      <RegistrationForm />

      <ScheduleInfo />

      <FAQSection />

      <ContactSection onScrollToRegistration={scrollToRegistration} />

      <Footer />
    </div>
  );
}
