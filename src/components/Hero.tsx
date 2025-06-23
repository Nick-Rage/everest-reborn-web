import { Button } from "@/components/ui/button";
import { TrendingUp, Brain, Zap, Target } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Exact graphic recreation */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-96 h-96">
                {/* Dark background with texture */}
                <div className="absolute inset-0 bg-gray-800 rounded-3xl">
                  {/* Dotted pattern overlay - exact recreation */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-12 gap-2 p-8 h-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Blue geometric rectangle - exact positioning */}
                  <div className="absolute bottom-0 left-0 w-48 h-32 bg-blue-600 transform rotate-12 rounded-2xl"></div>
                  
                  {/* White circular element with text */}
                  <div className="absolute bottom-8 left-8 bg-white rounded-full px-8 py-4 shadow-lg">
                    <span className="text-gray-800 font-semibold text-lg">Partner with us</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Main Content */}
            <div>
              <div className="flex justify-end gap-6 mb-12">
                <a 
                  href="https://ariagen.ai/" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  Aria AI
                </a>
                <Button 
                  variant="outline" 
                  onClick={scrollToBottom}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Get Started
                </Button>
              </div>
              
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Partner with us to create 
                  <span className="text-blue-600 block">market defining ventures</span>
                </h1>
                
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                  Reimagining industries
                </h2>
                
                <div className="mb-8">
                  <div className="text-xl text-gray-600 mb-4">w/ unstoppable intelligence</div>
                  {/* Modern card design */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">AI & AGI Ecosystem</div>
                          <div className="text-sm text-gray-500">Intelligent Solutions</div>
                        </div>
                      </div>
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  from groundbreaking innovations to sustainable human-aligned solutions
                </p>
                
                <Button 
                  size="lg" 
                  onClick={scrollToNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
