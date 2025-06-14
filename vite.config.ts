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
      external: [
        '@safe-global/safe-apps-sdk',
        '@safe-global/safe-apps-provider'  // додав сюди
      ],
    },
  },
  resolve: {
    alias: {
      '@safe-globalThis/safe-apps-sdk': '@safe-global/safe-apps-sdk',
      '@safe-globalThis/safe-apps-provider': '@safe-global/safe-apps-provider'
    }
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['@wagmi/core', 'wagmi', 'viem'],
    exclude: ['@noble/hashes'],
  },
});
