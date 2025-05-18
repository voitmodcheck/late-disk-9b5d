import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Key, Lock, Globe, Shield } from "lucide-react";

const SecurityFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-[#FF3A3A] mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#F5F5F5] max-w-xs mx-auto">{description}</p>
  </motion.div>
);

const GetStartedSection = () => {
  const features = [
    {
      icon: <Key className="h-12 w-12" />,
      title: "Secure Access",
      description: "Unlimited access with our special key system - no account creation needed."
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Encrypted Connection",
      description: "Your connection is fully encrypted and secure from end to end."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Freedom",
      description: "Bypass censorship and access the global internet without restrictions."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Privacy Protected",
      description: "Your personal information and browsing data remain completely private."
    }
  ];

  return (
    <section id="get-started" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Internet freedom concept with a person accessing global information */}
        <img 
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000" 
          alt="Internet freedom concept" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-[#2A2A2A] rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Access the Open Web</h2>
          
          <p className="text-[#F5F5F5] text-lg text-center mb-10">
            Our secure proxy service enables you to bypass censorship and browse the internet freely.
            Get started with a secure access key - no registration or personal details required.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {features.map((feature, index) => (
              <SecurityFeature 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/proxy">
              <Button className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-8 py-3 rounded-md transition duration-300 font-semibold text-lg h-auto w-full sm:w-auto">
                Access Proxy Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
