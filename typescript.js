module.exports = {
  "parserOptions": {
    "sourceType": "module",
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-ts-ignore": [
      "error",
    ],
    "@typescript-eslint/ban-types": "error",
    "camelcase": "error",
    "@typescript-eslint/camelcase": [
      "error",
    ],
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true,
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false,
        },
      },
    ],
    "no-array-constructor": [
      "off",
    ],
    "@typescript-eslint/no-array-constructor": [
      "error",
    ],
    "no-empty-function": [
      "off",
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": [
      "warn",
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
    ],
    "no-unused-vars": [
      "off",
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
    ],
    "no-use-before-define": [
      "off",
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": [
      "error",
    ],
    "prefer-spread": [
      "error",
    ],
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
      },
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first",
        },
        "FunctionExpression": {
          "parameters": "first",
        },
      },
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": [
      "error",
      "always",
    ],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "arrow-parens": [
      "error",
      "as-needed",
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart",
    ],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-match": "error",
    "import/order": "off",
    "max-classes-per-file": [
      "error",
      1,
    ],
    "max-len": "off",
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all",
      },
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "object-shorthand": "off",
    "one-var": [
      "error",
      "never",
    ],
    "prefer-arrow/prefer-arrow-functions": "error",
    "quote-props": [
      "error",
      "consistent-as-needed",
    ],
    "radix": "off",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never",
      },
    ],
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "import-spacing": true,
          "jsdoc-format": true,
          "no-reference-import": true,
          "one-line": [
            true,
            "check-catch",
            "check-else",
            "check-finally",
            "check-open-brace",
            "check-whitespace",
          ],
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type",
            "check-typecast",
          ],
        },
      },
    ],
  },
  "extends": ["plugin:@typescript-eslint/recommended"],
};
