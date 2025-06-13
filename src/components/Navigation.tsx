
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <TrendingUp className="w-8 h-8 mr-2 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Everest VC</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/industry" className="text-gray-700 hover:text-blue-600 transition-colors">Industry</Link>
            <Link to="/teams" className="text-gray-700 hover:text-blue-600 transition-colors">Teams</Link>
            
            {/* Ecosystem Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors">
                    Ecosystem
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-80">
                      <a 
                        href="https://ariagen.ai/#technology" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Foundational Domain Specific AGI</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced AI technology solutions
                        </p>
                      </a>
                      <a 
                        href="https://ariagen.ai/#teammates-platform" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Advanced Teammates</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          AI-powered team collaboration
                        </p>
                      </a>
                      <a 
                        href="https://ariagen.ai/#features" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Integrated Middleware</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Seamless integration solutions
                        </p>
                      </a>
                      <Link 
                        to="/basecamp"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Basecamp</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic foundation for growth
                        </p>
                      </Link>
                      <Link 
                        to="/advisory"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Advisory</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Expert guidance and mentorship
                        </p>
                      </Link>
                      <Link 
                        to="/operations"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Operations</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Operational excellence support
                        </p>
                      </Link>
                      <a 
                        href="https://ariagen.ai/#capabilities" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Technology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cutting-edge capabilities
                        </p>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
