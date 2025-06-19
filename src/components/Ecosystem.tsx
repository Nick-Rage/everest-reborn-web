
import { Button } from "@/components/ui/button";
import { Brain, Users, Layers, Mountain, MessageCircle, Settings, Cpu } from "lucide-react";

const Ecosystem = () => {
  const scrollToNext = () => {
    const focusSection = document.getElementById('focus');
    if (focusSection) {
      focusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ecosystemItems = [
    { 
      name: "FOUNDATIONAL", 
      subtitle: "DOMAIN-SPECIFIC AGI", 
      url: "https://ariagen.ai/#technology",
      icon: Brain
    },
    { 
      name: "ADVANCED", 
      subtitle: "TEAMMATES", 
      url: "https://ariagen.ai/#teammates-platform",
      icon: Users
    },
    { 
      name: "INTEGRATED", 
      subtitle: "MIDDLEWARE", 
      url: "https://ariagen.ai/#features",
      icon: Layers
    },
    { 
      name: "BASECAMP", 
      subtitle: "", 
      url: "https://everestvc.ai/#page-8",
      icon: Mountain
    },
    { 
      name: "ADVISORY", 
      subtitle: "", 
      url: "https://everestvc.ai/#page-8",
      icon: MessageCircle
    },
    { 
      name: "OPERATIONS", 
      subtitle: "", 
      url: "https://everestvc.ai/#page-7",
      icon: Settings
    },
    { 
      name: "TECHNOLOGY", 
      subtitle: "", 
      url: "https://ariagen.ai/#capabilities",
      icon: Cpu
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Ecosystem
          </h2>
          
          {/* Left side - Build with us card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                {/* Dark textured background */}
                <div className="w-80 h-80 bg-gray-800 rounded-3xl relative overflow-hidden">
                  {/* Dotted pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-12 gap-2 p-8 h-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Blue geometric shape */}
                  <div className="absolute bottom-0 left-0 w-48 h-32 bg-blue-600 transform rotate-12 rounded-2xl"></div>
                  
                  {/* "Build with us" card */}
                  <div className="absolute bottom-8 left-8 bg-white rounded-full px-8 py-4 shadow-lg">
                    <span className="text-gray-800 font-semibold text-lg">Build with us</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Ecosystem items */}
            <div className="space-y-4">
              {/* First row */}
              <div className="flex flex-wrap gap-4 justify-start">
                {ecosystemItems.slice(0, 2).map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white rounded-full border-2 border-gray-300 hover:border-blue-400 transition-all duration-300 px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md">
                      <item.icon className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-bold text-gray-900 text-sm leading-tight">{item.name}</div>
                        {item.subtitle && (
                          <div className="font-bold text-gray-900 text-sm leading-tight">{item.subtitle}</div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Second row */}
              <div className="flex flex-wrap gap-4 justify-center">
                {ecosystemItems.slice(2, 4).map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white rounded-full border-2 border-gray-300 hover:border-blue-400 transition-all duration-300 px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md">
                      <item.icon className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-bold text-gray-900 text-sm leading-tight">{item.name}</div>
                        {item.subtitle && (
                          <div className="font-bold text-gray-900 text-sm leading-tight">{item.subtitle}</div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Third row */}
              <div className="flex flex-wrap gap-4 justify-end">
                {ecosystemItems.slice(4).map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white rounded-full border-2 border-gray-300 hover:border-blue-400 transition-all duration-300 px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md">
                      <item.icon className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-bold text-gray-900 text-sm leading-tight">{item.name}</div>
                        {item.subtitle && (
                          <div className="font-bold text-gray-900 text-sm leading-tight">{item.subtitle}</div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
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
    </section>
  );
};

export default Ecosystem;
