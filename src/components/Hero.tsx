
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
    <section className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Main geometric design matching the uploaded diamond pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          {/* Large blue diamond */}
          <div className="absolute top-0 left-16 w-64 h-64 bg-blue-600 transform rotate-45 rounded-3xl"></div>
          {/* Medium cyan diamond overlapping */}
          <div className="absolute top-12 right-0 w-48 h-48 bg-cyan-400 transform rotate-45 rounded-2xl opacity-90"></div>
          {/* Small light blue diamond */}
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-blue-300 transform rotate-45 rounded-xl opacity-80"></div>
          {/* Dark navy diamond */}
          <div className="absolute bottom-0 right-16 w-40 h-40 bg-slate-800 transform rotate-45 rounded-2xl"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-gray-900">
          Everest AI Ventures
        </div>
        <div className="flex items-center gap-8">
          <a href="https://ariagen.ai/" className="text-gray-700 hover:text-blue-600">Aria AI</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Basecamp</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Advisory</a>
          <Button 
            onClick={scrollToBottom}
            className="bg-slate-900 text-white px-6 py-2 rounded-full"
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
                
                {/* AI/AGI element matching the uploaded design */}
                <div className="relative w-80 h-32 mb-8">
                  <div className="absolute left-0 top-0 w-64 h-20 bg-blue-600 rounded-full opacity-80 flex items-center px-6">
                    <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-sm">AI</span>
                    </div>
                    <span className="text-white font-bold text-lg ml-4">Artificial Intelligence</span>
                  </div>
                  
                  <div className="absolute left-16 bottom-0 w-64 h-20 bg-purple-600 rounded-full opacity-80 flex items-center px-6">
                    <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-sm">AGI</span>
                    </div>
                    <span className="text-white font-bold text-lg ml-4">Artificial General Intelligence</span>
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
            
            {/* Right side - empty to let background show */}
            <div className="relative h-96"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
