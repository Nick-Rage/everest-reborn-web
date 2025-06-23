
import { Button } from "@/components/ui/button";

const Focus = () => {
  const scrollToNext = () => {
    const getStartedSection = document.getElementById('get-started');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="focus" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(239, 246, 255, 0.95), rgba(239, 246, 255, 0.95)), url('/lovable-uploads/79ac105e-cf4c-4ec1-9067-108256403422.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
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
