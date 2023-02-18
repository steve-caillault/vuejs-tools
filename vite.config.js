import path from 'path'
/***/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @see https://vitejs.dev/config/

const options = defineConfig({

  root: './',

  build: {
    outDir: 'public'
  },

  plugins: [vue()],
  resolve: {
    alias: {
      '@js': path.resolve(__dirname, 'src/js'),
      '@components': path.resolve(__dirname, 'src/js/components'),
      /***/
      '@sass': path.resolve(__dirname, 'src/sass')
    }
  }
});

export default options;
