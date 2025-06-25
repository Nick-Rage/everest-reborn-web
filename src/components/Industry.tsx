
import { Button } from "@/components/ui/button";

const Industry = () => {
  const scrollToNext = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industry" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Industry cards with actual photos */}
          <div className="grid grid-cols-4 gap-4 mb-16">
            {/* Healthcare */}
            <div className="relative rounded-3xl overflow-hidden h-64">
              <img 
                src="/lovable-uploads/e2d5877f-070b-4a6f-b2b5-6551beaf528e.png" 
                alt="Healthcare professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-80"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">HEALTHCARE</h3>
              </div>
            </div>
            
            {/* Financial Services */}
            <div className="relative rounded-3xl overflow-hidden h-64">
              <img 
                src="/lovable-uploads/cddb053a-40bf-41b7-9089-28f5d0a52e98.png" 
                alt="Financial services professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-80"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">FINANCIAL SERVICES</h3>
              </div>
            </div>
            
            {/* Automotive */}
            <div id="automotive-box" className="relative rounded-3xl overflow-hidden h-64">
              <img 
                src="/lovable-uploads/4280ec06-220c-4cfe-96fd-58a906f9de19.png" 
                alt="Automotive professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900 opacity-80"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">AUTOMOTIVE</h3>
              </div>
            </div>
            
            {/* Construction */}
            <div className="relative rounded-3xl overflow-hidden h-64">
              <img 
                src="/lovable-uploads/cc159ae0-6bc2-4446-b62d-fe729b17850a.png" 
                alt="Construction professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900 opacity-80"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">CONSTRUCTION</h3>
              </div>
            </div>
          </div>
          
          {/* Geometric accent with blue diamond */}
          <div className="relative mb-16">
            <div className="absolute right-16 top-0 w-48 h-48 bg-blue-600 transform rotate-45"></div>
            <div className="relative z-10 text-center pt-24">
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
      </div>
    </section>
  );
};

export default Industry;
