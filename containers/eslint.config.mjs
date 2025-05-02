import js from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';
import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['*coverage/', 'node_modules', '*dist/']),
  {files: ['**/*.{js,mjs,cjs,ts}'], plugins: {js}, extends: ['js/recommended']},
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {globals: globals.browser}
  },
  tseslint.configs.recommended,
  {
    // update this to match your test files
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: {jest: pluginJest},
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
]);