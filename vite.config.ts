import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  // ✅ Must exactly match your GitHub repository name (case-sensitive)
  base: '/Portfolio/',

  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false
    }),
  ],

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },

  // ✅ Helps in local development (but doesn’t affect GitHub Pages)
  server: {
    open: true,
  },

  // ✅ Optional: Fixes asset resolution for some edge cases
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
