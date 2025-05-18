import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Unrestricted Access",
      description: "Bypass regional restrictions to access your favorite content from anywhere in the world."
    },
    {
      title: "Enhanced Privacy",
      description: "Our technology shields your online activities from prying eyes, keeping your data private."
    },
    {
      title: "Stable Connections",
      description: "Enjoy uninterrupted browsing with our reliable and stable network infrastructure."
    },
    {
      title: "Multi-Device Support",
      description: "Connect all your devices with one account — desktop, mobile, tablet, and more."
    },
    {
      title: "User-Friendly Interface",
      description: "Simple and intuitive design makes it easy for anyone to use our service."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-[#2A2A2A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PY-Partners</h2>
          <p className="text-[#F5F5F5] max-w-2xl mx-auto">
            Experience the difference with our premium service.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Global connectivity concept image showing connected world */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Global connectivity concept" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </motion.div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-[#FF3A3A]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-[#F5F5F5] mt-2">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
