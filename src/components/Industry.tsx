
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Industry = () => {
  const industries = [
    {
      name: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Transforming patient care with AI-driven solutions"
    },
    {
      name: "Finance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Revolutionizing financial services and trading"
    },
    {
      name: "Manufacturing",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
      description: "Smart automation and predictive maintenance"
    },
    {
      name: "Energy",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      description: "Sustainable energy solutions and grid optimization"
    },
    {
      name: "Transportation",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      description: "Autonomous systems and logistics optimization"
    },
    {
      name: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      description: "Personalized learning and educational technology"
    },
    {
      name: "Agriculture",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      description: "Precision farming and crop optimization"
    },
    {
      name: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "Customer experience and supply chain innovation"
    }
  ];

  const scrollToNext = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industry" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Industry
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </CardContent>
              </Card>
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

export default Industry;
