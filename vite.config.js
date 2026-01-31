import { defineConfig } from 'vite';
import { resolve } from 'path';

// GitHub Pages 仓库名称（如果是用户名.github.io 则留空）
const base = process.env.GITHUB_PAGES === 'true' ? '/web-ddl/' : '/';

export default defineConfig({
  base,
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['src/js/main.js']
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/i.test(assetInfo.name)) {
            return 'css/[name]-[hash][extname]';
          }
          if (/\.(jpg|jpeg|png|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return 'images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    cssMinify: true,
    assetsInlineLimit: 4096
  },
  css: {
    devSourcemap: true
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173
  }
});