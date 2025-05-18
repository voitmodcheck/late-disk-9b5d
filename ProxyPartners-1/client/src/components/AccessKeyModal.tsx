import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Key, Lock, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const accessKeySchema = z.object({
  key: z.string().min(8, "Access key must be at least 8 characters"),
});

type AccessKeyFormData = z.infer<typeof accessKeySchema>;

interface AccessKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string) => void;
}

const AccessKeyModal = ({ isOpen, onClose, onSuccess }: AccessKeyModalProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AccessKeyFormData>({
    resolver: zodResolver(accessKeySchema)
  });
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: AccessKeyFormData) => {
    try {
      setError(null);
      const response = await apiRequest("POST", "/api/validate-key", data);
      const responseData = await response.json();
      
      if (responseData.success) {
        toast({
          title: "Access Granted!",
          description: "Your secure proxy session has been activated.",
          variant: "default",
        });
        onSuccess(responseData.token);
      } else {
        setError(responseData.message || "Invalid access key");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      toast({
        title: "Error",
        description: "Failed to validate access key. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        className="bg-[#2A2A2A] rounded-xl p-8 max-w-md w-full shadow-2xl relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[#FF3A3A]/10 p-3 rounded-full">
            <Key className="h-10 w-10 text-[#FF3A3A]" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-3 text-center">Unlock Secure Proxy</h2>
        <p className="text-[#F5F5F5] mb-6 text-center">
          Enter your PY-Partners access key to activate the secure proxy service.
        </p>
        
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-[#1A1A1A] p-3 rounded-lg text-center">
            <Lock className="h-6 w-6 text-[#FF3A3A] mx-auto mb-1" />
            <span className="text-xs text-gray-300">Encrypted</span>
          </div>
          <div className="bg-[#1A1A1A] p-3 rounded-lg text-center">
            <Shield className="h-6 w-6 text-[#FF3A3A] mx-auto mb-1" />
            <span className="text-xs text-gray-300">Protected</span>
          </div>
          <div className="bg-[#1A1A1A] p-3 rounded-lg text-center">
            <Key className="h-6 w-6 text-[#FF3A3A] mx-auto mb-1" />
            <span className="text-xs text-gray-300">Authorized</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Label htmlFor="key" className="text-sm font-medium text-[#F5F5F5] mb-2">Access Key</Label>
            <Input
              id="key"
              type="text"
              className="bg-[#121212] border border-gray-700 text-white rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FF3A3A]"
              placeholder="Enter your access key"
              {...register("key")}
            />
            {errors.key && <p className="text-red-500 text-sm mt-1">{errors.key.message}</p>}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          
          <Button 
            type="submit" 
            className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white w-full py-3 rounded-md transition duration-300 font-semibold text-lg h-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Validating..." : "Activate Proxy"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default AccessKeyModal;