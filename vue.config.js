module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
};
