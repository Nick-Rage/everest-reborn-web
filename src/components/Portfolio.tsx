
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, TrendingUp, Shield } from "lucide-react";

const Portfolio = () => {
  const companies = [
    {
      name: "TechFlow AI",
      sector: "Artificial Intelligence",
      description: "Revolutionary AI platform for enterprise automation and decision-making.",
      stage: "Series B",
      icon: TrendingUp,
      website: "#"
    },
    {
      name: "HealthTech Solutions",
      sector: "Healthcare Technology",
      description: "Digital health platform improving patient outcomes through data analytics.",
      stage: "Series A",
      icon: Shield,
      website: "#"
    },
    {
      name: "GreenEnergy Systems",
      sector: "Clean Technology",
      description: "Next-generation solar technology with 40% higher efficiency rates.",
      stage: "Seed",
      icon: Award,
      website: "#"
    }
  ];

  const sectors = [
    { name: "Artificial Intelligence", count: "25 companies", color: "bg-blue-500" },
    { name: "Healthcare Technology", count: "18 companies", color: "bg-green-500" },
    { name: "Fintech", count: "22 companies", color: "bg-purple-500" },
    { name: "Clean Technology", count: "15 companies", color: "bg-emerald-500" },
    { name: "Enterprise Software", count: "30 companies", color: "bg-orange-500" },
    { name: "Consumer Technology", count: "20 companies", color: "bg-pink-500" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're proud to partner with innovative companies across multiple sectors, 
            helping them scale and achieve extraordinary outcomes.
          </p>
        </div>

        {/* Featured Companies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <company.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {company.stage}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{company.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{company.sector}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{company.description}</p>
                
                <a 
                  href={company.website}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sector Breakdown */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Investment Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className={`w-4 h-4 ${sector.color} rounded-full mr-4`}></div>
                <div>
                  <div className="font-semibold text-slate-900">{sector.name}</div>
                  <div className="text-sm text-gray-600">{sector.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
