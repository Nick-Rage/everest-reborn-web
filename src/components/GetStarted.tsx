
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <section 
      id="get-started" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Video background placeholder for Media3.mp4 */}
      <div id="MEDIA_PLACEHOLDER_JOIN_US" className="absolute inset-0">
        <!-- Replace background with Media3.mp4 manually -->
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-blue-900/80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">
            JOIN US IN<br />
            REIMAGINING YOUR<br />
            INDUSTRY WITH AI.
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Want to learn more or invest in our pipeline?
          </p>
          
          <Button 
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 text-lg rounded-full font-semibold"
          >
            Build with us
          </Button>
        </div>
      </div>
      
      {/* Robotic arm visual on left */}
      <div className="absolute left-0 bottom-0 w-96 h-64 opacity-30">
        <div className="relative w-full h-full">
          {/* Simplified robotic arm representation */}
          <div className="absolute bottom-4 left-8 w-8 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-12 left-16 w-12 h-8 bg-white rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-8 left-24 w-16 h-6 bg-white rounded-full transform -rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
