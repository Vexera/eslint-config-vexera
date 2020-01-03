const path = require('path');

module.exports = {
  extends: path.join(__dirname, './base.js'),
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
};
