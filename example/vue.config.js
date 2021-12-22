const path = require(`path`);
const pkg = require('./package.json');

module.exports = {
  publicPath: '/uivjs-admin/',
  pages: {
    index: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      // filename: 'index.html',
      title: 'uiv admin',
      description: pkg.description,
      keywordss: pkg.keywords.join(','),
    },
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`)
      }
    }
  }
};