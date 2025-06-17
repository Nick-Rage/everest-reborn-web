
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Globe } from "lucide-react";

const Focus = () => {
  const focusAreas = [
    {
      icon: Users,
      title: "Build with Founders",
      description: "We are serial entrepreneurs, industry leaders, investors, and specialists with deep expertise in building each aspect of a venture, and who have started billion-dollar companies. We are back to our root following our true north: solve the greatest challenges by transforming industries that make a difference"
    },
    {
      icon: Target,
      title: "Team of Experts",
      description: "Our team of experienced operators and investors partner with entrepreneurs and domain experts to build transformative companies. Our resources, playbooks, technology & solutions, operations systems, and capital-efficient formula minimize risk, accelerate time to market and maximize opportunities of success in the company building process"
    },
    {
      icon: Globe,
      title: "Industry Agnostic",
      description: "From finance to healthcare to industrial segments, we've struggled to stand by and watch voids go unfilled and opportunities get overlooked. We partner with domain experts to tackle problems and reimagine industry verticals with AI"
    }
  ];

  const scrollToNext = () => {
    const getStartedSection = document.getElementById('get-started');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="focus" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We partner with founders and domain experts to build and scale enterprise AI ventures to transform industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {focusAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <area.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
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

export default Focus;
