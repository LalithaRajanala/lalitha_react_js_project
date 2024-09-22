// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    rules: {
      semi: "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        env: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          js: true,
        },
      },
    },
  },
];
