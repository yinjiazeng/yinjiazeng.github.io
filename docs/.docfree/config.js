const path = require('path');

module.exports = {
  title: '前端阿牛の博客',
  mode: 'blog',
  async: true,
  nav: [{
    text: '技术',
    to: '/tech',
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
    'emoji',
    ['docfree-valine', {
      appId: 'MD2yAhzrq1utFR2VxH2oU1YF-gzGzoHsz',
      appKey: 'qbn6SClpr7xzhzHdtWNnNSYi',
    }]
  ],
};
