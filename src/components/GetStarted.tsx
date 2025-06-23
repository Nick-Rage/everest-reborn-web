
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <section 
      id="get-started" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.9)), url('/lovable-uploads/70d16298-2fb1-4e8f-9ed3-373c733aedc7.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Get Started
          </h2>
          
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
