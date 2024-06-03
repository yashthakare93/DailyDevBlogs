// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      path: 'path-browserify',
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['source-map-js'],
  },
  assetsInclude: ['**/*.html'],
});
