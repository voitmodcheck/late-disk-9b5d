import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
  delay: number;
}

const Testimonial = ({ quote, name, role, rating, delay }: TestimonialProps) => (
  <motion.div 
    className="bg-[#121212] rounded-xl p-8 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <div key={i} className={`text-[#FF3A3A] ${i > 0 ? 'ml-1' : ''}`}>
          <Star className="h-6 w-6" fill="currentColor" />
        </div>
      ))}
    </div>
    <p className="text-[#F5F5F5] mb-6">{quote}</p>
    <div className="flex items-center">
      <div className="font-medium">
        <p className="text-white">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I've been using PY-Partners for over a year now, and it has never let me down. The speed is consistently fast, and I've had no issues accessing content from different regions.",
      name: "Alex M.",
      role: "Software Developer",
      rating: 5
    },
    {
      quote: "The customer support team is exceptional. I had a few questions about setup, and they responded almost immediately with clear instructions. Excellent service!",
      name: "Sarah K.",
      role: "Digital Nomad",
      rating: 5
    },
    {
      quote: "As a frequent traveler, I need reliable internet access no matter where I am. PY-Partners has been a game-changer for my work and entertainment needs.",
      name: "Michael T.",
      role: "Business Consultant",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2A2A2A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-[#F5F5F5] max-w-2xl mx-auto">
            Don't just take our word for it. Hear from people who use PY-Partners daily.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
