
import { Button } from "@/components/ui/button";

const Team = () => {
  const scrollToNext = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Looking for your next big thing? Or start your next innings?
          </h2>
          
          {/* Team member grid with actual photos */}
          <div className="relative mb-16">
            <img 
              src="/lovable-uploads/35bcfb35-ba18-4ef3-8e29-0650128380c9.png" 
              alt="Team network graphic with AI/AGI elements" 
              className="w-full h-auto max-w-4xl mx-auto"
            />
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 px-12 py-6 text-lg rounded-full font-semibold"
          >
            Build with us
          </Button>
        </div>
        
        {/* Team description */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Everest AI Ventures is a Go-To-Market focused VC/PE studio
          </h3>
          
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            We build next generation ventures poised to redefine industries and make a difference. 
            We are an experienced team of builders, serial entrepreneurs, senior executives, 
            technologists, operators and investors who have started and scaled dozens of companies, 
            and created billions of dollars in enterprise value. We partner with you to build successful ventures.
          </p>
          
          <div className="mt-12 text-center">
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

export default Team;
