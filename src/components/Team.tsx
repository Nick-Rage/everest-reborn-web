
import { Button } from "@/components/ui/button";
import { Target, Brain } from "lucide-react";

const Team = () => {
  const scrollToNext = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Looking for your next big thing? Or start your next innings?
          </h2>
          
          {/* Team member grid with circular photos */}
          <div className="relative mb-16">
            <div className="grid grid-cols-7 gap-4 mb-8">
              {/* Top row */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-16 h-16 bg-gray-300 rounded-2xl"></div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {/* Bottom row */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-16 h-16 bg-gray-400 rounded-2xl"></div>
              ))}
            </div>
            
            {/* AI/AGI circular element overlay */}
            <div className="absolute left-8 top-8 w-32 h-32 bg-blue-600 rounded-full opacity-80 flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            
            {/* AI badge */}
            <div className="absolute left-4 top-4 bg-slate-900 rounded-full px-3 py-1">
              <div className="flex items-center gap-1">
                <Target className="w-3 h-3 text-white" />
                <span className="text-white font-semibold text-sm">AI</span>
              </div>
            </div>
            
            {/* AGI badge */}
            <div className="absolute left-12 bottom-4 bg-slate-900 rounded-full px-3 py-1">
              <span className="text-white font-semibold text-sm">AGI</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 px-12 py-6 text-lg rounded-full font-semibold"
          >
            Build with us
          </Button>
        </div>
        
        {/* Team description */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Everest AI Ventures is a Go-To-Market focused VC/PE studio
          </h3>
          
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            We build next generation ventures poised to redefine industries and make a difference. 
            We are an experienced team of builders, serial entrepreneurs, senior executives, 
            technologists, operators and investors who have started and scaled dozens of companies, 
            and created billions of dollars in enterprise value. We partner with you to build successful ventures.
          </p>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              onClick={scrollToNext}
              className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold tracking-wider rounded-none"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
