const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('public', resolve('public'))
      .set('vendor', resolve('src/vendor'));
  },
  //? 这个按需引入的配置好像不太管用呢
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      })
    ]
  }
};
