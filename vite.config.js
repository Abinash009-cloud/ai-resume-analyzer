// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ai-resume-analyzer/', // ← important for GitHub Pages!
  plugins: [react()],
});
