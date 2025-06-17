
import { Button } from "@/components/ui/button";
import { TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <TrendingUp className="w-8 h-8 mr-2 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Everest</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#industry" className="text-gray-700 hover:text-blue-600 transition-colors">Industry</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
            
            {/* Ecosystem Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
              >
                Ecosystem
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isEcosystemOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a href="https://ariagen.ai/#technology" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Foundational Domain specific AGI</a>
                  <a href="https://ariagen.ai/#teammates-platform" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Advanced Teammates</a>
                  <a href="https://ariagen.ai/#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Integrated Middleware</a>
                  <a href="https://everestvc.ai/#page-8" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Basecamp</a>
                  <a href="https://everestvc.ai/#page-8" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Advisory</a>
                  <a href="https://everestvc.ai/#page-7" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Operations</a>
                  <a href="https://ariagen.ai/#capabilities" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Technology</a>
                </div>
              )}
            </div>
            
            <a href="#focus" className="text-gray-700 hover:text-blue-600 transition-colors">Focus</a>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={scrollToBottom}>
              Get Started
            </Button>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
