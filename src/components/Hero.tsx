
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const focusSection = document.getElementById('focus');
    if (focusSection) {
      focusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Diagonal geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white transform -skew-x-12"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-200 transform skew-x-12"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-gray-900 underline">
          Everest AI Ventures
        </div>
        <div className="flex items-center gap-8">
          <a href="https://ariagen.ai/" className="text-gray-700 underline">Aria AI</a>
          <a href="#" className="text-gray-700 underline">Basecamp</a>
          <a href="#" className="text-gray-700 underline">Advisory</a>
          <Button 
            onClick={scrollToBottom}
            className="bg-slate-900 text-white px-6 py-2 rounded-none"
          >
            Join Us
          </Button>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Updated to match sketch */}
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                PARTNER WITH US TO CREATE
                <br />
                <span className="block">MARKET DEFINING</span>
                <br />
                <span className="block">INDUSTRIES</span>
              </h1>
              
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Reimagining industries
                </h2>
                
                <p className="text-xl text-gray-700 mb-8">
                  w/ <span className="font-light italic">unstoppable intelligence</span>
                </p>
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                from groundbreaking innovations to sustainable human-aligned solutions
              </p>
              
              <Button 
                size="lg" 
                onClick={scrollToNext}
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold tracking-wider rounded-none"
              >
                LEARN MORE
              </Button>
            </div>
            
            {/* Right side - Empty to match sketch */}
            <div className="relative h-96 flex justify-center items-center">
              {/* Removed AI/AGI graphic as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
