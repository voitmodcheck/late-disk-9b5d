import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        scrolled ? "bg-[#121212]/90 backdrop-blur-md border-[#2A2A2A]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-[#FF3A3A] font-bold text-2xl">PY</span>
              <span className="text-white font-bold text-2xl">-Partners</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-white hover:text-[#FF3A3A] transition duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-white hover:text-[#FF3A3A] transition duration-300">
              How It Works
            </a>
            <a href="#benefits" className="text-white hover:text-[#FF3A3A] transition duration-300">
              Benefits
            </a>
            <a href="#contact" className="text-white hover:text-[#FF3A3A] transition duration-300">
              Contact
            </a>
            <Link href="/proxy">
              <Button className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-6 py-2 font-medium">
                Get Started
              </Button>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-4">
            <a 
              href="#features" 
              className="block text-white hover:text-[#FF3A3A] transition duration-300 py-2"
              onClick={closeMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block text-white hover:text-[#FF3A3A] transition duration-300 py-2"
              onClick={closeMenu}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="block text-white hover:text-[#FF3A3A] transition duration-300 py-2"
              onClick={closeMenu}
            >
              Benefits
            </a>
            <a 
              href="#contact" 
              className="block text-white hover:text-[#FF3A3A] transition duration-300 py-2"
              onClick={closeMenu}
            >
              Contact
            </a>
            <Link
              href="/proxy"
              onClick={closeMenu}
            >
              <div className="block bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-4 py-2 rounded-md transition duration-300 font-medium text-center">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
