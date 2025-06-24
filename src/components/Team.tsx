
import { Button } from "@/components/ui/button";
import { Target, Brain } from "lucide-react";

const Team = () => {
  const scrollToNext = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulating the uploaded team photo grid
  const teamPhotos = [
    '/lovable-uploads/3d14f865-2429-42e3-bca4-6f5863be4b96.png',
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Looking for your next big thing? Or start your next innings?
          </h2>
          
          {/* Team member grid recreating the uploaded image layout */}
          <div className="relative mb-16 bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-7 gap-4 mb-6">
              {/* Top row - professional photos */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-transparent to-blue-900 opacity-60"></div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {/* Bottom row - professional photos */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-transparent to-gray-700 opacity-60"></div>
                </div>
              ))}
            </div>
            
            {/* AI badge overlay matching uploaded design */}
            <div className="absolute left-8 top-8 bg-blue-600 rounded-full px-6 py-3 flex items-center gap-3">
              <Target className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            
            {/* AGI badge */}
            <div className="absolute left-12 bottom-8 bg-purple-600 rounded-full px-6 py-3">
              <span className="text-white font-bold text-lg">AGI</span>
            </div>
            
            {/* Central brain element */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center opacity-80">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 px-12 py-6 text-lg rounded-full font-semibold mb-16"
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
