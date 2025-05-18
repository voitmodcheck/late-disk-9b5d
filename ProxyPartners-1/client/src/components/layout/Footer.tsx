import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Github 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-[#2A2A2A] pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-[#FF3A3A] font-bold text-2xl">PY</span>
              <span className="text-white font-bold text-2xl">-Partners</span>
            </div>
            <p className="text-[#F5F5F5] mb-6">
              Providing internet freedom solutions since 2020. Reliable, secure, and fast access to the global web.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#get-started" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5F5F5] hover:text-[#FF3A3A] transition duration-300">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] text-center text-[#F5F5F5]">
          <p>&copy; {new Date().getFullYear()} PY-Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
