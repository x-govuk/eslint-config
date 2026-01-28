import eslint from "@eslint/js";
import pluginMarkdown from "@eslint/markdown";
import { defineConfig, globalIgnores } from "eslint/config";
import configPrettier from "eslint-config-prettier/flat";
import pluginImport from "eslint-plugin-import";
import pluginJsdoc from "eslint-plugin-jsdoc";
import pluginNode from "eslint-plugin-n";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{cjs,js,mjs}"],
    extends: [
      eslint.configs.recommended,
      pluginImport.flatConfigs.recommended,
      pluginJsdoc.configs["flat/recommended"],
      pluginNode.configs["flat/recommended"],
      pluginPromise.configs["flat/recommended"],
      configPrettier,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    rules: {
      // Check import or require statements are A-Z ordered
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],

      // Check for valid formatting
      "jsdoc/check-line-alignment": [
        "warn",
        "never",
        {
          wrapIndent: "  ",
        },
      ],

      // JSDoc blocks can use `@preserve` to prevent removal
      "jsdoc/check-tag-names": [
        "warn",
        {
          definedTags: ["preserve"],
        },
      ],

      // JSDoc blocks are optional by default
      "jsdoc/require-jsdoc": "off",

      // JSDoc @param required in (optional) blocks but
      // @param description is not necessary by default
      "jsdoc/require-param-description": "off",
      "jsdoc/require-param": "error",

      // Require hyphens before param description
      // Aligns with TSDoc style: https://tsdoc.org/pages/tags/param/
      "jsdoc/require-hyphen-before-param-description": "warn",

      // Maintain new line after description
      "jsdoc/tag-lines": [
        "warn",
        "never",
        {
          startLines: 1,
        },
      ],

      // Automatically use template strings
      "no-useless-concat": "error",
      "prefer-template": "error",

      // Avoid continue and else blocks after return statements in if statements
      "no-continue": "error",
      "no-else-return": "error",

      // Avoid hard to read multi assign statements
      "no-multi-assign": "error",
    },
  },
  {
    files: ["**/*.md"],
    extends: [pluginMarkdown.configs.recommended],
    language: "markdown/gfm",
    rules: {
      // Ignore GitHub alert labels
      "markdown/no-missing-label-refs": [
        "error",
        {
          allowLabels: ["!NOTE", "!TIP", "!IMPORTANT", "!WARNING", "!CAUTION"],
        },
      ],
    },
  },
  globalIgnores([
    "**/.cache/**",
    "**/dist/**",
    "**/vendor/**",

    // Lint dot files
    "!.*",
    "node_modules",
    "node_modules/.*",

    // Prevent CHANGELOG history changes
    "CHANGELOG.md",
  ]),
]);
