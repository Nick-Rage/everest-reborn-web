
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Heart, DollarSign, Shield, Zap, Globe } from "lucide-react";

const Industry = () => {
  const industries = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Investing in foundational AI technologies, machine learning platforms, and domain-specific AI solutions that are reshaping industries.",
      examples: ["Computer Vision", "Natural Language Processing", "Predictive Analytics", "Autonomous Systems"]
    },
    {
      icon: DollarSign,
      title: "Fintech",
      description: "Supporting innovative financial services companies that are democratizing access to financial tools and creating new economic opportunities.",
      examples: ["Digital Banking", "Payment Solutions", "Blockchain Technology", "Investment Platforms"]
    },
    {
      icon: Heart,
      title: "Healthcare Technology",
      description: "Backing companies that are improving patient outcomes, reducing healthcare costs, and making medical care more accessible.",
      examples: ["Digital Health", "Medical Devices", "Telemedicine", "Health Analytics"]
    },
    {
      icon: Zap,
      title: "Enterprise Software",
      description: "Investing in B2B software solutions that help businesses operate more efficiently and effectively in the digital age.",
      examples: ["SaaS Platforms", "Workflow Automation", "Data Analytics", "Collaboration Tools"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Supporting companies that protect digital infrastructure and data in an increasingly connected world.",
      examples: ["Threat Detection", "Identity Management", "Cloud Security", "Privacy Protection"]
    },
    {
      icon: Globe,
      title: "Climate Technology",
      description: "Backing innovative solutions that address climate change and promote environmental sustainability.",
      examples: ["Clean Energy", "Carbon Capture", "Sustainable Materials", "Smart Grid Technology"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industry Focus</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We invest in transformative technologies across key sectors that are shaping the future of business and society.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl flex-shrink-0">
                    <industry.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.examples.map((example, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Investment Criteria</h2>
            <p className="text-xl text-gray-600">
              What we look for in potential investments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stage</h3>
              <p className="text-gray-600">Series A and B companies with proven product-market fit and scalable business models.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Size</h3>
              <p className="text-gray-600">Large addressable markets with significant growth potential and room for disruption.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team</h3>
              <p className="text-gray-600">Exceptional founding teams with deep domain expertise and proven execution ability.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industry;
