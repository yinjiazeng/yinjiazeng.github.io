import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, globalStore, configure, router } from '@nuomi';
import * as Docfree from 'docfree-components';
import 'docfree-components/lib/style/lang.less';
import footer from '../footer.js';



const routes = [
  {
    "path": "/",
    "extends": [
      {
        "state": {
          "pathname": "/"
        }
      }
    ],
    "children": <Docfree.BlogEntry pageSize={30} />
  },
  {
    "path": "/about",
    "children": [
      {
        "key": 1586864388295.826,
        "path": "/",
        "extends": [
          {
            "state": {
              "ctime": 1586864388295.826,
              "utime": 1716440761339.725,
              "pathname": "/about/",
              "filename": "readme",
              "ext": ".md",
              "title": "readme"
            }
          }
        ],
        ...require("../../about/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../about/readme.md").default);
      })
    }
    
      },
      {
        "path": "*",
        "children": <Docfree.NotFound />
      }
    ]
  },
  {
    "path": "/ebook",
    "children": [
      {
        "key": 1674269015000,
        "path": "/",
        "extends": [
          {
            "state": {
              "ctime": 1674269015000,
              "utime": 1675652579650.4705,
              "pathname": "/ebook/",
              "filename": "readme",
              "ext": ".md",
              "title": "readme"
            }
          }
        ],
        ...require("../../ebook/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../ebook/readme.md").default);
      })
    }
    
      },
      {
        "path": "*",
        "children": <Docfree.NotFound />
      }
    ]
  },
  {
    "path": "/life",
    "children": [
      {
        "path": "/",
        "extends": [
          {
            "state": {
              "pathname": "/life/"
            }
          }
        ],
        "children": <Docfree.BlogEntry pageSize={30} />
      },
      {
        "path": "/骑行去大理",
        "children": [
          {
            "key": 1586950258282.7258,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1586950258282.7258,
                  "utime": 1644387752759.0925,
                  "pathname": "/life/骑行去大理/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../life/骑行去大理/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../life/骑行去大理/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "*",
        "children": <Docfree.NotFound />
      }
    ]
  },
  {
    "path": "/tech",
    "children": [
      {
        "path": "/",
        "extends": [
          {
            "state": {
              "pathname": "/tech/"
            }
          }
        ],
        "children": <Docfree.BlogEntry pageSize={30} />
      },
      {
        "path": "/app证书申请以及上架",
        "children": [
          {
            "key": 1669878911323.7217,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1669878911323.7217,
                  "utime": 1669878920742.573,
                  "pathname": "/tech/app证书申请以及上架/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/app证书申请以及上架/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/app证书申请以及上架/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/github自动化部署静态站点",
        "children": [
          {
            "key": 1644548608007.3862,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1644548608007.3862,
                  "utime": 1669880496414.8647,
                  "pathname": "/tech/github自动化部署静态站点/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/github自动化部署静态站点/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/github自动化部署静态站点/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/uniapp制作启动图",
        "children": [
          {
            "key": 1644464436331.993,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1644464436331.993,
                  "utime": 1644396575033.727,
                  "pathname": "/tech/uniapp制作启动图/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/uniapp制作启动图/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/uniapp制作启动图/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/uniapp常见问题汇总",
        "children": [
          {
            "key": 1669887769245.6152,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1669887769245.6152,
                  "utime": 1669887776366.7422,
                  "pathname": "/tech/uniapp常见问题汇总/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/uniapp常见问题汇总/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/uniapp常见问题汇总/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/windows环境git常用配置",
        "children": [
          {
            "key": 1717483295746.5981,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1717483295746.5981,
                  "utime": 1717483755134.3738,
                  "pathname": "/tech/windows环境git常用配置/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/windows环境git常用配置/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/windows环境git常用配置/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/内部私有库的几种实现方案",
        "children": [
          {
            "key": 1677827469202.1511,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1677827469202.1511,
                  "utime": 1677829952150.791,
                  "pathname": "/tech/内部私有库的几种实现方案/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/内部私有库的几种实现方案/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/内部私有库的几种实现方案/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/实现Promise需要几行代码",
        "children": [
          {
            "key": 1677810523018.1672,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1677810523018.1672,
                  "utime": 1677827173746.1914,
                  "pathname": "/tech/实现Promise需要几行代码/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/实现Promise需要几行代码/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/实现Promise需要几行代码/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "/执行多个promise几种实现方式",
        "children": [
          {
            "key": 1675998717987.6445,
            "path": "/",
            "extends": [
              {
                "state": {
                  "ctime": 1675998717987.6445,
                  "utime": 1676014582038.149,
                  "pathname": "/tech/执行多个promise几种实现方式/",
                  "filename": "readme",
                  "ext": ".md",
                  "title": "readme"
                }
              }
            ],
            ...require("../../tech/执行多个promise几种实现方式/readme.md?getTitleInfo=1").default,
    load: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/执行多个promise几种实现方式/readme.md").default);
      })
    }
    
          },
          {
            "path": "*",
            "children": <Docfree.NotFound />
          }
        ]
      },
      {
        "path": "*",
        "children": <Docfree.NotFound />
      }
    ]
  }
];
const documentTitle = '前端阿牛の博客';

const generateData = (rawData, data = []) => {
  rawData.forEach((route) => {
    if (route.path !== '*') {
      const { state: s, extends: exts = [{}], children, path } = route;
      const state = { ...exts[0].state, ...s, path }
      if (Array.isArray(children)) {
        data = generateData(children, data);
      } else if (state.title) {
        data.push(state);
      }
    }
  });
  return data;
};

const dataSource = generateData(routes)
.sort(({ ctime: a }, { ctime: b }) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

const getList = (pathname) => {
  const list = [];

  dataSource.forEach(({ title, pathname: pre, path, ctime }) => {
    if (pre.startsWith(pathname)) {
      list.push({ to: (pre + path).replace(/\/+/g, '/'), text: title, ctime });
    }
  });

  return list;
};


const getNavMenus = function(array, menus = []) {
  array.forEach(({ to, text, menus: ms }) => {
    if (text) {
      if (Array.isArray(ms)) {
        menus.push({
          text,
          to,
          menus: getNavMenus(ms),
        });
      } else {
        menus.push({ text, to });
      }
    }
  });
  return menus;
};

configure({
  state: {
    listSource: [],
  },
  actions: {
    initData({ state, commit }) {
      const {
        title,
        pathname,
        filename,
        showSidebar,
        showPageSidebar,
        sidebarTitle,
        sidebarMenus,
        pageSidebarMenus,
        routeData = {},
      } = state;
      const payload = {
        sidebarTitle,
        showSidebar: !!showSidebar,
        showPageSidebar: !!showPageSidebar,
        pageSidebarMenus,
      };

      if (!routeData.computedSidebarMenus) {
        let data;
        let pre;
        
        if (data) {
          payload.sidebarTitle = data.title;
          const { menus, list } = getMenus.call(state, pre, data.menus);
          routeData.listSource = list;
          routeData.computedSidebarMenus = menus;
        } else {
          routeData.listSource = [];
          routeData.computedSidebarMenus = [{ text: title, menus: sidebarMenus }];
        }
      }

      payload.sidebarMenus = routeData.computedSidebarMenus || [];

      const listSource = getList(pathname) || [];

      commit({
        listSource,
      });

      globalStore.dispatch({
        type: 'global/@update',
        payload,
      });
    }
  },
  onInit({ store }) {
    const location = router.location();
    const { state } = location;
    const { title } = store.state;

    if (title && location.pathname !== '/') {
      document.title = title + ' | ' + documentTitle;
    } else {
      document.title = documentTitle;
    }

    // 文章页面
    if (title) {
      // search跳转来
      if (state.hash) {
        const { hash: h } = window.location;
        setTimeout(() => {
          window.location.hash = h + '#' + state.hash;
        });
        return;
      }

      if (!location.hash) {
        window.scrollTo({ top: 0 });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }
});

router.listener((from, to) => {
  if (from?.pathname !== to.pathname) {
    NProgress.start();
  }
}, (e) => {
  if (!e.path.endsWith('*')) {
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }
});

const nav = getNavMenus([
  {
    "text": "技术",
    "to": "/tech"
  },
  {
    "text": "生活",
    "to": "/life"
  },
  {
    "text": "电子书",
    "to": "/ebook"
  },
  {
    "text": "关于",
    "to": "/about"
  },
  {
    "text": "GitHub",
    "to": "https://github.com/yinjiazeng"
  }
]);
const routerType = 'browser';
const basename = ('').replace(/^\.+|\/+$/, '') || '/';

const globalState = {
  showSidebar: false,
  pageSidebar: false,
  sidebarTtile: '',
  sidebarMenus: [],
  pageSidebarMenus: [],
};

const App = () => {
  return (
    <Router type={routerType} basename={basename}>
      <Nuomi id="global" state={globalState} onInit={null}>
        <Docfree.Layout type={routerType} title={documentTitle} nav={nav} footer={footer} dataSource={dataSource}>
          <ShapeRoute routes={routes} />
          <Route path="*">
            <Docfree.NotFound />
          </Route>
        </Docfree.Layout>
      </Nuomi>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));