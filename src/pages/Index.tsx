
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industry from "@/components/Industry";
import Team from "@/components/Team";
import Ecosystem from "@/components/Ecosystem";
import Focus from "@/components/Focus";
import Basecamp from "@/components/Basecamp";
import GetStarted from "@/components/GetStarted";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Focus />
      <Industry />
      <Team />
      <Ecosystem />
      <Basecamp />
      <GetStarted />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
