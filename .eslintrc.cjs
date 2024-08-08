module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true, "cypress/globals": true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'cypress'],
  rules: {
    'no-unexpected-multiline': 'error',
    'quotes': ['error', 'single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    "no-underscore-dangle": ['warn'],
    'no-use-before-define': ['warn'],
    'object-shorthand':['warn'],
    'no-return-assign':['warn'],
    'no-param-reassign':['warn'],
    'object-curly-newline': 'off'
  },
}
