(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,l){"use strict";var n=c(l(0)),a=c(l(7)),r=l(86),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=E();if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(l,a,r):l[a]=e[a]}l.default=e,t&&t.set(e,l);return l}(l(89));function E(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return E=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}function f(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function m(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?f(Object(l),!0).forEach((function(t){d(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):f(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}l(748);var p=[{path:"/",pathname:"/",children:n.default.createElement(u.BlogEntry,{pageSize:30})},m({ctime:1586864388295.826,utime:1586957256504.6594,pathname:"/",filename:"about",ext:".md",title:"about",path:"/about"},l(749).default),{path:"/back-end",children:[{path:"/",pathname:"/back-end/",children:n.default.createElement(u.BlogEntry,{pageSize:30})},{path:"*",children:n.default.createElement(u.NotFound,null)}]},{path:"/front-end",children:[{path:"/",pathname:"/front-end/",children:n.default.createElement(u.BlogEntry,{pageSize:30})},{path:"*",children:n.default.createElement(u.NotFound,null)}]},{path:"/life",children:[{path:"/",pathname:"/life/",children:n.default.createElement(u.BlogEntry,{pageSize:30})},m({ctime:1586950258282.7258,utime:1586953110892.0593,pathname:"/life/",filename:"骑着电动车去大理",ext:".md",title:"骑着电动车去大理",path:"/骑着电动车去大理"},l(750).default),{path:"*",children:n.default.createElement(u.NotFound,null)}]}],s=function e(t){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach((function(t){if("*"!==t.path){var n=t.children,a=(t.render,t.effects,t.onInit,t.onChange,i(t,["children","render","effects","onInit","onChange"]));Array.isArray(n)?l=e(n,l):"/"!==t.path&&t.title&&l.push(a)}})),l}(p).sort((function(e,t){var l=e.ctime,n=t.ctime;return l<n?1:l>n?-1:0}));r.nuomi.config({state:{listSource:[]},effects:{initData:function(){var e=this.getNuomiProps(),t=e.title,l=e.pathname,n=(e.filename,e.showSidebar),a=e.showPageSidebar,u=e.sidebarTitle,E=e.sidebarMenus,c=e.pageSidebarMenus,o=e.data,i=e.location,f={sidebarTitle:u,showSidebar:!!n,showPageSidebar:!!a,pageSidebarMenus:c};o.computedSidebarMenus||(o.listSource=[],o.computedSidebarMenus=[{text:t,menus:E}]);f.sidebarMenus=o.computedSidebarMenus||[];var m=function(e,t){var l=t.query._||e,n=[];return s.forEach((function(e){var t=e.title,a=e.pathname,r=e.filename,u=e.ctime;a.startsWith(l)&&n.push({to:a+r+"?_="+l,text:t,ctime:u})})),n}(l,i)||[];this.dispatch({type:"_updateState",payload:{listSource:m}}),r.store.dispatch({type:"global/_updateState",payload:f})}},onInit:function(){var e=this.path,t=this.title,l=this.location,n=this.data;if(document.title=t&&"/"!==e?t+" | 前端阿牛の博客":"前端阿牛の博客",t){if(n.hash){var a=window.location.hash;return void setTimeout((function(){window.location.hash=a+"#"+n.hash}))}l.hash||window.scrollTo({top:0})}else e&&window.scrollTo({top:0})}});var A=function e(t){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach((function(t){var n=t.to,a=t.text,r=t.menus;a&&(Array.isArray(r)?l.push({text:a,to:n,menus:e(r)}):l.push({text:a,to:n}))})),l}([{text:"前端",to:"/front-end"},{text:"后端",to:"/back-end"},{text:"生活",to:"/life"},{text:"关于",to:"/about"},{text:"GitHub",to:"https://github.com/yinjiazeng"}]),g={showSidebar:!1,pageSidebar:!1,sidebarTtile:"",sidebarMenus:[],pageSidebarMenus:[]},h=function(){return n.default.createElement(r.Router,{type:"hash"},n.default.createElement(r.Nuomi,{id:"global",state:g,onInit:null},n.default.createElement(u.Layout,{type:"hash",title:"前端阿牛の博客",nav:A,footer:"MIT Licensed | Copyright © 2020-present",dataSource:s},n.default.createElement(r.ShapeRoute,{routes:p}),n.default.createElement(r.Route,{path:"*"},n.default.createElement(u.NotFound,null)))))};a.default.render(n.default.createElement(h,null),document.getElementById("root"))},749:function(e,t,l){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.MDXContent=d;var a,r=l(0),u=(a=r)&&a.__esModule?a:{default:a},E=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=a?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(l,r,u):l[r]=e[r]}l.default=e,t&&t.set(e,l);return l}(l(89));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var f={},m=E.Content;function d(e){var t=e.components,l=i(e,["components"]);return u.default.createElement(m,o({},f,l,{components:t}),u.default.createElement("h1",null,u.default.createElement(E.AnchorLinkEnhance,{to:"关于我"},"#"),u.default.createElement("span",null,"关于我")),u.default.createElement("p",null,"花名阿牛，英文Aniu，安徽蚌埠人，92年生，已婚，一女儿。"),u.default.createElement("h2",null,u.default.createElement(E.AnchorLinkEnhance,{to:"职业经历"},"#"),u.default.createElement("span",null,"职业经历")),u.default.createElement("ul",null,u.default.createElement("li",null,"2014~2019 诺诺网（杭州诺诺科技有限公司）",u.default.createElement("ul",null,u.default.createElement("li",null,"前端组长"))),u.default.createElement("li",null,"2012~2014 好居网（合肥万成达信息科技有限公司）",u.default.createElement("ul",null,u.default.createElement("li",null,"PHP & 前端")))),u.default.createElement("h2",null,u.default.createElement(E.AnchorLinkEnhance,{to:"技术栈"},"#"),u.default.createElement("span",null,"技术栈")),u.default.createElement("p",null,u.default.createElement("code",{className:"inline"},"jQuery"),"\n",u.default.createElement("code",{className:"inline"},"React"),"\n",u.default.createElement("code",{className:"inline"},"Vue"),"\n",u.default.createElement("code",{className:"inline"},"CSS"),"\n",u.default.createElement("code",{className:"inline"},"HTML"),"\n",u.default.createElement("code",{className:"inline"},"Node")),u.default.createElement("h2",null,u.default.createElement(E.AnchorLinkEnhance,{to:"主要作品"},"#"),u.default.createElement("span",null,"主要作品")),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/nuomijs/nuomi",target:"_blank"},"nuomi")," 基于react+redux封装的单页数据流解决方案"),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/yinjiazeng/docfree",target:"_blank"},"docfree")," 基于webpack+nuomi开发的文档生成工具（本站基于该工具生成）"),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/yinjiazeng/NginxGUI",target:"_blank"},"NginxGUI")," 基于electron+nuomi开发的Nginx图形化管理工具"),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/yinjiazeng/readmine-helper",target:"_blank"},"readmine-helper")," readmine谷歌浏览器插件"),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/yinjiazeng/nui",target:"_blank"},"nui")," 基于jQuery封装的模块化UI框架"),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/yinjiazeng/gulp-nui",target:"_blank"},"gulp-nui")," nui打包工具")))}d.isMDXComponent=!0;var p={state:{showCode:!1},headings:[{text:"职业经历",depth:2,level:1},{text:"技术栈",depth:2,level:1},{text:"主要作品",depth:2,level:1}],showSidebar:!0,showPageSidebar:!1,sidebarMenus:[{text:"职业经历",depth:2,level:1},{text:"技术栈",depth:2,level:1},{text:"主要作品",depth:2,level:1}],pageSidebarMenus:[],utime:1586957256504.6594,render:function(){return u.default.createElement(d,{pageExtra:{platform:"Github",path:"https://github.com/yinjiazeng/blog/blob/master/docs",format:"yyyy/MM/dd hh:mm:ss"}})},title:"关于我"};t.default=p},750:function(e,t,l){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.MDXContent=d;var a,r=l(0),u=(a=r)&&a.__esModule?a:{default:a},E=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=a?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(l,r,u):l[r]=e[r]}l.default=e,t&&t.set(e,l);return l}(l(89));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var f={},m=E.Content;function d(e){var t=e.components,l=i(e,["components"]);return u.default.createElement(m,o({},f,l,{components:t}),u.default.createElement("h1",null,u.default.createElement(E.AnchorLinkEnhance,{to:"骑着电动车去大理"},"#"),u.default.createElement("span",null,"骑着电动车去大理")),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/1.jpeg",alt:null})),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("strong",null,"坐骑"),"：小牛N1S PRO"),u.default.createElement("li",null,u.default.createElement("strong",null,"人数"),"：2人（楼主和老婆大人，老婆坐火车飞机，昆明到丽江坐小牛）"),u.default.createElement("li",null,u.default.createElement("strong",null,"装备"),"：LS2尾箱（60L）、锂电池（35ahx2, 26ahx1）、充电器（快充x2, 普充x1）、挡风被、骑行手套、护膝、四季盔、骑行面巾、手机支架、小米智能充气宝、自补液x2、气门芯x2、多功能工具钳"),u.default.createElement("li",null,u.default.createElement("strong",null,"耗时"),"：40天"),u.default.createElement("li",null,u.default.createElement("strong",null,"去程"),"：蚌埠-合肥-铜陵-池州-黄山-景德镇-南昌-长沙✈️昆明-楚雄-大理"),u.default.createElement("li",null,u.default.createElement("strong",null,"返程"),"：大理-丽江-凉山-宜宾-泸州-重庆-恩施-宜昌-荆门-随州-信阳-阜阳-淮南-蚌埠"),u.default.createElement("li",null,u.default.createElement("strong",null,"里程"),"：5187公里")),u.default.createElement("p",null,"2019年11月18日至2019年12月28日，楼主骑着心爱的小牛电动车从安徽蚌埠到云南大理往返一共40天，这里把期间的历程分享给大家。"),u.default.createElement("p",null,"在这趟行程出发之前，楼主将骑行快1年的小牛动力版换成了顶配版，主要是考虑到速度和安全性，并更换了玛吉斯防滑胎，购置了所需的装备后，\n先从浙江杭州到安徽蚌埠骑行了480公里的小短途，对长时间骑行可行性进行了尝试，用了2天时间，积累了一些经验。回到蚌埠把家里的事情处理完，\n出发前一天在蚌埠小牛光彩店对车子进行了保养，老板很仔细的检查了刹车轮胎和线路，还送了2个气门芯。"),u.default.createElement("p",null,"途中在铜陵坐渡轮横渡长江到池州。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/2.jpeg",alt:null})),u.default.createElement("p",null,"自己一直使用的是高德导航，结果骑行到黄山后，被高德给坑了，给大家看一下高德导航的路线截图"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/3.jpeg",alt:null})),u.default.createElement("p",null,"当时已经晚上7点多了，温度接近0度，26ah的电池剩余60%的电，2个35ah的剩余10%，想着剩余20公里够用，结果这条路线根本不通，\n要到宾馆必须从外围绕，大概70公里，沃特发克。。当时心都凉了，只好返程到最近的菜馆吃饭充电，但是考虑到已经很晚，而且气温特别低，\n于是放弃继续骑行，就地露营，第二天再出发。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/4.jpeg",alt:null})),u.default.createElement("p",null,"自此之后再也没用过高德地图导航，改换成了百度地图。在黄山玩了4天，游了塔川、宏村、卢村，全程徒步爬了黄山，很可惜天公不作美，在光明顶没有看到日出。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/5.jpeg",alt:null})),u.default.createElement("p",null,"在离开黄山往景德镇骑行的下山路上遇到了一件悲伤的事情，在U型弯道右转弯出弯拐角处有几只山羊，当时并没有选择停车，而是想从山羊的左侧绕过去，\n没想到有一只山羊并没有右贴边走，而是往左边跑，刚好后方有一个客车在转弯，可能司机没有看到羊，而羊又吓的往右边跑，嗙的一声，楼主从后视镜看到那只羊趴在公路上，\n后腿貌似被撞断了，客车司机没有停车直接开走了，自此之后就告诉自己骑行路上再遇到这种情况一定要停车让后车先行。"),u.default.createElement("p",null,"到达景德镇已经是晚上了，在吃饭的功夫看到好多人围到车子前议论小牛，这是什么电动车能跑这么远？"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/6.jpeg",alt:null})),u.default.createElement("p",null,"离开景德镇骑往南昌的路上，刮起了5、6级大风，由于加装了挡风被，车子阻力特别大，飘的厉害，最严重的被大风从最右侧车道吹到可最左侧车道，如果后方有车后果不堪设想，\n于是降低速度，强行控制车头往前行驶，这一天骑行的特别艰难。抵达之后品尝了南昌拌粉、肉饼汤、白糖糕等，看了八一纪念塔和纪念馆。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/7.jpeg",alt:null})),u.default.createElement("p",null,"南昌只呆了一天便出发前往长沙，途中下起了中雨，气温也低，这里要吐槽下小牛的骑行手套，小雨还行，稍大点的雨根本不防水，又湿又冷骑着挺难受的。有些地方路不是很好，\n不过最凶险的就是快要到长沙的一段下山路，连续5公里下坡，浓雾什么也看不见，路也窄，一路捏着刹车下山后第一件事是找卫生间小便(╥﹏╥)。"),u.default.createElement("p",null,"到了长沙后发现市区很多道路没有非机动车道，行人汽车和电动车都在一个道上，让楼主这个在杭州呆久的宅男在长沙骑行摸不着头脑，不过久了就慢慢习惯了。在长沙呆了足足6天，\n吃了地道了臭豆腐，喝了茶颜悦色奶茶等品尝了各种美食，楼主写文章的时候直流口水(¯﹃¯)，果然长沙是吃货天堂，除了吃之外当然要运动一下促进消化，于是逛了橘子洲爬了岳麓山。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/8.jpeg",alt:null})),u.default.createElement("p",null,"在长沙期间发生了一个小插曲，由于车子逆行被交警拦住，打算扣三天教育的，楼主向交警解释说是骑电动车旅游的，导航导错了，交警都惊呆了，放了我们。这里告诫大家出门在外一定要遵守交通规则。"),u.default.createElement("p",null,"本打算长沙玩过之后楼主是一路骑行到昆明的，可是那段时间天气不好，需要横穿唯一没有平原的贵州省危险系数较大，时间周期也太长，所以将车子寄到昆明，大物流不收，走的小物流900元😲，楼主和老婆坐飞机去昆明。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/9.jpeg",alt:null})),u.default.createElement("p",null,"在昆明足足等了5天车子才到，考虑到大理丽江那边没有小牛，出发的当天在昆明小牛北京路店对车子进行保养，老板很耐心的把轮胎上的石头和金属片挖掉。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/10.jpeg",alt:null})),u.default.createElement("p",null,"因为这次骑行是带着老婆的，由于轧的金属片太多，出于安全性考虑，决定更换全新的玛吉斯轮胎，并检查了刹车系统。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/11.jpeg",alt:null})),u.default.createElement("p",null,"期间试骑了老板自己改装的小牛，速度超过了90公里，真的牛！！！"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/12.jpeg",alt:null})),u.default.createElement("p",null,"过了这个门就是终点站大理了。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/14.jpeg",alt:null})),u.default.createElement("p",null,"到大理之后第一件事当然是骑着小牛绕着洱海逛一圈了，一路都是风景。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/15.jpeg",alt:null})),u.default.createElement("p",null,"在大理玩了一周，还自拍了婚纱照，当然婚纱照少不了小牛，载着我们一路前行，小牛辛苦了。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/16.jpeg",alt:null})),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/17.jpeg",alt:null})),u.default.createElement("p",null,"时间过得很快，到了返程日子，老婆和父母希望楼主把车子寄回去，但是自己还是希望骑回去给旅程画一个完美的句号，在楼主的坚持之下，他们同意了。将老婆送到机场后，一个人踏上了返程之路。"),u.default.createElement("p",null,"自己一直挺想看看玉龙雪山的，所以返程先北上去丽江，然后一路向东，雪山看着很壮丽。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/18.jpeg",alt:null})),u.default.createElement("p",null,"途径丽宁十八弯，其实没有什么好可怕的，国道很宽敞，只要不超速一点事也没有。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/19.jpeg",alt:null})),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/20.jpeg",alt:null})),u.default.createElement("p",null,"金沙江沿途风景。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/21.jpeg",alt:null})),u.default.createElement("p",null,"宁蒗县爬坡到山顶温度骤降，路面结冰，小心慢行。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/22.jpeg",alt:null})),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/24.jpeg",alt:null})),u.default.createElement("p",null,"下山路不是很好，坑坑洼洼，下山后发现储物箱断了，还咨询了小牛群，没有什么大碍。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/25.jpeg",alt:null})),u.default.createElement("p",null,"在凉山经历了连续上坡50公里，连续下坡50公里，下坡回冲了30%的电。途中爬了悬崖村，人生第一次对梯子感到恐惧，有些梯子几乎呈垂直了。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/26.jpeg",alt:null})),u.default.createElement("p",null,"在泸州往重庆的路上，下着雨，可能充电头进水，导致手机插孔被烧坏了，没了快充功能，不过还好可以充电，雨天还是要做好防水工作的。到重庆后发现重庆路特别绕，而且山路坡特别陡，\n骑行以来第一次推车上山，因为路难走也经历了第一次原路返回。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/27.jpeg",alt:null})),u.default.createElement("p",null,"在湖北恩施往宜昌途中再次遇到了浓雾，这次是10公里下坡，不过之前有了5公里经验，不怕不怕，到山底之后没有急着找厕所，而是先找餐馆，再问老板哪里可以上厕所o(╥﹏╥)o。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/28.jpeg",alt:null})),u.default.createElement("p",null,"过了宜昌后，大多数都是平原，路都比较好走，到信阳后，在小牛浉河店给车子洗了个澡，脏牛变帅牛。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/29.jpeg",alt:null})),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/30.jpeg",alt:null})),u.default.createElement("p",null,"因为快要到家了，最后几天拼命骑，在到家前一天骑了290公里，屁股酸啊。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/31.jpeg",alt:null})),u.default.createElement("p",null,"这里想分享下途中没有小牛店怎么解决充电以及三组电池如何使用的。一般都是吃午饭的时候充电，提前询问下能不能充电，如果老板拒绝，会和老板商量说加钱，因为一般都是冲2个小时，\n所以加2块钱当做电费，最多5块钱，不给冲就换，如果不饿，电池没电了，可以选择找卖电动车的冲，运气好老板不收你钱，晚上住宾馆充满。优先使用2组35ah的，大多数2挡，偶尔3挡，\n如果上午8点多出发，这2组用完差不多就12点多了，刚好可以吃饭充电，下午可以用完三组电池到宾馆，平均每天日行240公里左右。"),u.default.createElement("p",null,"挺感谢小牛科技的，造出那么好的车，让电动车旅行成为可能，希望小牛发展越来越好，小牛加油，还要感谢旅途中帮助过我的人，祝愿你们生意兴隆，财源滚滚。"),u.default.createElement("p",null,u.default.createElement("img",{src:"/img/%E9%AA%91%E7%9D%80%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8E%BB%E5%A4%A7%E7%90%86/32.jpeg",alt:null})),u.default.createElement("p",null,"这趟旅行给2019画上一个完美的句号，2020人生也将翻开新的篇章，加油自己！"))}d.isMDXComponent=!0;var p={state:{showCode:!1},headings:[],showSidebar:!1,showPageSidebar:!1,sidebarMenus:[],pageSidebarMenus:[],utime:1586953110892.0593,render:function(){return u.default.createElement(d,{pageExtra:{platform:"Github",path:"https://github.com/yinjiazeng/blog/blob/master/docs",format:"yyyy/MM/dd hh:mm:ss"}})},title:"骑着电动车去大理"};t.default=p}},[[215,1,2]]]);