const path = require('path');
const techPath = '/tech';

module.exports = {
  title: '前端阿牛の博客',
  mode: 'blog',
  dest: '../../docs',
  nav: [{
    text: '技术',
    to: techPath,
    menus: [
      'uniapp',
      'electron',
    ].map((item) => ({
      text: item,
      to: `${techPath}/${item}`,
    }))
  }, {
    text: '生活',
    to: '/life',
  }, {
    text: '关于',
    to: '/about',
  }, {
    text: 'GitHub',
    to: 'https://github.com/yinjiazeng',
  }],
  pageExtra: {
    path: 'https://github.com/yinjiazeng/yinjiazeng.github.io/tree/master/src'
  },
  footer: path.resolve(__dirname, './footer.js'),
  plugins: [
    'emoji'
  ],
};
