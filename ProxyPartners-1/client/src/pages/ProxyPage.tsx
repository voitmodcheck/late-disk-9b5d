import { useState } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProxyInterface from "@/components/ProxyInterface";
import AccessKeyModal from "@/components/AccessKeyModal";

const ProxyPage = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [showKeyModal, setShowKeyModal] = useState(true);

  const handleKeySuccess = (token: string) => {
    setAccessToken(token);
    setShowKeyModal(false);
  };

  return (
    <>
      <Helmet>
        <title>PY-Partners - Secure Proxy Access</title>
        <meta name="description" content="Access the internet freely with PY-Partners secure proxy service." />
        <meta property="og:title" content="PY-Partners - Secure Proxy Access" />
        <meta property="og:description" content="Browse securely and privately with our encryption technology." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-16">
        {accessToken ? (
          <ProxyInterface token={accessToken} />
        ) : (
          <div className="h-screen flex items-center justify-center bg-[#121212]">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Access Required</span>
              </h1>
              <p className="text-lg text-[#F5F5F5] mb-8 max-w-lg mx-auto">
                Please provide your access key to use the PY-Partners secure proxy service.
              </p>
              <button
                onClick={() => setShowKeyModal(true)}
                className="bg-[#FF3A3A] hover:bg-[#FF7676] text-white px-8 py-3 rounded-md transition duration-300 font-semibold text-lg"
              >
                Enter Access Key
              </button>
            </div>
          </div>
        )}
      </main>
      
      <AccessKeyModal
        isOpen={showKeyModal}
        onClose={() => setShowKeyModal(false)}
        onSuccess={handleKeySuccess}
      />
      
      <Footer />
    </>
  );
};

export default ProxyPage;