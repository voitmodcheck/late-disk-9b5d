import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [formSuccess, setFormSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      reset();
      setFormSuccess(true);
      
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Digital privacy concept with lockpad and security */}
        <img 
          src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000" 
          alt="Digital privacy concept" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-[#F5F5F5] max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#2A2A2A] rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-[#F5F5F5] mb-2">Name</Label>
                  <Input
                    id="name"
                    className="bg-[#121212] border border-gray-700 text-white rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FF3A3A]"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[#F5F5F5] mb-2">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-[#121212] border border-gray-700 text-white rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FF3A3A]"
                    placeholder="Your email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="subject" className="text-sm font-medium text-[#F5F5F5] mb-2">Subject</Label>
                <Input
                  id="subject"
                  className="bg-[#121212] border border-gray-700 text-white rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FF3A3A]"
                  placeholder="How can we help?"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-[#F5F5F5] mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  className="bg-[#121212] border border-gray-700 text-white rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FF3A3A]"
                  placeholder="Your message..."
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-8 py-3 rounded-md transition duration-300 font-semibold text-lg h-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                {formSuccess && (
                  <p className="text-green-500 mt-4">Message sent successfully!</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
