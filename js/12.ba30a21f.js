(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1146:function(e,n,t){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.MDXContent=f;var o,r=t(1),a=(o=r)&&o.__esModule?o:{default:o},s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=c();if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(t,r,a):t[r]=e[r]}t.default=e,n&&n.set(e,t);return t}(t(443));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m={},d=s.Content;function f(e){var n=e.components,l=u(e,["components"]);return a.default.createElement(d,i({},m,l,{components:n}),a.default.createElement("h3",null,a.default.createElement(s.AnchorLinkEnhance,{to:"串行"},"#"),a.default.createElement("span",null,"串行")),a.default.createElement("p",null,"这种方式需要等所有promise执行完毕才会继续执行后续代码，如果后续执行需要依赖前面执行结果才会采用这种模式。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  try {\n    const a = await Promise.resolve(1);\n    console.log(a);\n    const b = await Promise.resolve(2);\n    console.log(b);\n    const c = await Promise.resolve(3);\n    console.log(c);\n    console.log('done');\n  } catch(e) {\n    console.log('reject', e);\n  }\n})();\n// 依次打印\n// => 1\n// => 2\n// => 3\n// => done\n")),a.default.createElement("p",null,"当中间某一个promise执行失败，后续代码将不能继续执行。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  try {\n    const a = await Promise.resolve(1);\n    console.log(a);\n    const b = await Promise.reject(2);\n    console.log(b);\n    const c = await Promise.resolve(3);\n    console.log(c);\n    console.log('done');\n  } catch(e) {\n    console.log('reject', e);\n  }\n})();\n// 依次打印\n// => 1\n// => reject 2\n")),a.default.createElement("h3",null,a.default.createElement(s.AnchorLinkEnhance,{to:"并行Promise.all"},"#"),a.default.createElement("span",null,"并行Promise.all")),a.default.createElement("p",null,"多个promise互不依赖，当最慢的返回结果后，按顺序返回promise结果数组，继续执行后续代码。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  try {\n    const res = await Promise.all([\n      new Promise((res) => {\n        setTimeout(() => {\n          console.log('a');\n          res(1);\n        }, 200);\n      }),\n      new Promise((res) => {\n        setTimeout(() => {\n          console.log('b');\n          res(2);\n        }, 100);\n      })\n    ]);\n    console.log(res);\n    console.log('done');\n  } catch(e) {\n    console.log('reject', e);\n  }\n})();\n// 依次打印\n// => b\n// => a\n// => [1, 2]\n// => done\n")),a.default.createElement("p",null,"当某一个promise执行失败，后续代码将不能继续执行，但不影响未执行结束promise的结果。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  try {\n    const res = await Promise.all([\n      new Promise((res) => {\n        setTimeout(() => {\n          console.log('a');\n          res(1);\n        }, 200);\n      }),\n      new Promise((res, rej) => {\n        setTimeout(() => {\n          console.log('b');\n          rej(2);\n        }, 100);\n      })\n    ]);\n    console.log(res);\n    console.log('done');\n  } catch(e) {\n    console.log('reject', e);\n  }\n})();\n// 依次打印\n// => b\n// => reject 2\n// => a\n")),a.default.createElement("h3",null,a.default.createElement(s.AnchorLinkEnhance,{to:"并行Promise.race"},"#"),a.default.createElement("span",null,"并行Promise.race")),a.default.createElement("p",null,"多个promise互不依赖，如果最快promise执行成功，返回该promise结果，哪怕后续promise执行失败也不影响，继续执行后续代码。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  try {\n    const res = await Promise.race([\n      new Promise((res, rej) => {\n        setTimeout(() => {\n          console.log('a');\n          rej(1);\n        }, 200);\n      }),\n      new Promise((res) => {\n        setTimeout(() => {\n          console.log('b');\n          res(2);\n        }, 100);\n      })\n    ]);\n    console.log(res);\n    console.log('done');\n  } catch(e) {\n    console.log('reject', e);\n  }\n})();\n// 依次打印\n// => b\n// => 2\n// => done\n// => a\n")),a.default.createElement("p",null,"如果最快的promise执行失败，后续代码将不能继续执行。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  try {\n    const res = await Promise.race([\n      new Promise((res) => {\n        setTimeout(() => {\n          console.log('a');\n          res(1);\n        }, 200);\n      }),\n      new Promise((res, rej) => {\n        setTimeout(() => {\n          console.log('b');\n          rej(2);\n        }, 100);\n      })\n    ]);\n    console.log(res);\n    console.log('done');\n  } catch(e) {\n    console.log('reject', e);\n  }\n})();\n// 依次打印\n// => b\n// => reject 2\n// => a\n")),a.default.createElement("h3",null,a.default.createElement(s.AnchorLinkEnhance,{to:"并行Promise.allSettled"},"#"),a.default.createElement("span",null,"并行Promise.allSettled")),a.default.createElement("p",null,"多个promise互不依赖，不管promise执行结果如何，都不会执行失败，等全部promise执行结束后，按顺序返回promise结果数组，继续执行后续代码。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},'(async () => {\n  try {\n    const res = await Promise.allSettled([\n      new Promise((res) => {\n        setTimeout(() => {\n          console.log(\'a\');\n          res(1);\n        }, 200);\n      }),\n      new Promise((res, rej) => {\n        setTimeout(() => {\n          console.log(\'b\');\n          rej(2);\n        }, 100);\n      })\n    ]);\n    console.log(res);\n    console.log(\'done\');\n  } catch(e) {\n    console.log(\'reject\', e);\n  }\n})();\n// 依次打印\n// => b\n// => a\n// => [{"status":"fulfilled","value":1}, {"status":"rejected","reason":2}]\n// => done\n')),a.default.createElement("h3",null,a.default.createElement(s.AnchorLinkEnhance,{to:"并行for/await"},"#"),a.default.createElement("span",null,"并行for/await")),a.default.createElement("p",null,"和Promise.all类似，不同的是Promise.all必须等全部执行完后才能获取到结果，而for/await可以立即得到promise的返回结果，当然这取决于数组第一个promise的执行速度。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  const arr = [\n    new Promise((res, rej) => {\n      setTimeout(() => {\n        console.log('a');\n        res(1);\n      }, 100);\n    }),\n    new Promise((res, rej) => {\n      setTimeout(() => {\n        console.log('b');\n        res(2);\n      }, 200);\n    })\n  ];\n  for await (let i of arr) {\n    console.log(i);\n  }\n  console.log('done');\n})();\n// 依次打印\n// => a\n// => 1\n// => b\n// => 2\n// => done\n")),a.default.createElement("p",null,"如果第一个数组promise执行是最慢的，和Promise.all在速度上没有区别。"),a.default.createElement("pre",null,a.default.createElement("code",{className:"language-js"},"(async () => {\n  const arr = [\n    new Promise((res, rej) => {\n      setTimeout(() => {\n        console.log('a');\n        res(1);\n      }, 200);\n    }),\n    new Promise((res, rej) => {\n      setTimeout(() => {\n        console.log('b');\n        res(2);\n      }, 100);\n    })\n  ];\n  for await (let i of arr) {\n    console.log(i);\n  }\n  console.log('done');\n})();\n// 依次打印\n// => b\n// => a\n// => 1\n// => 2\n// => done\n")),a.default.createElement("section",null,a.default.createElement(s.Component,{render:function(e,n){var l=n.location;if(!1!==n.store.state.setting.valine){window.AV=t(1135);var o=t(1136),r={appId:"MD2yAhzrq1utFR2VxH2oU1YF-gzGzoHsz",appKey:"qbn6SClpr7xzhzHdtWNnNSYi"};r.el=e,r.path=l.pathname,new o(r)}}})))}f.isMDXComponent=!0;var p={state:{showCode:!1,setting:{title:"执行多个promise几种实现方式"},headings:[{text:"串行",depth:3,level:2},{text:"并行Promise.all",depth:3,level:2},{text:"并行Promise.race",depth:3,level:2},{text:"并行Promise.allSettled",depth:3,level:2},{text:"并行for/await",depth:3,level:2}],showSidebar:!0,showPageSidebar:!0,sidebarMenus:[{text:"串行",depth:3,level:2},{text:"并行Promise.all",depth:3,level:2},{text:"并行Promise.race",depth:3,level:2},{text:"并行Promise.allSettled",depth:3,level:2},{text:"并行for/await",depth:3,level:2}],pageSidebarMenus:[],utime:1676014582038.149},render:function(){return a.default.createElement(f,{pageExtra:{platform:"Github",path:"https://github.com/yinjiazeng/yinjiazeng.github.io/tree/master/docs",format:"yyyy/MM/dd hh:mm:ss"}})}};p.state.title="执行多个promise几种实现方式",n.default=p}}]);