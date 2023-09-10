import { defineConfig, presetUno } from 'unocss';
import type { UserConfig } from 'unocss';

/**
 * 问: 为什么没有直接使用 export default defineConfig(...) ?
 * 答:
 * 1. https://github.com/microsoft/TypeScript/issues/42873
 * 2. https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
 */

// https://unocss.dev/guide/config-file
const config: UserConfig = defineConfig({
  presets: [presetUno()],
});

export default config;
