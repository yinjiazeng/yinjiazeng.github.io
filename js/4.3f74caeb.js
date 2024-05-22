(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1141:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.MDXContent=p;var l,r=n(1),u=(l=r)&&l.__esModule?l:{default:l},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=l?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(443));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={},f=o.Content;function p(e){var t=e.components,a=i(e,["components"]);return u.default.createElement(f,c({},d,a,{components:t}),u.default.createElement("h2",null,u.default.createElement(o.AnchorLinkEnhance,{to:"介绍"},"#"),u.default.createElement("span",null,"介绍")),u.default.createElement("p",null,"在Github上自动化部署的方案有很多，比如 ",u.default.createElement("a",{href:"https://jenkins.io/",target:"_blank"},"Jenkins")," 和 ",u.default.createElement("a",{href:"https://travis-ci.com/",target:"_blank"},"Travis-CI"),"，Github自己也推出了 ",u.default.createElement("a",{href:"https://docs.github.com/en/actions",target:"_blank"},"Github Actions"),"，相较于其他的方案使用更加方便简单，这里就以个人博客为例介绍一下如何使用Github Actions对静态站点进行自动化部署。"),u.default.createElement("h2",null,u.default.createElement(o.AnchorLinkEnhance,{to:"创建站点"},"#"),u.default.createElement("span",null,"创建站点")),u.default.createElement("p",null,"在Github上创建一个username.github.io的仓库，这里username就是当前账户的用户名，默认只有master分支，该分支用于存放博客的源文件。再新建一个docs分支，该分支用于部署Github Pages，进入Settings > Pages创建静态站点，选择docs分支，访问目录选择root，点击save保存后等待服务生效即可。"),u.default.createElement("p",null,u.default.createElement("img",{src:n(1178).default,alt:null})),u.default.createElement("p",null,"创建博客的工具有很多，比较流行的有",u.default.createElement("a",{href:"https://hexo.io/",target:"_blank"},"hexo")," 和 ",u.default.createElement("a",{href:"https://vuepress.vuejs.org/",target:"_blank"},"vuepress"),"等，可以根据自己喜好自由选择，这里使用的是 ",u.default.createElement("a",{href:"https://github.com/yinjiazeng/docfree",target:"_blank"},"docfree"),"，工具使用流程不再说明，然后在master分支将源文件提交到github上。"),u.default.createElement("h2",null,u.default.createElement(o.AnchorLinkEnhance,{to:"创建脚本"},"#"),u.default.createElement("span",null,"创建脚本")),u.default.createElement("p",null,"在Github仓库中进入Actions选项，里面包含了很多脚本程模板，我们点击 ",u.default.createElement("code",{className:"inline"},"set up a workflow yourself")," 链接创建自定义脚本，将默认内容替换为以下代码："),u.default.createElement("pre",null,u.default.createElement("code",{},"name: Build and Deploy\n\non:\n  push:\n    branches: [ master ]\n\n  workflow_dispatch:\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Use Nodejs\n        uses: actions/setup-node@v1\n        with:\n          node-version: 16\n          \n      - name: Install Dependencies\n        run: yarn install\n\n      - name: Build Docs\n        run: yarn build\n        \n      - name: Deploy Docs\n        uses: JamesIves/github-pages-deploy-action@releases/v4\n        with:\n          branch: docs\n          folder: docs/.docfree/dist\n          clean: false\n")),u.default.createElement("p",null,"该脚本的执行流程就是，只要master分支有新的推送，就会由上到下依次执行steps中的任务，最终将编译好的静态资源提交到 ",u.default.createElement("code",{className:"inline"},"docs")," 分支中，脚本配置很多，详见",u.default.createElement("a",{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",target:"_blank"},"官方文档"),"。"),u.default.createElement("p",null,"点击右侧的 ",u.default.createElement("code",{className:"inline"},"Start commit")," 按钮保存并提交脚本文件，再点击 ",u.default.createElement("code",{className:"inline"},"Actions")," 选项，可以看到任务已经在运行了，点击执行的脚本任务，可以看到具体脚本执行的流程："),u.default.createElement("p",null,u.default.createElement("img",{src:n(1179).default,alt:null})),u.default.createElement("p",null,"等任务全部成功运行，自动化部署个人博客就完成了。"),u.default.createElement("h2",null,u.default.createElement(o.AnchorLinkEnhance,{to:"部署到其他仓库"},"#"),u.default.createElement("span",null,"部署到其他仓库")),u.default.createElement("p",null,"这里我们的博客是部署在同一个仓库的，如果想把博客部署到其他仓库，需要借助Github的访问令牌。假设你已新建了blog仓库存储源文件，username.github.io仓库用于站点部署，点击 ",u.default.createElement("code",{className:"inline"},"头像 > Settings > Developer settings > Personal access tokens")," 新建一个令牌，名称随意，有效期选择永久，勾选repo，保存后复制生成的token。"),u.default.createElement("p",null,u.default.createElement("img",{src:n(1180).default,alt:null})),u.default.createElement("p",null,"进入blog仓库，点击 ",u.default.createElement("code",{className:"inline"},"Settings > Secrets > Actions"),"，新建一个秘钥，秘钥名称随意，将复制的token粘贴进去保存。"),u.default.createElement("p",null,u.default.createElement("img",{src:n(1181).default,alt:null})),u.default.createElement("p",null,"修改脚本代码如下："),u.default.createElement("pre",null,u.default.createElement("code",{className:"language-diff"},"name: Build and Deploy\n\non:\n  push:\n    branches: [ master ]\n\n  workflow_dispatch:\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Use Nodejs\n        uses: actions/setup-node@v1\n        with:\n          node-version: 16\n          \n      - name: Install Dependencies\n        run: yarn install\n\n      - name: Build Docs\n        run: yarn build\n        \n      - name: Deploy Docs\n        uses: JamesIves/github-pages-deploy-action@releases/v4\n        with:\n-         branch: docs\n+         branch: master\n          folder: docs/.docfree/dist\n          clean: false\n+         token: ${{ secrets.ACCESS_TOKEN }}\n+         repository-name: yinjiazeng/yinjiazeng.github.io\n")),u.default.createElement("p",null,"每次自动化部署时，都会携带这个token，作为身份信息，这样就可以将静态资源部署到其他仓库了。"),u.default.createElement("section",null,u.default.createElement(o.Component,{render:function(e,t){var a=t.location;if(!1!==t.store.state.setting.valine){window.AV=n(1135);var l=n(1136),r={appId:"MD2yAhzrq1utFR2VxH2oU1YF-gzGzoHsz",appKey:"qbn6SClpr7xzhzHdtWNnNSYi"};r.el=e,r.path=a.pathname,new l(r)}}})))}p.isMDXComponent=!0;var m={state:{showCode:!1,setting:{title:"github自动化部署静态站点"},headings:[{text:"介绍",depth:2,level:1},{text:"创建站点",depth:2,level:1},{text:"创建脚本",depth:2,level:1},{text:"部署到其他仓库",depth:2,level:1}],showSidebar:!0,showPageSidebar:!0,sidebarMenus:[{text:"介绍",depth:2,level:1},{text:"创建站点",depth:2,level:1},{text:"创建脚本",depth:2,level:1},{text:"部署到其他仓库",depth:2,level:1}],pageSidebarMenus:[],utime:1669880496414.8647},render:function(){return u.default.createElement(p,{pageExtra:{platform:"Github",path:"https://github.com/yinjiazeng/yinjiazeng.github.io/tree/master/docs",format:"yyyy/MM/dd hh:mm:ss"}})}};m.state.title="github自动化部署静态站点",t.default=m},1178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"media/1.e7195008.jpg"},1179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"media/2.9b432613.jpg"},1180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"media/3.448fd624.jpg"},1181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"media/4.cdaf8fa5.jpg"}}]);