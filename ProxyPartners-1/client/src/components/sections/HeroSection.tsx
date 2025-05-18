import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* A network of digital connections representing internet freedom */}
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000" 
          alt="Digital network background" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Unlock the Internet.</span><br />
            <span>Browse Without Boundaries</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-[#F5F5F5] mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PY-Partners provides seamless access to the global internet. Navigate freely with our advanced connection solution.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#get-started">
              <Button className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-8 py-3 rounded-md transition duration-300 font-semibold text-lg h-auto">
                Get Started
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="secondary" className="bg-[#2A2A2A] hover:bg-gray-700 text-white px-8 py-3 rounded-md transition duration-300 font-semibold text-lg h-auto">
                Learn More
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
