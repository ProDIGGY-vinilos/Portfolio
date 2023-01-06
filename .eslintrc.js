module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // extends: ['standard', 'prettier'],
  extends: ['plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        bracketSpacing: true,
        bracketSameLine: true,
        endOfLine: 'auto'
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}
