
import { Button } from "@/components/ui/button";
import { Brain, Users, Layers, Mountain, MessageCircle, Settings, Cpu, Target, Zap } from "lucide-react";

const Ecosystem = () => {
  const scrollToNext = () => {
    const focusSection = document.getElementById('focus');
    if (focusSection) {
      focusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ecosystem" className="py-24 bg-gray-100 relative overflow-hidden">
      {/* AI/AGI flowing design elements matching uploaded images */}
      <div className="absolute top-0 left-0 w-full h-32">
        <div className="relative w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 overflow-hidden">
          {/* AI badge on the left */}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-900 rounded-full px-6 py-3 flex items-center gap-3">
            <Target className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          
          {/* Central flowing element */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* AGI badge on the right */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-900 rounded-full px-6 py-3 flex items-center gap-3">
            <Zap className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">AGI</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
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
            
            {/* Right side - Ecosystem pills */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex gap-4">
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">FOUNDATIONAL</div>
                    <div className="font-bold text-gray-900 text-sm">DOMAIN-SPECIFIC AGI</div>
                  </div>
                </div>
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <Mountain className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-gray-900 text-sm">BASECAMP</div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="flex gap-4">
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">ADVANCED</div>
                    <div className="font-bold text-gray-900 text-sm">TEAMMATES</div>
                  </div>
                </div>
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-gray-900 text-sm">ADVISORY</div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="flex gap-4">
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <Layers className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">INTEGRATED</div>
                    <div className="font-bold text-gray-900 text-sm">MIDDLEWARE</div>
                  </div>
                </div>
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <Settings className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-gray-900 text-sm">OPERATIONS</div>
                </div>
              </div>
              
              {/* Row 4 */}
              <div className="flex justify-center">
                <div className="bg-white rounded-full border-2 border-gray-300 px-6 py-4 flex items-center gap-3 shadow-sm">
                  <Cpu className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-gray-900 text-sm">TECHNOLOGY</div>
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
