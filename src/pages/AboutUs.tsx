
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Rocket, Award, Globe, TrendingUp } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 mr-3 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Everest VC</h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a premier venture capital firm dedicated to scaling the next generation of innovation. 
              Our mission is to partner with visionary entrepreneurs who are building transformative companies 
              that define the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To identify, partner with, and scale exceptional entrepreneurs who are building the 
                next generation of transformative technology companies. We believe in the power of 
                innovation to solve complex global challenges and create meaningful impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach goes beyond traditional venture capital. We provide strategic guidance, 
                operational expertise, and access to our extensive network of industry leaders to help 
                our portfolio companies achieve their ambitious goals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the premier venture capital partner for entrepreneurs building the future. 
                We envision a world where breakthrough technologies and innovative business models 
                create lasting positive change across industries and societies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our investments and partnerships, we aim to accelerate the development of 
                technologies in AI, fintech, healthcare, and other transformative sectors that 
                will define the next decade of human progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our investment philosophy and partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Strategic Focus",
                description: "We focus on Series A and B companies with proven traction and scalable business models in high-growth sectors."
              },
              {
                icon: Users,
                title: "Partnership Approach",
                description: "We believe in building long-term partnerships with our entrepreneurs, providing support beyond capital."
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "We back breakthrough technologies and disruptive business models that have the potential to transform industries."
              },
              {
                icon: Rocket,
                title: "Growth Acceleration",
                description: "Our platform approach helps companies scale faster through shared resources and best practices."
              },
              {
                icon: Award,
                title: "Proven Excellence",
                description: "15+ years of successful investments with multiple unicorn companies and successful exits."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Supporting companies that create meaningful impact and drive positive change globally."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
