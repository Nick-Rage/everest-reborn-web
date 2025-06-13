import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Scaling the Next
                <span className="text-blue-600 block">Generation</span>
                of Innovation
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We partner with exceptional entrepreneurs to build transformative companies 
                that define the future of technology and create meaningful impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group">
                  View Our Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg group">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">$2B+</div>
                  <div className="text-sm text-gray-600">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Portfolio Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">45+</div>
                  <div className="text-sm text-gray-600">Successful Exits</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Innovation Hub</h3>
                    <p className="text-gray-600 mt-2">Where Ideas Become Reality</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
