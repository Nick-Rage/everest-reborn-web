
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "Managing Partner",
      bio: "Former VP at Sequoia Capital with 15+ years in venture capital. Led investments in 3 unicorn companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Rodriguez",
      title: "General Partner",
      bio: "Serial entrepreneur and former CTO at two successful exits. Expert in AI and enterprise software.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Emily Watson",
      title: "Partner",
      bio: "Former head of innovation at Johnson & Johnson. Specialist in healthcare technology and biotech investments.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "James Park",
      title: "Principal",
      bio: "Former McKinsey consultant and Goldman Sachs analyst. Focuses on fintech and consumer technology.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our experienced team combines deep industry knowledge with a passion for 
            helping entrepreneurs build exceptional companies.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.twitter}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
