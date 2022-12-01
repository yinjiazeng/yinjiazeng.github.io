import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, store, nuomi } from '@nuomi';
import * as Docfree from 'docfree-components';
import 'docfree-components/lib/style/lang.less';
import footer from '../footer.js';



const routes = [
  {
    "path": "/",
    "pathname": "/",
    "children": <Docfree.BlogEntry pageSize={30} />
  },
  {
    "path": "/about",
    "children": [
      {
        "ctime": 1586864388295.826,
        "utime": 1644377529095.2322,
        "pathname": "/about/",
        "filename": "readme",
        "ext": ".md",
        "title": "readme",
        "path": "/",
        ...require("../../about/readme.md?getTitleInfo=1").default,
    async: (cb) => {
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
    "path": "/life",
    "children": [
      {
        "path": "/",
        "pathname": "/life/",
        "children": <Docfree.BlogEntry pageSize={30} />
      },
      {
        "path": "/骑行去大理",
        "children": [
          {
            "ctime": 1586950258282.7258,
            "utime": 1644387752759.0925,
            "pathname": "/life/骑行去大理/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../life/骑行去大理/readme.md?getTitleInfo=1").default,
    async: (cb) => {
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
        "pathname": "/tech/",
        "children": <Docfree.BlogEntry pageSize={30} />
      },
      {
        "path": "/app证书申请以及上架",
        "children": [
          {
            "ctime": 1669878911323.7217,
            "utime": 1669878920742.573,
            "pathname": "/tech/app证书申请以及上架/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/app证书申请以及上架/readme.md?getTitleInfo=1").default,
    async: (cb) => {
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
            "ctime": 1644548608007.3862,
            "utime": 1669880496414.8647,
            "pathname": "/tech/github自动化部署静态站点/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/github自动化部署静态站点/readme.md?getTitleInfo=1").default,
    async: (cb) => {
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
            "ctime": 1644464436331.993,
            "utime": 1644396575033.727,
            "pathname": "/tech/uniapp制作启动图/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/uniapp制作启动图/readme.md?getTitleInfo=1").default,
    async: (cb) => {
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
            "ctime": 1669887769245.6152,
            "utime": 1669879767013.1765,
            "pathname": "/tech/uniapp常见问题汇总/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/uniapp常见问题汇总/readme.md?getTitleInfo=1").default,
    async: (cb) => {
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
        "path": "/uniapp接入三方支付",
        "children": [
          {
            "ctime": 1669879696177.2366,
            "utime": 1669879745424.0337,
            "pathname": "/tech/uniapp接入三方支付/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/uniapp接入三方支付/readme.md?getTitleInfo=1").default,
    async: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/uniapp接入三方支付/readme.md").default);
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
        "path": "/uniapp接入三方登录",
        "children": [
          {
            "ctime": 1669879698327.261,
            "utime": 1669879767013.1765,
            "pathname": "/tech/uniapp接入三方登录/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/uniapp接入三方登录/readme.md?getTitleInfo=1").default,
    async: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/uniapp接入三方登录/readme.md").default);
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
        "path": "/uniapp接入消息通知",
        "children": [
          {
            "ctime": 1669879295213.0193,
            "utime": 1669879668338.8198,
            "pathname": "/tech/uniapp接入消息通知/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/uniapp接入消息通知/readme.md?getTitleInfo=1").default,
    async: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/uniapp接入消息通知/readme.md").default);
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
        "path": "/uniapp自定义启动页",
        "children": [
          {
            "ctime": 1669877507202.7507,
            "utime": 1669877567618.2888,
            "pathname": "/tech/uniapp自定义启动页/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/uniapp自定义启动页/readme.md?getTitleInfo=1").default,
    async: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/uniapp自定义启动页/readme.md").default);
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
        "path": "/小程序音视频通话",
        "children": [
          {
            "ctime": 1669887675304.3252,
            "utime": 1669887680331.4778,
            "pathname": "/tech/小程序音视频通话/",
            "filename": "readme",
            "ext": ".md",
            "title": "readme",
            "path": "/",
            ...require("../../tech/小程序音视频通话/readme.md?getTitleInfo=1").default,
    async: (cb) => {
      require.ensure([], (require) => {
        cb(require("../../tech/小程序音视频通话/readme.md").default);
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
      const { children, render, effects, reducers, onInit, onChange, ...rest } = route;
      if (Array.isArray(children)) {
        data = generateData(children, data);
      } else if (route.title) {
        data.push(rest);
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

nuomi.config({
  state: {
    listSource: [],
  },
  effects: {
    initData() {
      const nuomiProps = this.getNuomiProps();
      const {
        title,
        pathname,
        filename,
        showSidebar,
        showPageSidebar,
        sidebarTitle,
        sidebarMenus,
        pageSidebarMenus,
        data: routeData,
        location,
      } = nuomiProps;

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
          const { menus, list } = getMenus.call(nuomiProps, pre, data.menus);
          routeData.listSource = list;
          routeData.computedSidebarMenus = menus;
        } else {
          routeData.listSource = [];
          routeData.computedSidebarMenus = [{ text: title, menus: sidebarMenus }];
        }
      }

      payload.sidebarMenus = routeData.computedSidebarMenus || [];

      const listSource = getList(pathname) || [];

      this.dispatch({
        type: '_updateState',
        payload: {
          listSource,
        },
      });

      store.dispatch({
        type: 'global/_updateState',
        payload,
      });
    }
  },
  onInit() {
    const { path, title, location, data } = this;

    if (title && path !== '/') {
      document.title = title + ' | ' + documentTitle;
    } else {
      document.title = documentTitle;
    }

    // 文章页面
    if (title) {
      // search跳转来
      if (data.hash) {
        const { hash: h } = window.location;
        setTimeout(() => {
          window.location.hash = h + '#' + data.hash;
        });
        return;
      }

      if (!location.hash) {
        window.scrollTo({ top: 0 });
      }
    } else {
      // 博客首页
      if (path) {
        window.scrollTo({ top: 0 });
      }
    }
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
    "text": "关于",
    "to": "/about"
  },
  {
    "text": "GitHub",
    "to": "https://github.com/yinjiazeng"
  }
]);
const routerType = 'hash';
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