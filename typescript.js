module.exports = {
  "parserOptions": {
    "sourceType": "module",
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "prefer-spread": "off",
  },
  "extends": ["plugin:@typescript-eslint/recommended"],
};
