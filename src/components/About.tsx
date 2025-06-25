
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToNext = () => {
    const industrySection = document.getElementById('industry');
    if (industrySection) {
      industrySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background cityscape silhouette */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-slate-800 to-transparent">
          {/* City buildings silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 bg-slate-700"
                style={{
                  left: `${i * 5}%`,
                  width: `${3 + Math.random() * 4}%`,
                  height: `${30 + Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Video placeholder for Media1.mp4 */}
            <div className="flex justify-center">
              <div id="MEDIA_PLACEHOLDER_VISION_1" className="w-96 h-96 bg-slate-800 rounded-lg flex items-center justify-center border-2 border-slate-600">
                <div className="text-white text-center">
                  <div className="text-sm mb-2">Media Placeholder</div>
                  <div className="text-xs text-slate-400">Replace with Media1.mp4</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                At Everest we seek entrepreneurs, domain experts and companies who share a fierce vision to redefine what's possible
              </h2>
              
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  We are crossing the chasm of scarcity to abundance, physical to digital- igniting a revolution where human ambition and machine intelligence is transforming the limits of the old world into a new frontier of infinite possibility
                </p>
                
                <p>
                  It's time to reimagine every function, role and industry to develop groundbreaking innovations to building sustainable human-centric solutions. We believe that the convergence of human creativity with the ultimate machine intelligence will accelerate progress for all
                </p>
              </div>
              
              <div className="mt-12">
                <Button 
                  size="lg" 
                  onClick={scrollToNext}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold tracking-wider"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
