import path from 'path';
/***/
import { defineConfig } from 'vite';
/***/
import vue from '@vitejs/plugin-vue'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// @see https://vitejs.dev/config/

/**
 * Retourne le plugin de génération du sprite SVG
 * @return PluginOption
 */
const getSvgSpritePlugin = (() => {
  return ViteSvgSpriteWrapper({
    icons: 'src/images/icons/sources/*.svg',
    outputDir: 'public/images',
    sprite: {
      mode: {
        symbol: {
          sprite: '../icons.svg'
        }
      },
      shape: {
        id: {
          generator: 'icon-'
        }
      }
    }
  });
});

const options = defineConfig({

  root: './',

  build: {
    outDir: 'public'
  },

  plugins: [
    vue(),
    getSvgSpritePlugin()
  ],
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
