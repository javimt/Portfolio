module.exports = [{
  env: { browser: true, es2020: true },
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "eslint:all",
  ],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: {
    "jsx": true
  } },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
}];
