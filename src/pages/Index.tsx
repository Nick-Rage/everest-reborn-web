
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industry from "@/components/Industry";
import Team from "@/components/Team";
import Focus from "@/components/Focus";
import GetStarted from "@/components/GetStarted";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Industry />
      <Team />
      <Focus />
      <GetStarted />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
