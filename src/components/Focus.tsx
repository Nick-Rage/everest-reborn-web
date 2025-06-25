
import { Button } from "@/components/ui/button";

const Focus = () => {
  const scrollToNext = () => {
    const basecampSection = document.getElementById('basecamp');
    if (basecampSection) {
      basecampSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="focus" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 transform rotate-45 opacity-20 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400 transform -rotate-12 opacity-30 translate-x-32 translate-y-32"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
          
          {/* Focus diagram using uploaded image */}
          <div className="relative text-center mb-16">
            <img 
              src="/lovable-uploads/23dd8357-fe8e-4a9d-a472-ad2d639cacfe.png" 
              alt="Focus diagram showing Technology, Domain, Asset, Capital connections to AI applications" 
              className="w-full h-auto max-w-4xl mx-auto"
            />
          </div>
          
          {/* Bottom geometric accent with large navy diamond */}
          <div className="relative text-center">
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-slate-900 transform rotate-45 nav-diamond"></div>
            <div className="relative z-10 mb-8 co-found-text">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                CO-FOUND WITH EVEREST AND BUILD THE NEXT GREAT VENTURE
              </h3>
            </div>
            
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
