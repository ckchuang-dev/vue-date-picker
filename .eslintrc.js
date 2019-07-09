module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-vars': 1,
    semi: [2, 'never'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': [
      1,
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ],
    'vue/order-in-components': [
      1,
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'fetch',
          ['props', 'propsData'],
          'asyncData',
          'data',
          'computed',
          'methods',
          'watch',
          'LIFECYCLE_HOOKS',
          ['template', 'render'],
          'renderError'
        ]
      }
    ]
  }
}
