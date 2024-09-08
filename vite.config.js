import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({  devOptions: {
      enabled: true,  
    },
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: 'My Vite PWA',
        short_name: 'VitePWA',
        description: 'A Progressive Web App built with Vite and React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', 
       
        start_url: '/',
        icons: [
          {
            src: 'https://via.placeholder.com/192',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://via.placeholder.com/512',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'Screenshot (135).png', 
            sizes: '1600x900',
            type: 'image/png',
          },  {
            src: 'Screenshot (7).png',  
            sizes: '1920x1080',
            type: 'image/png',
            form_factor: 'wide',  
          },
        ],
        orientation: 'portrait',
    
        form_factor: 'wide',
      },
    }),
  ],
});
