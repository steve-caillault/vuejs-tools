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
          sprite: '../../../src/images/icons.svg'
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
      '@tools': path.resolve(__dirname, 'src/js/tools'),
      '@components': path.resolve(__dirname, 'src/js/components'),
      '@compositions': path.resolve(__dirname, 'src/js/compositions'),
      '@stores': path.resolve(__dirname, 'src/js/stores'),
      '@data': path.resolve(__dirname, 'src/js/data'),
      /***/
      '@images': path.resolve(__dirname, 'src/images'),
      '@public': path.resolve(__dirname, 'public'),
      '@sass': path.resolve(__dirname, 'src/sass')
    }
  }
});

export default options;
