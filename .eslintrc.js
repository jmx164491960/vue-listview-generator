module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // https://github.com/prettier/prettier/issues/3847
    'space-before-function-paren': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
