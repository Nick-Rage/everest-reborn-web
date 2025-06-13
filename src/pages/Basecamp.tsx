
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Rocket, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Basecamp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Basecamp</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your strategic foundation for building and scaling transformative technology companies. 
              Basecamp provides the essential resources, guidance, and network you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* What is Basecamp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Strategic Foundation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Basecamp is Everest VC's comprehensive platform designed to provide portfolio companies 
                  with the strategic foundation they need to scale successfully. We believe that great 
                  companies are built on strong foundations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our platform approach combines capital, expertise, and resources to accelerate your 
                  growth trajectory and help you navigate the challenges of building a transformative company.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Basecamp
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
                <Target className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Focus</h3>
                <p className="text-gray-600">
                  Building the foundation for sustainable growth and market leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Components</h2>
            <p className="text-xl text-gray-600">
              The essential elements that make up your strategic foundation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Comprehensive market analysis, competitive positioning, and long-term strategic roadmapping to guide your growth."
              },
              {
                icon: Users,
                title: "Team Building",
                description: "Access to our extensive network of top-tier talent and executive recruitment partners to build world-class teams."
              },
              {
                icon: Lightbulb,
                title: "Product Strategy",
                description: "Product development guidance, user experience optimization, and go-to-market strategy development."
              },
              {
                icon: Rocket,
                title: "Growth Acceleration",
                description: "Sales enablement, marketing strategy, and business development support to accelerate your growth."
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Legal support, compliance guidance, and risk assessment to protect and strengthen your business."
              },
              {
                icon: Globe,
                title: "Market Expansion",
                description: "International expansion support and global market entry strategies for scaling worldwide."
              }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                  <component.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Basecamp?</h2>
            <p className="text-xl text-gray-600">
              The advantages of building on a strong strategic foundation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Time to Market</h3>
                  <p className="text-gray-600">Accelerate your product development and market entry with proven frameworks and processes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduced Risk</h3>
                  <p className="text-gray-600">Minimize common startup pitfalls with expert guidance and proven best practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Credibility</h3>
                  <p className="text-gray-600">Build trust with customers, partners, and future investors through strategic positioning.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Growth</h3>
                  <p className="text-gray-600">Build systems and processes that scale with your business for sustainable growth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Network Access</h3>
                  <p className="text-gray-600">Leverage our extensive network of industry experts, partners, and potential customers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Continuous guidance and support throughout your growth journey and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Foundation?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join the portfolio companies that have built their success on Basecamp's strategic foundation.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Get Started with Basecamp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Basecamp;
