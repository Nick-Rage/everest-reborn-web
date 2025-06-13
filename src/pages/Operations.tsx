
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Settings, Users, TrendingUp, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Operations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Operations Excellence</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive operational support to help portfolio companies build scalable, 
              efficient, and high-performing organizations that can execute at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Operations Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Operational Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Great companies are built on strong operational foundations. Our operations team 
                  works closely with portfolio companies to implement world-class processes, systems, 
                  and practices that enable sustainable growth and competitive advantage.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  From early-stage process design to scaling operations globally, we provide the 
                  expertise and support needed to build organizations that can execute consistently 
                  and efficiently at any scale.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Learn About Our Approach
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
                <Settings className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
                <p className="text-gray-600">
                  Building systems and processes for sustainable, scalable growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Operational Areas</h2>
            <p className="text-xl text-gray-600">
              Comprehensive support across all critical operational functions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "People Operations",
                description: "Building high-performing teams through strategic hiring, development, and retention programs.",
                capabilities: ["Talent Acquisition", "Performance Management", "Culture Development", "Compensation Design"]
              },
              {
                icon: TrendingUp,
                title: "Financial Operations",
                description: "Implementing robust financial systems and processes for sustainable growth and profitability.",
                capabilities: ["Financial Planning", "Budget Management", "Metrics & KPIs", "Investor Relations"]
              },
              {
                icon: Shield,
                title: "Risk & Compliance",
                description: "Ensuring compliance and managing operational risks across all business functions.",
                capabilities: ["Regulatory Compliance", "Risk Assessment", "Policy Development", "Audit Support"]
              },
              {
                icon: Zap,
                title: "Process Optimization",
                description: "Streamlining operations through process improvement and automation initiatives.",
                capabilities: ["Workflow Design", "Automation", "Quality Management", "Efficiency Metrics"]
              },
              {
                icon: Target,
                title: "Strategic Execution",
                description: "Translating strategic vision into actionable plans and measurable results.",
                capabilities: ["Strategic Planning", "OKR Implementation", "Project Management", "Change Management"]
              },
              {
                icon: Settings,
                title: "Technology Operations",
                description: "Building scalable technology infrastructure and operations capabilities.",
                capabilities: ["IT Infrastructure", "Security Systems", "Data Management", "Technology Strategy"]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                  <area.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Methodology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Methodology</h2>
            <p className="text-xl text-gray-600">
              A proven approach to building operational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Analysis</h3>
                  <p className="text-gray-600">Comprehensive evaluation of current operational state and identification of improvement opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
                  <p className="text-gray-600">Design of operational strategy aligned with business objectives and growth goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Planning</h3>
                  <p className="text-gray-600">Detailed roadmap for implementing operational improvements with clear timelines and milestones.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution Support</h3>
                  <p className="text-gray-600">Hands-on support during implementation phase with regular check-ins and course corrections.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Optimization</h3>
                  <p className="text-gray-600">Continuous monitoring of performance metrics and ongoing optimization of operational processes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale Preparation</h3>
                  <p className="text-gray-600">Ensuring operational systems and processes are ready for next stage of growth and scaling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Operational Impact</h2>
            <p className="text-xl text-gray-600">
              Measurable improvements across key operational metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                metric: "40%",
                label: "Average reduction in operational costs",
                description: "Through process optimization and automation"
              },
              {
                metric: "60%",
                label: "Improvement in team productivity",
                description: "Via better processes and tools"
              },
              {
                metric: "3x",
                label: "Faster time to market",
                description: "With streamlined development processes"
              },
              {
                metric: "85%",
                label: "Employee satisfaction increase",
                description: "Through improved culture and operations"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Operational Excellence?</h2>
            <p className="text-xl opacity-90 mb-8">
              Partner with our operations team to build the foundation for sustainable, scalable growth.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Start Your Operations Assessment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Operations;
