import { Button } from "@/components/ui/button";
import { Users, Briefcase, Code, TrendingUp } from "lucide-react";

const Team = () => {
  const scrollToNext = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamRoles = [
    { title: "Builders", icon: Code, count: "15+", color: "bg-blue-500" },
    { title: "Entrepreneurs", icon: TrendingUp, count: "8+", color: "bg-green-500" },
    { title: "Executives", icon: Briefcase, count: "12+", color: "bg-purple-500" },
    { title: "Investors", icon: Users, count: "6+", color: "bg-indigo-500" },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Team
          </h2>
          
          {/* Exact recreation of team graphic */}
          <div className="flex justify-center mb-12">
            <div className="relative w-80 h-64">
              {/* Light gray background */}
              <div className="w-full h-full bg-gray-200 rounded-3xl relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-10 gap-3 p-6 h-full">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Purple geometric element */}
                <div className="absolute top-6 left-6 w-20 h-16 bg-purple-600 transform -rotate-12 rounded-xl"></div>
                
                {/* Team text card */}
                <div className="absolute bottom-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg">
                  <span className="text-gray-800 font-semibold">Team</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12">
            <p>
              Everest AI Ventures is a Go-To-Market focused VC/PE studio
            </p>
            
            <p>
              We build next generation ventures poised to redefine industries and make a difference. We are an experienced team of builders, serial entrepreneurs, senior executives, technologists, operators and investors who have started and scaled dozens of companies, and created billions of dollars in enterprise value. We partner with you to build successful ventures.
            </p>
          </div>
          
          {/* Team composition visual */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Expert Team</h3>
              
              {/* Team stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {teamRoles.map((role, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{role.count}</div>
                    <div className="text-gray-600 font-medium">{role.title}</div>
                  </div>
                ))}
              </div>
              
              {/* Connection visualization */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
