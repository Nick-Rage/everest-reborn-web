
import { Button } from "@/components/ui/button";
import { Target, Brain, Zap } from "lucide-react";

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
    <section className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Diagonal geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white transform -skew-x-12"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-200 transform skew-x-12"></div>
        <div className="absolute top-20 right-20 w-64 h-32 bg-blue-600 transform rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-gray-900 underline">
          Everest AI Ventures
        </div>
        <div className="flex items-center gap-8">
          <a href="https://ariagen.ai/" className="text-gray-700 underline">Aria AI</a>
          <a href="#" className="text-gray-700 underline">Basecamp</a>
          <a href="#" className="text-gray-700 underline">Advisory</a>
          <Button 
            onClick={scrollToBottom}
            className="bg-slate-900 text-white px-6 py-2 rounded-none"
          >
            Join Us
          </Button>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                PARTNER WITH US TO CREATE
                <br />
                <span className="block">MARKET DEFINING VENTURES</span>
              </h1>
              
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Reimagining industries
                </h2>
                
                {/* AI/AGI circular element */}
                <div className="relative w-80 h-32 mb-8">
                  <div className="absolute left-0 top-0 w-32 h-32 bg-blue-600 rounded-full opacity-80"></div>
                  <div className="absolute left-8 top-2 w-28 h-28 bg-blue-500 rounded-full opacity-90 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* AI badge */}
                  <div className="absolute left-0 top-0 bg-slate-900 rounded-full px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Target className="w-3 h-3 text-white" />
                      <span className="text-white font-semibold text-sm">AI</span>
                    </div>
                  </div>
                  
                  {/* AGI badge */}
                  <div className="absolute left-4 bottom-0 bg-slate-900 rounded-full px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-white" />
                      <span className="text-white font-semibold text-sm">AGI</span>
                    </div>
                  </div>
                  
                  <div className="absolute left-40 top-8 text-3xl font-bold text-gray-900">
                    w/ unstoppable <span className="font-light italic">intelligence</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                from groundbreaking innovations to sustainable human-aligned solutions
              </p>
              
              <Button 
                size="lg" 
                onClick={scrollToNext}
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold tracking-wider rounded-none"
              >
                LEARN MORE
              </Button>
            </div>
            
            {/* Right side - geometric shapes */}
            <div className="relative h-96">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 transform rotate-45 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600 transform -rotate-12 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
