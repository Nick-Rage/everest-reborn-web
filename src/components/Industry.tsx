
import { Button } from "@/components/ui/button";
import { Heart, Building2, Factory, Zap, TrendingUp, Shield } from "lucide-react";

const Industry = () => {
  const scrollToNext = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    { name: "Healthcare", icon: Heart, color: "bg-red-500" },
    { name: "Finance", icon: TrendingUp, color: "bg-green-500" },
    { name: "Manufacturing", icon: Factory, color: "bg-blue-500" },
    { name: "Energy", icon: Zap, color: "bg-yellow-500" },
    { name: "Real Estate", icon: Building2, color: "bg-purple-500" },
    { name: "Security", icon: Shield, color: "bg-indigo-500" },
  ];

  return (
    <section id="industry" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Industry
          </h2>
          
          {/* Modern industry visualization */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
              {/* Industry grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center mb-4`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div className={`${industry.color} h-2 rounded-full`} style={{width: `${60 + (index * 8)}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Central connection hub */}
              <div className="flex justify-center">
                <div className="bg-blue-600 rounded-2xl px-8 py-4 text-white font-semibold shadow-lg">
                  AI-Powered Transformation
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From healthcare to finance, manufacturing to energy - we're transforming industries with AI-powered solutions that drive innovation and create sustainable value.
            </p>
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
