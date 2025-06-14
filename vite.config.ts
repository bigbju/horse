import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['@safe-global/safe-apps-sdk']
    }
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['@wagmi/core', 'wagmi', 'viem'],
    exclude: ['@noble/hashes']
  }
});
