import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'i.pinimg.com', // Pinterest image host
      // Add other domains you need here
    ],
    
    // Optional: You can add more image optimization settings
     // 60 seconds minimum cache time
  }
  
};

export default nextConfig;