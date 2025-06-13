
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, TrendingUp, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Advisory Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert guidance and strategic mentorship to help portfolio companies navigate complex challenges 
              and unlock their full growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Strategic Guidance When You Need It Most
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our advisory services provide portfolio companies with access to seasoned executives, 
                  industry experts, and strategic advisors who have successfully navigated similar challenges 
                  and scaled companies to market leadership positions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're facing strategic decisions, operational challenges, or looking to accelerate 
                  growth, our advisory network provides the expertise and guidance you need to succeed.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Connect with Advisors
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
                <Users className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Network</h3>
                <p className="text-gray-600">
                  Access to 200+ industry experts and successful entrepreneurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advisory Focus Areas</h2>
            <p className="text-xl text-gray-600">
              Comprehensive guidance across all aspects of building and scaling your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Long-term strategic roadmapping, market positioning, and competitive strategy development.",
                areas: ["Market Analysis", "Competitive Intelligence", "Strategic Roadmapping", "Business Model Optimization"]
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                description: "Sales and marketing strategies, customer acquisition, and revenue optimization guidance.",
                areas: ["Go-to-Market Strategy", "Sales Enablement", "Customer Success", "Revenue Operations"]
              },
              {
                icon: Users,
                title: "Leadership Development",
                description: "Executive coaching, team building, and organizational development support.",
                areas: ["Executive Coaching", "Team Building", "Culture Development", "Leadership Training"]
              },
              {
                icon: Lightbulb,
                title: "Product Strategy",
                description: "Product development guidance, user experience optimization, and innovation strategies.",
                areas: ["Product Roadmapping", "User Research", "Design Strategy", "Innovation Processes"]
              },
              {
                icon: Shield,
                title: "Operational Excellence",
                description: "Process optimization, quality management, and operational efficiency improvements.",
                areas: ["Process Optimization", "Quality Systems", "Supply Chain", "Performance Management"]
              },
              {
                icon: Globe,
                title: "Global Expansion",
                description: "International market entry strategies and global scaling guidance.",
                areas: ["Market Entry", "Localization", "Regulatory Compliance", "Partnership Development"]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                  <area.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.areas.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Advisor Network</h2>
            <p className="text-xl text-gray-600">
              Industry veterans and successful entrepreneurs who provide strategic guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "Technology Leaders",
                description: "Former CTOs and engineering leaders from top tech companies",
                count: "50+"
              },
              {
                category: "Industry Experts",
                description: "Domain specialists across AI, fintech, healthcare, and enterprise",
                count: "80+"
              },
              {
                category: "Successful Founders",
                description: "Entrepreneurs who have built and scaled successful companies",
                count: "70+"
              },
              {
                category: "Operations Leaders",
                description: "Former COOs and operational executives from high-growth companies",
                count: "40+"
              },
              {
                category: "Sales & Marketing",
                description: "Go-to-market experts and revenue leaders",
                count: "60+"
              },
              {
                category: "Financial Experts",
                description: "CFOs, investment bankers, and financial strategy advisors",
                count: "30+"
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{category.count}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Advisory Works</h2>
            <p className="text-xl text-gray-600">
              A structured approach to connecting you with the right expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We assess your specific challenges and strategic objectives"
              },
              {
                step: "02",
                title: "Matching",
                description: "Connect you with advisors who have relevant expertise and experience"
              },
              {
                step: "03",
                title: "Engagement",
                description: "Structured advisory sessions and ongoing strategic guidance"
              },
              {
                step: "04",
                title: "Execution",
                description: "Support implementation of strategic recommendations and best practices"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access Expert Guidance?</h2>
            <p className="text-xl opacity-90 mb-8">
              Connect with our network of experienced advisors and accelerate your growth.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Request Advisory Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advisory;
