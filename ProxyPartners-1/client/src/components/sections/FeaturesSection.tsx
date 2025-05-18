import { motion } from "framer-motion";
import { 
  Lock, 
  Zap, 
  Globe, 
  Shield, 
  DollarSign, 
  LifeBuoy 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <motion.div 
    className="bg-[#121212] rounded-xl p-8 shadow-lg transform transition duration-300 hover:-translate-y-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="text-[#FF3A3A] mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#F5F5F5]">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Enhanced Security",
      description: "Advanced encryption protocols ensure your connection remains secure and private at all times."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "High-Speed Connections",
      description: "Optimized servers deliver fast, reliable connections for seamless browsing and streaming."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Access",
      description: "Connect to servers worldwide to access content without regional restrictions."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "No-Logs Policy",
      description: "We never track, store, or monitor your browsing activities. Your privacy comes first."
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Affordable Plans",
      description: "Competitive pricing options to fit any budget without compromising on quality."
    },
    {
      icon: <LifeBuoy className="h-10 w-10" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any questions."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-[#2A2A2A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-[#F5F5F5] max-w-2xl mx-auto">
            Our innovative technology provides you with the best experience possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
