import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BridalSection from "@/components/BridalSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
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
    </>
  );
}
