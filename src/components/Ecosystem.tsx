
import { Button } from "@/components/ui/button";

const Ecosystem = () => {
  const scrollToNext = () => {
    const focusSection = document.getElementById('focus');
    if (focusSection) {
      focusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ecosystemItems = [
    { name: "Foundational Domain specific AGI", url: "https://ariagen.ai/#technology" },
    { name: "Advanced Teammates", url: "https://ariagen.ai/#teammates-platform" },
    { name: "Integrated Middleware", url: "https://ariagen.ai/#features" },
    { name: "Basecamp", url: "https://everestvc.ai/#page-8" },
    { name: "Advisory", url: "https://everestvc.ai/#page-8" },
    { name: "Operations", url: "https://everestvc.ai/#page-7" },
    { name: "Technology", url: "https://ariagen.ai/#capabilities" },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 transform rotate-45 rounded-2xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-500 to-blue-700 transform -rotate-12 rounded-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Ecosystem
          </h2>
          
          {/* Modern geometric visual element */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              {/* Main geometric composition */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 transform rotate-12 rounded-xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 transform -rotate-6 rounded-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 transform rotate-45 rounded-xl"></div>
              </div>
              
              {/* Connecting lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 transform -translate-y-1/2"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ecosystemItems.map((item, index) => (
              <div key={index} className="group relative">
                {/* Geometric background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 transform rotate-1 rounded-lg opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                
                <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
                  {/* Small geometric accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
                  
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
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
