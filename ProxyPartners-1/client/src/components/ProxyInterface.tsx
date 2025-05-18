import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Lock, Shield, ExternalLink, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProxyInterfaceProps {
  token: string;
}

const ProxyInterface = ({ token }: ProxyInterfaceProps) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [proxiedUrl, setProxiedUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { toast } = useToast();

  // Example sites for internet censorship evasion demo
  const demoSites = [
    { name: "Wikipedia", url: "wikipedia.org" },
    { name: "BBC News", url: "bbc.com/news" },
    { name: "DuckDuckGo", url: "duckduckgo.com" },
    { name: "ProtonMail", url: "proton.me" }
  ];

  // Auto-fill the URL field with the selected demo site
  const selectDemoSite = (demoUrl: string) => {
    setUrl(demoUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      // Format the URL properly
      let formattedUrl = url;
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = `https://${formattedUrl}`;
      }
      
      // Set the proxied URL state for display
      setProxiedUrl(formattedUrl);
      
      // Set the iframe source directly to our proxy
      if (iframeRef.current) {
        // Construct the proxy URL with token and target URL
        const proxyUrl = `/proxy?url=${encodeURIComponent(formattedUrl)}&token=${encodeURIComponent(token)}`;
        
        // Set iframe attributes
        iframeRef.current.name = 'proxy-frame';
        iframeRef.current.src = proxyUrl;
        
        // Show success message
        toast({
          title: "Connection Established",
          description: `Now browsing ${formattedUrl} through secure proxy`,
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Error accessing proxy:", error);
      setError("Failed to access the requested URL. Please try again.");
      toast({
        title: "Error",
        description: "Failed to access the requested URL. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PY-Partners Secure Proxy</h2>
          <p className="text-[#F5F5F5] max-w-2xl mx-auto">
            Access websites freely without censorship using our encrypted proxy service.
          </p>
          <div className="flex items-center justify-center mt-2">
            <div className="bg-[#FF3A3A]/10 px-3 py-1 rounded-full flex items-center text-sm text-[#FF3A3A]">
              <Lock className="h-4 w-4 mr-1" />
              <span>Secure Connection Active</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-[#2A2A2A] rounded-xl p-6 shadow-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., wikipedia.org)"
                className="bg-[#121212] border border-gray-700 text-white rounded-md pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FF3A3A]"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-6 py-3 rounded-md transition duration-300 font-semibold h-auto flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Browse"}
              <ArrowRight size={18} />
            </Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </motion.div>
        
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="text-[#F5F5F5] text-sm mr-2 flex items-center">
              <Info className="w-4 h-4 mr-1" /> Quick Access:
            </div>
            {demoSites.map((site, index) => (
              <button
                key={index}
                onClick={() => selectDemoSite(site.url)}
                className="text-sm bg-[#1A1A1A] hover:bg-[#FF3A3A]/10 text-[#F5F5F5] hover:text-[#FF3A3A] px-3 py-1 rounded-full transition-colors"
              >
                {site.name}
              </button>
            ))}
          </div>
        </motion.div>
        
        {proxiedUrl && (
          <motion.div
            className="flex items-center justify-between px-4 py-2 bg-[#1A1A1A] rounded-t-lg border-b border-[#2A2A2A] text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center">
              <Lock className="h-4 w-4 text-[#FF3A3A] mr-2" />
              <span className="text-[#F5F5F5]">
                Proxying: <span className="text-[#FF3A3A]">{proxiedUrl}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#FF3A3A]/10 px-2 py-0.5 rounded-full text-xs text-[#FF3A3A]">
                Encrypted
              </div>
              <div className="bg-[#FF3A3A]/10 px-2 py-0.5 rounded-full text-xs text-[#FF3A3A]">
                Secure
              </div>
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="flex-grow mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`bg-[#121212] ${!proxiedUrl ? 'rounded-xl' : 'rounded-b-xl'} border border-gray-800 h-[60vh] overflow-hidden relative`}>
            {/* Security notice when no URL is loaded */}
            {!proxiedUrl && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <Lock className="w-16 h-16 text-[#FF3A3A] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Internet Censorship Evasion Proxy</h3>
                <p className="text-[#F5F5F5] max-w-lg mb-6">
                  Enter a URL above to browse securely through our encrypted proxy. Your connection is protected and your identity is shielded.
                </p>
                <div className="max-w-md text-sm text-[#F5F5F5]/70">
                  <p className="mb-2">🔒 All traffic is encrypted end-to-end</p>
                  <p className="mb-2">🛡️ Your IP address is hidden from websites you visit</p>
                  <p>🌎 Access globally restricted content with ease</p>
                </div>
              </div>
            )}
            
            {/* The iframe for displaying the proxied content */}
            <iframe
              ref={iframeRef}
              title="Proxy Browser"
              className={`w-full h-full ${!proxiedUrl ? 'opacity-0' : 'opacity-100'}`}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              seamless
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center text-center">
            <Shield className="text-[#FF3A3A] w-10 h-10 mb-4" />
            <h3 className="text-lg font-medium mb-2">Enhanced Privacy</h3>
            <p className="text-[#F5F5F5]">Your browsing activity is encrypted and cannot be tracked by third parties or ISPs.</p>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center text-center">
            <Globe className="text-[#FF3A3A] w-10 h-10 mb-4" />
            <h3 className="text-lg font-medium mb-2">Bypass Censorship</h3>
            <p className="text-[#F5F5F5]">Access websites blocked in your region and navigate the internet without restrictions.</p>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center text-center">
            <Lock className="text-[#FF3A3A] w-10 h-10 mb-4" />
            <h3 className="text-lg font-medium mb-2">Secure Connection</h3>
            <p className="text-[#F5F5F5]">All traffic is protected with military-grade encryption to ensure maximum security.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProxyInterface;