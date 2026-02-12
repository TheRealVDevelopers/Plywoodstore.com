import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['dist', 'node_modules', '*.config.js', '*.config.ts'],
  },
];
