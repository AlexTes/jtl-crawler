module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },

  extends: 'airbnb-base',

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    }
  },

  plugins: [
    'promise',
    'flowtype'
  ],

  rules: {
      "import/no-extraneous-dependencies": "off",
      "key-spacing": [
        "error",
        {
          "align": "value"
        }
      ],
      "promise/avoid-new": "warn",
      "promise/catch-or-return": "error",
      "promise/param-names": "error",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn"
  }
}
