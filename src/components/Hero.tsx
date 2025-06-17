
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white" />
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
                  <div className="text-xl text-gray-600 mb-4">AI & AGI in a graphic</div>
                  <div className="w-full h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">AI & AGI Visualization</span>
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
