# 关于我

花名阿牛，安徽蚌埠人，92年生，已婚，目前居住在合肥。

![](./.img/photo.jpg)

## 职业经历

- 2020.4 ~ 至今 春华健康科技有限公司
  - 前端负责人
- 2014.3 ~ 2019.9 浙江诺诺网络科技有限公司
  - 财税业务线前端负责人
- 2013.3 ~ 2014.3 安徽万成达信息科技有限公司
  - PHP开发工程师 & 前端开发工程师

## 技术标签

`React`
`Vue`
`Javascript`
`Typescript`
`Electron`
`Uniapp`
`Webpack`
`Vite`
`小程序`

## 主要项目

import * as img from './img.js';

- 春华健康科技有限公司
  - <a>康保通直付</a>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[
        { url: img.kbt.mp, title: '小程序' },
        { url: img.kbt.app, title: 'APP' },
        { url: img.kbt.h5, title: 'H5' },
      ].map(({ url, title }) => (
        <div key={title} style={{ textAlign: 'center', marginRight: 20, marginTop: 4 }}>
          <img src={url} style={{ width: 160, height: 160 }} />
          <div> { title } </div>
        </div>
      ))}
    </div>
  - <a>健康权益卡</a>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[
        { url: img.card.mp, title: '小程序' },
        { url: img.card.h5, title: 'H5' },
      ].map(({ url, title }) => (
        <div key={title} style={{ textAlign: 'center', marginRight: 20, marginTop: 4 }}>
          <img src={url} style={{ width: 160, height: 160 }} />
          <div> { title } </div>
        </div>
      ))}
    </div>
  - [康保通官网](https://kangbaotong.net/)
  - [收银结算系统](https://e.kangbaotong.net/)
  - 优健保
  - 职康云
  - 数字健康云
- 杭州诺诺网络科技有限公司
  - [诺诺云财税](https://cloud.nuonuo.com/)
  - [诺诺电子发票](https://fp.nuonuo.com/)
  - [诺诺云办公](https://oa.nuonuo.com/)
  - [诺诺门户](https://www.nuonuo.com/)
  - [诺诺商城](https://www.axnsc.com/)
- 安徽万成达信息科技有限公司
  - [好居网门户](https://haoju.cn/)

## 开源作品

- [unixjs](https://github.com/unixjs/unixjs) uniapp ui components/sdk/plugins 
- [nuomi](https://github.com/nuomijs/nuomi) 基于react+redux封装的单页应用框架
- [docfree](https://github.com/yinjiazeng/docfree) 基于webpack+nuomi开发的文档生成工具（本站基于该工具生成）
- [nginx-gui](https://github.com/yinjiazeng/NginxGUI) 基于electron+nuomi开发的Nginx图形化管理工具
- [readmine-helper](https://github.com/yinjiazeng/readmine-helper) readmine谷歌浏览器插件，提升使用体验
- [nui](https://github.com/yinjiazeng/nui) 基于jQuery封装的模块化UI框架
- [gulp-nui](https://github.com/yinjiazeng/gulp-nui) nui打包工具
- [nui-loader](https://github.com/yinjiazeng/gulp-nui) nui框架webpack模块解释器