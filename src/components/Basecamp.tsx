
import { Button } from "@/components/ui/button";

const Basecamp = () => {
  const scrollToNext = () => {
    const getStartedSection = document.getElementById('get-started');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="basecamp" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Panel - Everest Basecamp */}
            <div className="relative h-96 flex items-center justify-center text-white p-8"
                 style={{
                   backgroundImage: `url('/lovable-uploads/c8d1da87-157c-4298-9ec2-6a256b85f1f1.png')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="absolute inset-0 bg-blue-600 opacity-60"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6">EVEREST BASECAMP</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Elevate your opportunity for success with our comprehensive platform designed to accelerate venture development and scaling.
                </p>
              </div>
            </div>
            
            {/* Right Panel - Advisory */}
            <div className="relative h-96 flex items-center justify-center text-white p-8"
                 style={{
                   backgroundImage: `url('/lovable-uploads/46f4c740-73a2-4e59-bdaf-639021b9901c.png')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6">ADVISORY</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Guided solutions and advisory services from our experienced team of entrepreneurs, investors, and industry experts.
                </p>
              </div>
            </div>
          </div>
          
          {/* Central CTA Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={scrollToNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold rounded-full"
            >
              Talk with our team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basecamp;
