
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToNext = () => {
    const industrySection = document.getElementById('industry');
    if (industrySection) {
      industrySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 transform rotate-45 translate-x-32 -translate-y-32 rounded-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-100 to-blue-100 transform -rotate-12 -translate-x-24 translate-y-24 rounded-2xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
          
          {/* Visual separator with geometric design */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          
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
