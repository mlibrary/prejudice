import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  pluginJs.configs.all,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  stylistic.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/spaced-comment': ['error', 'always', { block: { balanced: true } }],
      'arrow-body-style': ['error', 'always'],
      'max-lines-per-function': 'off',
      'max-statements': 'off',
      'no-magic-numbers': 'off',
      'no-ternary': 'off',
      'one-var': ['error', { initialized: 'never' }],
      'sort-imports': ['error', { ignoreCase: true }]
    }
  }
];
