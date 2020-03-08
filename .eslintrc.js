module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': 0,
    'react/jsx-filename-extension': 0,
    'space-before-function-paren': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'react/jsx-one-expression-per-line': 0,
    'operator-linebreak': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/state-in-constructor': 0,
  },
};
