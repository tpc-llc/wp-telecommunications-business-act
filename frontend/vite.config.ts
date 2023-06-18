import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  base: '/wp-content/plugins/wp-telecommunications-business-act/frontend/dist/',
  plugins: [react(), dynamicImport()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: [
        'src/providers/ServiceSelect.tsx'
      ],
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/module-[name]-[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
