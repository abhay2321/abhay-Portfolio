
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-950/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://github.com/abhay2321.png" 
                alt="Abhay Chaurasia" 
                className="w-10 h-10 rounded-full border-2 border-blue-400/50 hover:border-blue-400 transition-colors duration-200"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Abhay Chaurasia
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Services", "Testimonials", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Slide Panel */}
        <div className={`absolute right-0 top-0 h-full w-870 bg-gray-950/95 backdrop-blur-md border-l border-gray-800 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                
              </div>
          
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 p-5">
              {["Home", "About", "Projects", "Services", "Testimonials", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 relative group"
                >
                  <span className="text-lg font-medium">{item}</span>
                  <div className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-8 transition-all duration-300"></div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto p-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2025 Abhay Chaurasia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
