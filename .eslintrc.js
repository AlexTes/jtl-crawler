module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },

  extends: 'airbnb-base'

  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    }
    parser: 'babel-eslint',
    sourceType: 'module',
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
