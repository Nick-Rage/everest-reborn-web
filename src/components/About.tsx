
import { Button } from "@/components/ui/button";
import { Target, Brain, Zap } from "lucide-react";

const About = () => {
  const scrollToNext = () => {
    const industrySection = document.getElementById('industry');
    if (industrySection) {
      industrySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Robot and AI visualization matching uploaded images */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        {/* Futuristic robot silhouette */}
        <div className="absolute left-16 top-1/4 w-32 h-48 opacity-30">
          <div className="w-8 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
          <div className="w-16 h-20 bg-gray-400 rounded-lg mx-auto mb-2"></div>
          <div className="w-6 h-12 bg-gray-300 rounded-full mx-auto"></div>
        </div>
        
        {/* Digital interface elements */}
        <div className="absolute left-32 top-16 w-48 h-32 border border-blue-400 opacity-40 rounded-lg">
          <div className="grid grid-cols-8 gap-1 p-4 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="bg-blue-400 opacity-60 rounded-sm h-2"></div>
            ))}
          </div>
        </div>
        
        {/* Matrix-style code pattern */}
        <div className="absolute right-8 bottom-16 w-40 h-64 opacity-20">
          <div className="grid grid-cols-4 gap-1 text-green-400 text-xs font-mono">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="text-center">
                {Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : Math.floor(Math.random() * 10)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - AI/AGI badges matching uploaded design */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                {/* Large circular background */}
                <div className="absolute left-8 top-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
                
                {/* AI badge positioned like in uploaded image */}
                <div className="absolute left-0 top-8 bg-blue-600 rounded-full px-6 py-3 flex items-center gap-3">
                  <Target className="w-6 h-6 text-white" />
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                
                {/* AGI badge positioned below */}
                <div className="absolute left-4 bottom-16 bg-purple-600 rounded-full px-6 py-3 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-white" />
                  <span className="text-white font-bold text-lg">AGI</span>
                </div>
                
                {/* Central brain icon */}
                <div className="absolute left-20 top-32 w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                At Everest we seek entrepreneurs, domain experts and companies who share a fierce vision to redefine what's possible
              </h2>
              
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  We are crossing the chasm of scarcity to abundance, physical to digital- igniting a revolution where human ambition and machine intelligence is transforming the limits of the old world into a new frontier of infinite possibility
                </p>
                
                <p>
                  It's time to reimagine every function, role and industry to develop groundbreaking innovations to building sustainable human-centric solutions. We believe that the convergence of human creativity with the ultimate machine intelligence will accelerate progress for all
                </p>
              </div>
              
              <div className="mt-12">
                <Button 
                  size="lg" 
                  onClick={scrollToNext}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold tracking-wider"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
