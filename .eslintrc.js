module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    //, 这个能够用prettier来把eslint覆盖掉（解除eslint的报错，以后保存的文件只遵循prettier的规范）,最后一配置会把前面的覆盖
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //= 这个用来控制require path中eslint报错，可以直接从eslint报错复制过来，然后写上off就可以
    '@typescript-eslint/no-var-requires': 'off'
  }
};
