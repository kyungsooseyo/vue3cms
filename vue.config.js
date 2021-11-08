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
  }
};
