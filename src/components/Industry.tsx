
import { Button } from "@/components/ui/button";

const Industry = () => {
  const scrollToNext = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="industry" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/lovable-uploads/72f76314-50c6-4034-9ea0-1a0f80cff8c6.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Industry
          </h2>
          
          {/* Use the industry strip image */}
          <div className="mb-16">
            <img
              src="/lovable-uploads/927907b3-c391-4b69-8c49-1bb7688815af.png"
              alt="Industry Applications"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From healthcare to finance, manufacturing to energy - we're transforming industries with AI-powered solutions that drive innovation and create sustainable value.
            </p>
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

export default Industry;
