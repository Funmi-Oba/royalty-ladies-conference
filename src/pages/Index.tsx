import HeaderNav from "@/components/HeaderNav";
import FallingPetals from "@/components/FallingPetals";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import ConvenerSection from "@/components/ConvenerSection";
import SpeakersSection from "@/components/SpeakersSection";
import FeaturesSection from "@/components/FeaturesSection";
import MerchandiseSection from "@/components/MerchandiseSection";
import PaymentSection from "@/components/PaymentSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPayment = () => {
    const el = document.getElementById('payment');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FallingPetals />
      <HeaderNav />
      <Hero scrollToRegistration={scrollToRegistration} />
      <VisionMission />
      <AboutSection />
      <ConvenerSection />
      <SpeakersSection />
      <FeaturesSection />
      <MerchandiseSection scrollToPayment={scrollToPayment} />
      <PaymentSection />
      <SponsorshipSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;