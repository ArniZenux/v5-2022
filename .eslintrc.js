module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'max-len': ["error", { "code": 100 }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off', // e-ð issue með typescript :/
    'react/jsx-one-expression-per-line': 'off',
  },
};