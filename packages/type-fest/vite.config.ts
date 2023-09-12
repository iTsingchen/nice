/// <reference types="vitest" />

import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@nice/type-fest',
      fileName: 'type-fest',
    },
  },
  plugins: [],
  test: {},
});
