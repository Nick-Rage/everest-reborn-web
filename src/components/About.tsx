
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToNext = () => {
    const industrySection = document.getElementById('industry');
    if (industrySection) {
      industrySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
          
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12">
            <p>
              At Everest we seek entrepreneurs, domain experts and companies who share a fierce vision to redefine what's possible
            </p>
            
            <p>
              We are crossing the chasm of scarcity to abundance, physical to digital- igniting a revolution where human ambition and machine intelligence is transforming the limits of the old world into a new frontier of infinite possibility
            </p>
            
            <p>
              It's time to reimagine every function, role and industry to develop groundbreaking innovations to building sustainable human-centric solutions. We believe that the convergence of human creativity with the ultimate machine intelligence will accelerate progress for all
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
