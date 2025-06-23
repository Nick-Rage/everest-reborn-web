
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
    <section 
      className="relative pt-20 pb-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/lovable-uploads/0b0d02be-a3d5-4cce-a39a-7510103757b0.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - AI/AGI Visual */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Modern AI/AGI composition inspired by the uploaded design */}
                <div className="relative w-80 h-80">
                  {/* Background geometric shapes */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 transform rotate-12 rounded-3xl opacity-20"></div>
                  <div className="absolute top-8 left-8 w-64 h-64 bg-gradient-to-br from-indigo-500 to-blue-700 transform -rotate-6 rounded-2xl"></div>
                  
                  {/* Central AI circle with unstoppable intelligence theme */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-gray-700">AI</div>
                      <div className="text-xs font-bold text-gray-700">AGI</div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl opacity-80"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg opacity-70"></div>
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
                  <div className="relative w-full h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-700 font-semibold">AI & AGI Ecosystem</span>
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
