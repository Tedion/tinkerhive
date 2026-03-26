import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Showcase from "@/components/Showcase";
import CloudProviders from "@/components/CloudProviders";
import PrivateCloud from "@/components/PrivateCloud";
import DevOpsSection from "@/components/DevOpsSection";
import SecuritySection from "@/components/SecuritySection";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Showcase />
        <CloudProviders />
        <PrivateCloud />
        <DevOpsSection />
        <SecuritySection />
        <HowItWorks />
        <About />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
