// vite.config.ts  (or vite.config.js)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssVite from '@tailwindcss/vite';   // 👈 NEW

export default defineConfig({
  plugins: [
    react(),
    tailwindcssVite(),                              // 👈 NEW
  ],
});
