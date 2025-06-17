
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
    <section id="ecosystem" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ecosystemItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
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
