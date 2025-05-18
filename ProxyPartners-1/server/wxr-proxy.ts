import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

/**
 * WXR Proxy - Web Proxy for Internet Censorship Evasion
 * This implementation handles iframe-based proxying to display content in our application
 */
export function createWXRProxy() {
  const wxrProxy = createProxyMiddleware({
    // Default target (will be overridden by the router)
    target: 'https://example.com',
    
    // Core proxy behavior
    changeOrigin: true,
    followRedirects: true,
    secure: false,
    
    // Fix iframe loading issues with cookies/domains
    cookieDomainRewrite: {
      '*': ''
    },
    
    // Remove /proxy from incoming paths
    pathRewrite: (path, req) => {
      // Get the path from the target URL
      const targetUrl = req.query.url as string;
      if (!targetUrl) return '/';
      
      try {
        const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
        return urlObj.pathname + urlObj.search;
      } catch (error) {
        console.error('Error parsing URL:', error);
        return '/';
      }
    },
    
    // Route requests based on the URL query parameter
    router: (req) => {
      const targetUrl = req.query.url as string;
      if (!targetUrl) return 'https://example.com';
      
      // Ensure URL has protocol
      if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        return `https://${targetUrl}`;
      }
      
      console.log(`WXR Proxy: Accessing ${targetUrl}`);
      return targetUrl;
    },
    
    // Handle HTTP headers to fix CORS and embedding issues
    onProxyReq: (proxyReq, req, res) => {
      // Set convincing browser headers
      proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
      proxyReq.setHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
      proxyReq.setHeader('Accept-Language', 'en-US,en;q=0.5');
      
      // Remove headers that cause CORS issues
      proxyReq.removeHeader('origin');
      proxyReq.removeHeader('referer');
      
      // Forward any auth token if provided
      const token = req.query.token as string;
      if (token) {
        proxyReq.setHeader('Authorization', `Bearer ${token}`);
      }
    },
    
    // Modify response headers to make content display correctly in iframe
    onProxyRes: (proxyRes, req, res) => {
      // CORS headers to prevent embedding issues
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
      
      // Remove headers that prevent iframe embedding
      res.removeHeader('X-Frame-Options');
      res.removeHeader('Content-Security-Policy');
      
      // Set permissive CSP to allow content to load in iframe
      res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;");
      
      // Handle content type-specific issues
      const contentType = proxyRes.headers['content-type'] || '';
      
      if (contentType.includes('text/html')) {
        // For HTML content, remove problematic headers
        delete proxyRes.headers['content-security-policy'];
        delete proxyRes.headers['x-frame-options'];
      }
      
      // Fix the location header to keep users in the proxy
      if (proxyRes.headers.location) {
        const targetUrl = req.query.url as string;
        const token = req.query.token as string;
        
        if (targetUrl) {
          try {
            // Get the base URL (protocol + domain)
            const baseUrl = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`).origin;
            const currentLocation = proxyRes.headers.location.toString();
            let newLocation;
            
            // Handle different types of URLs in the location header
            if (currentLocation.startsWith('http')) {
              // Full URL - proxy it directly
              newLocation = `/proxy?url=${encodeURIComponent(currentLocation)}`;
            } else if (currentLocation.startsWith('/')) {
              // Relative URL - append to the base
              newLocation = `/proxy?url=${encodeURIComponent(baseUrl + currentLocation)}`;
            } else {
              // Other URLs - treat as relative
              newLocation = `/proxy?url=${encodeURIComponent(baseUrl + '/' + currentLocation)}`;
            }
            
            // Add token if available
            if (token) {
              newLocation += `&token=${encodeURIComponent(token)}`;
            }
            
            // Replace the location header
            proxyRes.headers.location = newLocation;
          } catch (error) {
            console.error('Error processing location header:', error);
          }
        }
      }
    }
  });
  
  return wxrProxy;
}

/**
 * Authentication middleware for the WXR Proxy
 * This is a simplified version that allows all requests for demo purposes
 */
export function wxrProxyAuth(req: Request, res: Response, next: NextFunction) {
  // For demo purposes, allow all requests
  console.log("WXR Proxy: Authentication check passed");
  next();
}