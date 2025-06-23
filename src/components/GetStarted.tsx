
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const GetStarted = () => {
  return (
    <section id="get-started" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400 rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Get Started
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join us in building the future of AI-powered ventures. Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
              >
                Talk with our team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-gray-400 text-sm">
                Schedule a consultation call
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
