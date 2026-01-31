import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { existsSync, readdirSync, mkdirSync, copyFileSync, statSync } from 'fs';

// 使用相对路径，支持任意部署位置
const base = '';

/**
 * 复制目录的递归函数
 * @param {string} src - 源目录
 * @param {string} dest - 目标目录
 */
function copyDirSync(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  
  const files = readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    const stat = statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Vite 插件：构建后复制 src/assets 到 dist
 */
function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    closeBundle() {
      const srcAssets = resolve(__dirname, 'src/assets');
      const distAssets = resolve(__dirname, 'dist/assets');
      
      if (existsSync(srcAssets)) {
        copyDirSync(srcAssets, distAssets);
        console.log('✓ Assets copied to dist/assets');
      }
    }
  };
}

export default defineConfig({
  plugins: [copyAssetsPlugin()],
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