module.exports = {
  ignorePatterns: ["example", ".eslintrc.cjs", "rollup.config.mjs"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
