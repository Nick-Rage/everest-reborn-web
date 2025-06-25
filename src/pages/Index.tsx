
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import Basecamp from "@/components/Basecamp";
import Industry from "@/components/Industry";
import GetStarted from "@/components/GetStarted";
import About from "@/components/About";
import Team from "@/components/Team";
import Ecosystem from "@/components/Ecosystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Focus />
      <Basecamp />
      <Industry />
      <GetStarted />
      <About />
      <Team />
      <Ecosystem />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
