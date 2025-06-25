
import { Button } from "@/components/ui/button";
import { Brain, Users, Layers, Mountain, MessageCircle, Settings, Cpu } from "lucide-react";

const Ecosystem = () => {
  const scrollToNext = () => {
    const focusSection = document.getElementById('focus');
    if (focusSection) {
      focusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ecosystem" className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Geometric design with "Build with us" */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                {/* Large diamond shape */}
                <div className="absolute top-8 left-8 w-80 h-80 bg-slate-900 transform rotate-45 rounded-3xl">
                  {/* Inner glowing element */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-32 h-32 bg-cyan-400 rounded-2xl opacity-80">
                    <div className="absolute inset-4 border-2 border-cyan-200 rounded-xl">
                      <div className="absolute inset-2 bg-cyan-300 rounded-lg opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                {/* Blue accent triangle */}
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 transform rotate-45"></div>
                
                {/* "Build with us" button */}
                <div className="absolute bottom-8 left-8 bg-white rounded-full px-8 py-4 shadow-lg">
                  <span className="text-gray-900 font-semibold text-lg">Build with us</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Ecosystem pills in 2-per-row layout using uploaded reference */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">
                    FOUNDATIONAL<br />DOMAIN-SPECIFIC AGI
                  </div>
                </div>
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <Mountain className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">BASECAMP</div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">
                    ADVANCED<br />TEAMMATES
                  </div>
                </div>
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">ADVISORY</div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">
                    INTEGRATED<br />MIDDLEWARE
                  </div>
                </div>
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <Settings className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">OPERATIONS</div>
                </div>
              </div>
              
              {/* Row 4 - Centered */}
              <div className="flex justify-center">
                <div className="bg-white rounded-full border-2 border-gray-300 px-4 py-3 flex items-center gap-2 shadow-sm">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-gray-900">TECHNOLOGY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
