import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
import { resolve } from 'path';
// import { defineConfig } from 'vite'
const projectRoot = resolve(__dirname, '..');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: `${resolve(projectRoot, 'src')}`,
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'main',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
