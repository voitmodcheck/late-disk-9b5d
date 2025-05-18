import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

// WXR Proxy - Enhanced version for iframe display
export function createWXRProxy() {
  return createProxyMiddleware({
    target: 'https://example.com',
    changeOrigin: true,
    secure: false,
    followRedirects: true,
    
    // Configure to not skip all HTML content modifications
    selfHandleResponse: false,
    
    // Handle target URL from query parameter
    router: (req: any) => {
      const targetUrl = req.query.url as string;
      if (!targetUrl) {
        return "https://example.com";
      }
      
      if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        return `https://${targetUrl}`;
      }
      
      console.log(`WXR Proxy: Accessing ${targetUrl}`);
      return targetUrl;
    },
    
    // Fix to prevent redirect out of iframe
    cookieDomainRewrite: {
      "*": ""
    },
    
    // Keep the /proxy path in requests
    pathRewrite: {
      "^/proxy": ""  // Remove the /proxy prefix when forwarding
    },
    
    // Headers for the proxy request
    onProxyReq: (proxyReq: any, req: any) => {
      // Browser-like headers
      proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
      proxyReq.setHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
      proxyReq.setHeader('Accept-Language', 'en-US,en;q=0.5');
      
      // Remove headers that might cause CORS issues
      proxyReq.removeHeader('origin');
      proxyReq.removeHeader('referer');
      
      // Pass token as authorization if provided
      const token = (req as any).query.token;
      if (token) {
        proxyReq.setHeader('X-Auth-Token', token);
      }
    },
    
    // Headers for the proxy response
    onProxyRes: (proxyRes: any, req: any, res: any) => {
      // Remove headers that prevent iframe embedding
      proxyRes.headers['access-control-allow-origin'] = '*';
      delete proxyRes.headers['x-frame-options'];
      delete proxyRes.headers['content-security-policy'];
      
      // Ensure no redirects out of iframe
      res.setHeader('Access-Control-Allow-Origin', '*');
      
      // Additional headers for iframe embedding
      res.setHeader('Content-Security-Policy', 
        "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;"
      );
    }
  });
}

// Simple authentication middleware for the proxy
export function wxrProxyAuth(req: Request, res: Response, next: NextFunction) {
  // Allow access for demo purposes
  console.log("WXR Proxy: Authentication middleware called");
  next();
}