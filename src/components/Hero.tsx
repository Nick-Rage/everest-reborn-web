
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

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
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 transform rotate-45 rounded-3xl opacity-10"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-500 to-blue-700 transform -rotate-45 rounded-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Modern Geometric Design */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main geometric composition */}
                <div className="relative w-80 h-80">
                  {/* Background geometric shapes */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 transform rotate-12 rounded-3xl opacity-20"></div>
                  <div className="absolute top-8 left-8 w-64 h-64 bg-gradient-to-br from-indigo-500 to-blue-700 transform -rotate-6 rounded-2xl"></div>
                  
                  {/* Central AI/AGI circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-gray-700">AGI</div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl opacity-80"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg opacity-70"></div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Links and Main Content */}
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
                  <div className="text-xl text-gray-600 mb-4">AI & AGI Ecosystem</div>
                  <div className="relative w-full h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg overflow-hidden">
                    {/* Geometric pattern background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-blue-600 transform rotate-45 rounded-lg opacity-20"></div>
                        <div className="absolute top-2 left-2 w-16 h-16 bg-indigo-500 transform -rotate-12 rounded-lg opacity-30"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 bg-purple-500 transform rotate-6 rounded-lg opacity-40"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-700 font-semibold">Intelligence Convergence</span>
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
