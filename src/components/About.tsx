
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We target early-stage to growth companies in technology, healthcare, and sustainable innovation sectors."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "More than capital, we provide strategic guidance, industry connections, and operational expertise."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We back entrepreneurs who are solving meaningful problems with breakthrough technologies and business models."
    },
    {
      icon: Rocket,
      title: "Growth Acceleration",
      description: "Our extensive network and resources help companies scale faster and reach their full potential."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Investing in Tomorrow's 
            <span className="text-blue-600"> Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everest VC is a leading venture capital firm dedicated to identifying and nurturing 
            exceptional entrepreneurs who are building the companies of tomorrow. We believe in 
            the power of innovation to create positive change in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
