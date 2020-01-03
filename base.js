const path = require('path');

module.exports = {
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": path.join(__dirname, './typescript.js'),
    },
    {
      "files": ["**/*.js", "**/*.jsx"],
      "extends": path.join(__dirname, './javascript.js'),
    },
  ],
};
