import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/cluster/',
   server: {
    host: true,       
    port: 5173        
  },
  plugins: [react(), tailwindcss()],
});
