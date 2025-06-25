
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal split backgrounds */}
      <div className="absolute inset-0">
        {/* Left half - white */}
        <div 
          className="absolute inset-0 bg-white"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
          }}
        ></div>
        
        {/* Right half - light grey */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#f2f3f8',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase" style={{ color: '#071741' }}>
              PARTNER WITH US<br />
              TO CREATE<br />
              MARKET<br />
              DEFINING<br />
              VENTURES
            </h1>
            
            {/* Subheading */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ color: '#071741' }}>
                Reimagining industries
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ color: '#071741' }}>
                w/ unstoppable <em className="italic">intelligence</em>
              </h2>
            </div>
            
            {/* Description paragraph */}
            <p className="text-base text-gray-600 max-w-md leading-relaxed">
              from groundbreaking innovations to sustainable human-aligned solutions
            </p>
            
            {/* Learn More button */}
            <div>
              <Button 
                onClick={scrollToNext}
                className="bg-white border-2 border-black text-black hover:bg-gray-50 px-8 py-3 rounded-md font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Side Content - Graphic */}
          <div className="flex justify-center items-center lg:justify-end relative">
            <div className="relative max-w-lg w-full">
              <img 
                src="/assets/images/graphic 1.png" 
                alt="Technology graphic" 
                className="w-full h-auto max-w-full object-contain"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
