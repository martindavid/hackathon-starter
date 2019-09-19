'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'operator-linebreak': OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'array-bracket-spacing': [2, 'always'],
    'jsx-quotes': [1, 'prefer-single'],
    'jsx-a11y/no-static-element-interactions': 0,
    'max-len': ['error', { code: 80, ignoreTrailingComments: true }],
    'no-use-before-define': [2, 'nofunc'],
    'no-shadow': 0,
    'prefer-const': 1,
    'quote-props': [1, 'consistent-as-needed'],
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'import/no-unresolved': 'off',
    'accessor-pairs': OFF,
    'brace-style': [ERROR, '1tbs'],
    'comma-dangle': [ERROR, 'always-multiline'],
    'consistent-return': OFF,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    eqeqeq: [ERROR, 'allow-null'],
    indent: OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'no-bitwise': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, { args: 'none' }],
    'no-use-before-define': OFF,
    'no-useless-concat': OFF,
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'valid-typeof': [ERROR, { requireStringLiterals: true }],
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  globals: {
    window: true,
    fetch: true,
  },
};
