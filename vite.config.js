import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
  },
  build: {
    outDir: 'dist', // Pasta de saída do build
  },
});
