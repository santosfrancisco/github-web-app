module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'standard-react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/no-unknown-property": "error",
    "react/jsx-no-bind": ["error", {
      "ignoreDOMComponents": true,
      "allowArrowFunctions": true
    }],
    "react/prop-types": 0
  }
}
