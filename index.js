module.exports = {
  "extends": "airbnb",
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
    "getMessageDataAndTrain": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "mocha/no-exclusive-tests": "error",
    "no-await-in-loop": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "camelcase": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "no-alert": "off",
    "max-len": ["error", { "code": 150 }, ],
    "react/prop-types": "off",
    "react/prefer-stateless-functions": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "no-return-assign": "off",
    "no-unused-expressions": "off",
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
