import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Digital privacy concept with a person using modern technology */}
        <img 
          src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000" 
          alt="Digital privacy concept" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-[#F5F5F5] max-w-2xl mx-auto">
            Simple, secure, and straightforward — get connected in minutes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="bg-[#2A2A2A] rounded-xl p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 bg-[#FF3A3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-4">Sign Up</h3>
            <p className="text-[#F5F5F5]">
              Create your account with a valid email address. Choose from our flexible subscription plans.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#2A2A2A] rounded-xl p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 bg-[#FF3A3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-4">Download & Install</h3>
            <p className="text-[#F5F5F5]">
              Get our lightweight application on your device. Compatible with all major platforms.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#2A2A2A] rounded-xl p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 bg-[#FF3A3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-4">Connect & Browse</h3>
            <p className="text-[#F5F5F5]">
              Launch the app, select your preferred server location, and connect with one click.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#get-started">
            <Button className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-8 py-3 rounded-md transition duration-300 font-semibold text-lg h-auto">
              Get Started Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
