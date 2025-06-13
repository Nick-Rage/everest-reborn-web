
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const Teams = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Managing Partner",
      bio: "Former VP at Google Ventures with 15+ years in tech investing. Led investments in 3 unicorn companies.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "Partner",
      bio: "Ex-Goldman Sachs investment banker turned VC. Focuses on fintech and enterprise software investments.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "Dr. Emily Watson",
      role: "Partner",
      bio: "Former Stanford AI researcher with PhD in Computer Science. Leads our AI and healthcare technology investments.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Principal",
      bio: "Former startup founder and McKinsey consultant. Specializes in early-stage enterprise software companies.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "Lisa Thompson",
      role: "Principal",
      bio: "Former Tesla and SpaceX engineer turned investor. Focuses on climate tech and deep tech investments.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "James Park",
      role: "Associate",
      bio: "Former Sequoia Capital analyst with expertise in consumer technology and marketplace businesses.",
      image: "/placeholder.svg",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the experienced professionals who bring deep industry expertise and proven track records to support our portfolio companies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a href="mailto:" className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advisory Board</h2>
            <p className="text-xl text-gray-600">
              Industry leaders who provide strategic guidance and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "John Anderson", role: "Former CEO, TechCorp" },
              { name: "Maria Santos", role: "Former CTO, DataScale" },
              { name: "Robert Chen", role: "Founder, AI Innovations" },
              { name: "Jennifer Wu", role: "Former VP, Meta" }
            ].map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{advisor.name}</h3>
                <p className="text-sm text-gray-600">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;
