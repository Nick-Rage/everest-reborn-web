
import { Button } from "@/components/ui/button";
import { Target, Rocket, Building } from "lucide-react";

const Focus = () => {
  const scrollToNext = () => {
    const getStartedSection = document.getElementById('get-started');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="focus" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We partner with founders and domain experts to build and scale enterprise AI ventures to transform industries
            </p>
          </div>
          
          {/* Focus areas visualization */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Partnership */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Strategic Partnership</h3>
                <p className="text-gray-600 text-center">
                  Collaborating with visionary founders and domain experts
                </p>
              </div>
              
              {/* Building */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Venture Building</h3>
                <p className="text-gray-600 text-center">
                  Creating next-generation AI-powered enterprises
                </p>
              </div>
              
              {/* Scaling */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Scaling Impact</h3>
                <p className="text-gray-600 text-center">
                  Transforming industries through innovative solutions
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={scrollToNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
