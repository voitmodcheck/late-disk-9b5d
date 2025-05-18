import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { createWXRProxy, wxrProxyAuth } from "./wxr-proxy";

// Access key validation schema
const accessKeySchema = z.object({
  key: z.string().min(8, "Access key must be at least 8 characters"),
});

// Single valid key (in a real application, this would be stored securely in a database)
const validKey = "Y?24V/^SeGgwedg";

export async function registerRoutes(app: Express): Promise<Server> {
  // Check if access key is valid
  app.post("/api/validate-key", async (req, res) => {
    try {
      const { key } = accessKeySchema.parse(req.body);
      
      // Only accept the specific key
      if (key === validKey) {
        // Return success with a token
        res.status(200).json({ 
          success: true, 
          token: `token_${key}_${Date.now()}`,
          message: "Access granted" 
        });
      } else {
        res.status(403).json({ 
          success: false, 
          message: "Invalid access key" 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // WXR Proxy middleware setup
  // This middleware handles the actual proxying with CSS and JS fixes
  app.use("/proxy", wxrProxyAuth, createWXRProxy());

  const httpServer = createServer(app);

  return httpServer;
}
