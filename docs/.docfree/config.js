const path = require('path');

module.exports = {
  title: '前端阿牛の博客',
  mode: 'blog',
  async: true,
  nav: [{
    text: '技术',
    to: '/tech',
    menus: [{
      text: 'JavaScript',
      to: '/tech/javascript',
    }, {
      text: '小程序',
      to: '/tech/miniprogram',
    }, {
      text: 'Electron',
      to: '/tech/electron',
    }, {
      text: 'Uniapp',
      to: '/tech/uniapp',
    }, {
      text: 'Github',
      to: '/tech/github',
    }]
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
    path: 'https://github.com/yinjiazeng/yinjiazeng.github.io/tree/master/docs'
  },
  footer: path.resolve(__dirname, './footer.js'),
  plugins: [
    'emoji'
  ],
};
