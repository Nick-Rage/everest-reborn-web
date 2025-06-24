
import { Button } from "@/components/ui/button";

const Focus = () => {
  const scrollToNext = () => {
    const getStartedSection = document.getElementById('get-started');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="focus" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Main diagram recreating the uploaded focus image */}
      <div className="absolute right-8 top-16 w-1/2 h-96">
        {/* Central diamond pattern with labels */}
        <div className="relative w-full h-full">
          {/* Domain section - dark navy */}
          <div className="absolute left-0 top-0 w-48 h-48 bg-slate-800 transform rotate-45 rounded-3xl flex items-center justify-center">
            <span className="text-white font-bold text-lg transform -rotate-45">Domain</span>
          </div>
          
          {/* Technology section - blue */}
          <div className="absolute left-32 top-0 w-48 h-48 bg-blue-600 transform rotate-45 rounded-3xl flex items-center justify-center">
            <span className="text-white font-bold text-lg transform -rotate-45">Technology</span>
          </div>
          
          {/* Asset section - light blue */}
          <div className="absolute left-64 top-32 w-48 h-48 bg-blue-400 transform rotate-45 rounded-3xl flex items-center justify-center">
            <span className="text-white font-bold text-lg transform -rotate-45">Asset</span>
          </div>
          
          {/* Capital section - cyan */}
          <div className="absolute left-32 top-64 w-48 h-48 bg-cyan-400 transform rotate-45 rounded-3xl flex items-center justify-center">
            <span className="text-slate-800 font-bold text-lg transform -rotate-45">Capital</span>
          </div>
          
          {/* Central circular hub */}
          <div className="absolute left-40 top-32 w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center z-10">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">IA</span>
            </div>
          </div>
          
          {/* Connection lines to AI capabilities */}
          <div className="absolute right-0 top-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-0.5 bg-blue-600 border-dashed border-t-2"></div>
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <span className="text-sm font-semibold">AI assistant</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-0.5 bg-blue-600 border-dashed border-t-2"></div>
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <span className="text-sm font-semibold">Artificial general intelligence</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-0.5 bg-blue-600 border-dashed border-t-2"></div>
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <span className="text-sm font-semibold">AI team mate</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-0.5 bg-blue-600 border-dashed border-t-2"></div>
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <span className="text-sm font-semibold">Super intelligence</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-0.5 bg-blue-600 border-dashed border-t-2"></div>
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <span className="text-sm font-semibold">AI copilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-12">
              We partner with founders and domain experts to build and scale enterprise AI ventures to transform industries
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Build with Founders */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">BUILD WITH FOUNDERS</h3>
              <p className="text-gray-700 leading-relaxed">
                We are serial entrepreneurs, industry leaders, investors, and specialists with deep expertise in building each aspect of a venture, and who have started billion-dollar companies. We are back to our root following our true north: solve the greatest challenges by transforming industries that make a difference
              </p>
            </div>
            
            {/* Team of Experts */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">TEAM OF EXPERTS</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced operators and investors partner with entrepreneurs and domain experts to build transformative companies. Our resources, playbooks, technology & solutions, operations systems, and capital-efficient formula minimize risk, accelerate time to market and maximize opportunities of success in the company building process
              </p>
            </div>
            
            {/* Industry Agnostic */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">INDUSTRY AGNOSTIC</h3>
              <p className="text-gray-700 leading-relaxed">
                From finance to healthcare to industrial segments, we've struggled to stand by and watch voids go unfilled and opportunities get overlooked. We partner with domain experts to tackle problems and reimagine industry verticals with AI
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              CO-FOUND WITH EVEREST AND BUILD THE NEXT GREAT VENTURE
            </h3>
            
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

export default Focus;
