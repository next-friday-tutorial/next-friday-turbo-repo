import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  format: ['cjs', 'esm'],
  sourcemap: true,
  target: 'es2019',
  entry: ['src/index.ts'],
  banner: {
    js: "'use client'",
  },
});
