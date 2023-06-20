module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  overrides: [{
    env: {
      node: true
    },
    files: ['.eslintrc.{js,cjs}'],
    parserOptions: {
      sourceType: 'script'
    }
  }],
  settings: {
    react: {
      "version": "detect"
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  ignorePatterns: ['client.msw.ts', 'client.schemas.ts', 'client.ts', '*.config.ts', '*.d.ts']
};