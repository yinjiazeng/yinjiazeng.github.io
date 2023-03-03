(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1142:function(e,l,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.MDXContent=f;var a,c=t(1),s=(a=c)&&a.__esModule?a:{default:a},r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=u();if(l&&l.has(e))return l.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var s=a?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(t,c,s):t[c]=e[c]}t.default=e,l&&l.set(e,t);return t}(t(442));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={},m=r.Content;function f(e){var l=e.components,n=o(e,["components"]);return s.default.createElement(m,i({},d,n,{components:l}),s.default.createElement("p",null,"  今天尝试一下手写一个",s.default.createElement("code",{className:"inline"},"Promise"),"，我们不实现错误状态，只实现成功状态，也就是",s.default.createElement("code",{className:"inline"},"new Promise(fn).then(fn)"),"，看看需要几行代码能实现该功能。"),s.default.createElement("h2",null,s.default.createElement(r.AnchorLinkEnhance,{to:"构造函数"},"#"),s.default.createElement("span",null,"构造函数")),s.default.createElement("p",null,"可以看出",s.default.createElement("code",{className:"inline"},"Promise"),"是一个构造函数，通过",s.default.createElement("code",{className:"inline"},"new"),"实例化，接收一个回调函数作为参数。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"function Promise(callback) {}\n")),s.default.createElement("p",null,s.default.createElement("code",{className:"inline"},"Promise"),"有2个属性",s.default.createElement("code",{className:"inline"},"state"),"和",s.default.createElement("code",{className:"inline"},"result"),"分别记录状态和结果。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"function Promise(callback) {\n  this.status = 'pending';\n  this.result = undefined;\n}\n")),s.default.createElement("p",null,"构造函数实例化时接收一个回调函数，该回调函数会被立即调用，调用时需传入函数",s.default.createElement("code",{className:"inline"},"resolve"),"，用于更新",s.default.createElement("code",{className:"inline"},"state"),"和",s.default.createElement("code",{className:"inline"},"result"),"。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"function Promise(callback) {\n  this.status = 'pending';\n  this.result = undefined;\n  const resolve = (e) => {\n    this.status = 'fulfilled';\n    this.result = e;  \n  }\n  callback(resolve);\n}\n")),s.default.createElement("h2",null,s.default.createElement(r.AnchorLinkEnhance,{to:"then"},"#"),s.default.createElement("span",null,"then")),s.default.createElement("p",null,"实例对象包含一个",s.default.createElement("code",{className:"inline"},"then"),"方法，接收一个回调函数",s.default.createElement("code",{className:"inline"},"onFulfilled"),"，该回调函数会在",s.default.createElement("code",{className:"inline"},"resolve"),"执行时被调用，并将",s.default.createElement("code",{className:"inline"},"result"),"作为参数传入。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"Promise.prototype.then = function(onFulfilled) {\n  onFulfilled(this.result);\n}\n")),s.default.createElement("p",null,"好了，现在我们来测试一下代码。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"new Promise((resolve) => {\n  resolve(1);\n}).then((e) => {\n  console.log(e);\n});\n")),s.default.createElement("p",null,"代码成功打印出了",s.default.createElement("code",{className:"inline"},"1"),"，貌似没有问题，可如果",s.default.createElement("code",{className:"inline"},"resolve"),"是延迟执行呢？"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"new Promise((resolve) => {\n  setTimeout(() => {\n    resolve(1);\n  }, 100);\n}).then((e) => {\n  console.log(e);\n});\n")),s.default.createElement("p",null,"打印出来的却是",s.default.createElement("code",{className:"inline"},"undefined"),"，所以需要改造一下代码，将",s.default.createElement("code",{className:"inline"},"onFulfilled"),"放入回调中，",s.default.createElement("code",{className:"inline"},"resolve"),"调用后再执行这个回调。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"function Promise(callback) {\n  this.status = 'pending';\n  this.result = undefined;\n  this._onFulfilled = () => {};\n  const resolve = (e) => {\n    this.status = 'fulfilled';\n    this.result = e;\n    this._onFulfilled();\n  }\n  callback(resolve);\n}\nPromise.prototype.then = function(onFulfilled) {\n  this._onFulfilled = () => {\n    onFulfilled(this.result);\n  }\n}\n")),s.default.createElement("p",null,"再执行刚才代码打印出了",s.default.createElement("code",{className:"inline"},"1"),"，不过如果将",s.default.createElement("code",{className:"inline"},"setTimeout"),"去掉，又发现了一个问题，",s.default.createElement("code",{className:"inline"},"onFulfilled"),"不执行了，这是因为",s.default.createElement("code",{className:"inline"},"resolve"),"是立即执行的，",s.default.createElement("code",{className:"inline"},"_onFulfilled"),"还没有创建，所以需要在",s.default.createElement("code",{className:"inline"},"resolve"),"中加一个延迟。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"function Promise(callback) {\n  this.status = 'pending';\n  this.result = undefined;\n  this._onFulfilled = () => {};\n  const resolve = (e) => {\n    queueMicrotask(() => {\n      this.status = 'fulfilled';\n      this.result = e;\n      this._onFulfilled();\n    });\n  }\n  callback(resolve);\n}\n")),s.default.createElement("p",null,"因为",s.default.createElement("code",{className:"inline"},"Promise"),"属于",s.default.createElement("code",{className:"inline"},"微任务"),"，相比较",s.default.createElement("code",{className:"inline"},"setTimeout"),"，使用",s.default.createElement("code",{className:"inline"},"queueMicrotask"),"会更好，OK，这样不管延迟还是不延迟，都可以打印出",s.default.createElement("code",{className:"inline"},"1"),"。"),s.default.createElement("h3",null,s.default.createElement(r.AnchorLinkEnhance,{to:"链式调用"},"#"),s.default.createElement("span",null,"链式调用")),s.default.createElement("p",null,"我们知道",s.default.createElement("code",{className:"inline"},"Promise"),"都是支持链式调用的，类似这样",s.default.createElement("code",{className:"inline"},"then(fn).then(fn)..."),"，并且后面",s.default.createElement("code",{className:"inline"},"onFulfilled"),"接收的参数是前面的返回值，只要在",s.default.createElement("code",{className:"inline"},"then"),"中返回一个",s.default.createElement("code",{className:"inline"},"Promise"),"实例就可以实现。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"Promise.prototype.then = function(onFulfilled) {\n  return new Promise((resolve) => {\n    this._onFulfilled = () => {\n      resolve(onFulfilled(this.result));\n    }\n  });\n}\n")),s.default.createElement("p",null,"这样基本的",s.default.createElement("code",{className:"inline"},"Promise"),"功能就已经实现了，一共20行代码。"),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},"function Promise(callback) {\n  this.status = 'pending';\n  this.result = undefined;\n  this._onFulfilled = () => {};\n  const resolve = (e) => {\n    queueMicrotask(() => {\n      this.status = 'fulfilled';\n      this.result = e;\n      this._onFulfilled();\n    });\n  }\n  callback(resolve);\n}\nPromise.prototype.then = function(onFulfilled) {\n  return new Promise((resolve) => {\n    this._onFulfilled = () => {\n      resolve(onFulfilled(this.result));\n    }\n  });\n}\n")),s.default.createElement("h2",null,s.default.createElement(r.AnchorLinkEnhance,{to:"总结"},"#"),s.default.createElement("span",null,"总结")),s.default.createElement("p",null,"这里只是简单实现了",s.default.createElement("code",{className:"inline"},"Promise"),"的基本功能，其中",s.default.createElement("code",{className:"inline"},"resolve"),"内部需要使用微任务进行延迟执行，",s.default.createElement("code",{className:"inline"},"then"),"方法需要返回一个",s.default.createElement("code",{className:"inline"},"Promise"),"实例。",s.default.createElement("code",{className:"inline"},"Promise"),"本身还有好多特性，比如",s.default.createElement("code",{className:"inline"},"catch"),"、",s.default.createElement("code",{className:"inline"},"finally"),"、",s.default.createElement("code",{className:"inline"},"Promise.all"),"等，后续会实现一个完整版的。"),s.default.createElement("section",null,s.default.createElement(r.Component,{render:function(e,l){var n=l.location;if(!1!==l.setting.valine){window.AV=t(1132);var a=t(1133),c={appId:"MD2yAhzrq1utFR2VxH2oU1YF-gzGzoHsz",appKey:"qbn6SClpr7xzhzHdtWNnNSYi"};c.el=e,c.path=n.pathname,new a(c)}}})))}f.isMDXComponent=!0;var p={state:{showCode:!1},setting:{title:"实现Promise需要几行代码"},headings:[{text:"构造函数",depth:2,level:1},{text:"then",depth:2,level:1},{text:"链式调用",depth:3,level:2},{text:"总结",depth:2,level:1}],showSidebar:!0,showPageSidebar:!0,sidebarMenus:[{text:"构造函数",depth:2,level:1},{text:"then",depth:2,level:1},{text:"链式调用",depth:3,level:2},{text:"总结",depth:2,level:1}],pageSidebarMenus:[],utime:1677827173746.1914,render:function(){return s.default.createElement(f,{pageExtra:{platform:"Github",path:"https://github.com/yinjiazeng/yinjiazeng.github.io/tree/master/docs",format:"yyyy/MM/dd hh:mm:ss"}})},title:"实现Promise需要几行代码"};l.default=p}}]);