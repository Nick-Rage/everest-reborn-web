
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

const GetStarted = () => {
  return (
    <section id="get-started" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Get Started
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Everest Basecamp</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elevate your opportunity for success by introducing your company or fund to more accredited investors
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory</h3>
                <p className="text-gray-600 leading-relaxed">
                  Guided solutions and advisory designed for every stage of your company-Strategy and implementation
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Talk with our team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
