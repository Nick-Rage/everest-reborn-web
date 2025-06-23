
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
            {/* Left Content - Modern AI/AGI Visual */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-96 h-96">
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 gap-2 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="bg-blue-600 rounded-sm"></div>
                    ))}
                  </div>
                </div>
                
                {/* Main geometric composition */}
                <div className="absolute inset-0">
                  {/* Large blue rectangle */}
                  <div className="absolute top-8 left-8 w-48 h-32 bg-blue-600 rounded-xl shadow-lg"></div>
                  
                  {/* Smaller overlapping shapes */}
                  <div className="absolute top-16 right-8 w-32 h-32 bg-indigo-500 rounded-2xl shadow-md transform rotate-12"></div>
                  <div className="absolute bottom-16 left-16 w-24 h-24 bg-purple-500 rounded-xl shadow-md transform -rotate-6"></div>
                  
                  {/* Central AI hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-200">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Floating connection nodes */}
                  <div className="absolute top-12 left-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-12 right-12 w-6 h-6 bg-indigo-400 rounded-full"></div>
                  <div className="absolute top-1/3 right-4 w-3 h-3 bg-purple-400 rounded-full"></div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                    <path d="M50 50 Q200 100 350 150" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M100 300 Q200 200 300 100" stroke="#6366F1" strokeWidth="2" fill="none" opacity="0.3"/>
                  </svg>
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
