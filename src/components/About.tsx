import { Target, Users, Lightbulb, Rocket, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Investment",
      description: "We focus on Series A and B companies in AI, fintech, and healthcare with proven traction and scalable business models."
    },
    {
      icon: Users,
      title: "Hands-On Partnership",
      description: "Beyond capital, we provide strategic guidance, operational expertise, and access to our extensive network of industry leaders."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "We back entrepreneurs solving complex problems with breakthrough technologies that have the potential to transform industries."
    },
    {
      icon: Rocket,
      title: "Growth Acceleration",
      description: "Our platform approach helps companies scale faster through shared resources, best practices, and cross-portfolio collaboration."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "15+ years of successful investments with multiple unicorn companies and IPOs across various technology sectors."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With offices in Silicon Valley, New York, and London, we support companies expanding into international markets."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-600 font-semibold text-lg mb-4 block">ABOUT EVEREST VC</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Tomorrow's
            <span className="text-blue-600"> Market Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everest VC is a premier venture capital firm dedicated to partnering with visionary entrepreneurs 
            who are building the next generation of transformative technology companies. We combine deep industry 
            expertise with patient capital to help exceptional teams achieve their ambitious goals.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Vision?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our portfolio of innovative companies that are shaping the future of technology.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Start the Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
