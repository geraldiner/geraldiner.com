// eslint.config.js
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import astroPlugin from 'eslint-plugin-astro';

export default [
  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsPlugin.parser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // Astro recommended rules (includes parser)
  ...astroPlugin.configs.recommended,

  // Prettier formatting
  {
    files: ['**/*.{js,ts,astro}'],
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    ignores: ['node_modules', 'dist', '.astro', 'build'],
  },
];
