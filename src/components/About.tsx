
import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const scrollToNext = () => {
    const industrySection = document.getElementById('industry');
    if (industrySection) {
      industrySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Us
          </h2>
          
          {/* Exact recreation of the about graphic */}
          <div className="flex justify-center mb-12">
            <div className="relative w-80 h-60">
              {/* Dark background */}
              <div className="w-full h-full bg-gray-800 rounded-3xl relative overflow-hidden">
                {/* Dotted pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 gap-2 p-6 h-full">
                    {Array.from({ length: 120 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Blue geometric shape */}
                <div className="absolute bottom-0 right-0 w-32 h-24 bg-blue-600 transform -rotate-12 rounded-2xl"></div>
                
                {/* White text card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-6 py-4 shadow-lg">
                  <span className="text-gray-800 font-semibold">About Us</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual cards for key concepts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Vision</h3>
              <p className="text-gray-300 text-sm">Redefining what's possible through fierce innovation</p>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Revolution</h3>
              <p className="text-gray-300 text-sm">Crossing from scarcity to abundance</p>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Convergence</h3>
              <p className="text-gray-300 text-sm">Human creativity meets machine intelligence</p>
            </div>
          </div>
          
          <div className="space-y-6 text-xl text-gray-200 leading-relaxed mb-12">
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
