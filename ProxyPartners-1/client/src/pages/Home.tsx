import { Helmet } from 'react-helmet';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PY-Partners - Internet Freedom Solution</title>
        <meta name="description" content="PY-Partners provides seamless internet access without boundaries. Navigate freely with our advanced proxy solution." />
        <meta property="og:title" content="PY-Partners - Internet Freedom Solution" />
        <meta property="og:description" content="Access the global internet freely with PY-Partners advanced proxy solution." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <GetStartedSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
