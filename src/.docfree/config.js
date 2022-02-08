const path = require('path');
const FrontEndPath = '/front-end';
const BackEndPath = '/back-end';

module.exports = {
  title: '前端阿牛の博客',
  mode: 'blog',
  dest: '../../docs',
  nav: [{
    text: '前端',
    to: FrontEndPath,
    menus: [
      'Javascript', 
      'Typescript', 
      'React', 
      'Vue', 
      'JQuery', 
      'Webpack', 
      'CSS', 
      'HTML',
    ].map((item) => ({
      text: item,
      to: `${FrontEndPath}/${item}`,
    }))
  }, {
    text: '后端',
    to: BackEndPath,
    menus: [
      'Nginx',
      'Nodejs',
    ].map((item) => ({
      text: item,
      to: `${BackEndPath}/${item}`,
    })),
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
    path: 'https://github.com/yinjiazeng/blog/blob/master/docs'
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
