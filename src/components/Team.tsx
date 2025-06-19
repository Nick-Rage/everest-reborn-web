
import { Button } from "@/components/ui/button";

const Team = () => {
  const scrollToNext = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 bg-white">
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
