import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import BridalSection from "@/components/BridalSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pb-16 md:pb-0" id="home">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <BridalSection />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Contact />
        <Map />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
