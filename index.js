module.exports = {
  "extends": "airbnb",
  "ignore": [
    "public/bundle.js"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "globals": {
    "expect": true,
    "sinon": true,
    "mount": true,
    "render": true,
    "shallow": true
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "mocha/no-exclusive-tests": "error",
    "no-await-in-loop": "off",
    "arrow-body-style": "off",
    "camelcase": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-functions": "off",
    "react/forbid-prop-types": "off",
    "no-plusplus": "off",
    "comma-dangle": ["error", {
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "ignore"
    }]
  }
}
