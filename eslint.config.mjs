import js from '@eslint/js';
import globals from 'globals';

import {
  configs,
  plugins,
} from 'eslint-config-airbnb-extended';

export default [
  {
    ignores: [
      'coverage/**',
      'mochawesome-report/**',
      'test-results/**',
    ],
  },

  js.configs.recommended,

  plugins.stylistic,
  plugins.importX,

  ...configs.base.recommended,

  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },

    rules: {
      'class-methods-use-this': 'off',
      '@stylistic/arrow-parens': 'off',
      'prefer-arrow-callback': 'off',
      'func-names': 'off',
      '@stylistic/object-curly-newline': 'off',
    },
  },
];
