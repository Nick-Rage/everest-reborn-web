
import { Button } from "@/components/ui/button";

const Team = () => {
  const scrollToNext = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="team" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(239, 246, 255, 0.95), rgba(239, 246, 255, 0.95)), url('/lovable-uploads/ec206b6d-0e8f-467d-911f-e2a34b57eb2d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Team
          </h2>
          
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12">
            <p>
              Everest AI Ventures is a Go-To-Market focused VC/PE studio
            </p>
            
            <p>
              We build next generation ventures poised to redefine industries and make a difference. We are an experienced team of builders, serial entrepreneurs, senior executives, technologists, operators and investors who have started and scaled dozens of companies, and created billions of dollars in enterprise value. We partner with you to build successful ventures.
            </p>
          </div>
          
          {/* Team composition visual */}
          <div className="mb-12">
            <img
              src="/lovable-uploads/b2f62804-4c9c-4ea8-bac2-16ed34a926ab.png"
              alt="Our Team"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
