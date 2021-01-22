// 虚拟数据
export const TechnologyStack = [
  {
    id: 1,
    title: "Node",
    detail: "nodejs",
    imgUrl: "-0.7% -1.5%",
    pageUrl: "",
    state: 1
  },
  {
    id: 2,
    title: "React",
    detail: "",
    imgUrl: "19% -1%",
    pageUrl: "",
    state: 1
  }, {
    id: 3,
    title: "Js",
    detail: "ecma script",
    imgUrl: "39.5% -1%",
    pageUrl: "",
    state: 1
  },
  {
    id: 4,
    title: "Ts",
    detail: "",
    imgUrl: "59.5% -1%",
    pageUrl: "",
    state: 1
  },
  {
    id: 5,
    title: "Git",
    detail: "",
    imgUrl: "80% -1%",
    pageUrl: "",
    state: 1
  },
  {
    id: 6,
    title: "npm",
    detail: "",
    imgUrl: "100% -1%",
    pageUrl: "",
    state: 1
  },
  {
    id: 7,
    title: "css",
    detail: "",
    imgUrl: "-1% 32%",
    pageUrl: "",
    state: 1
  },
  {
    id: 8,
    title: "HTML",
    detail: "",
    imgUrl: "19.5% 32%",
    pageUrl: "",
    state: 1
  },
  {
    id: 9,
    title: "webpack",
    detail: "",
    imgUrl: "40% 33%",
    pageUrl: "",
    state: 1
  },
  {
    id: 10,
    title: "MongoDB",
    detail: "",
    imgUrl: "59.5% 33%",
    pageUrl: "",
    state: 1
  }, {
    id: 11,
    title: "MySQL",
    detail: "",
    imgUrl: "79.5% 33%",
    pageUrl: "",
    state: 1
  }, {
    id: 12,
    title: "MQTT",
    detail: "",
    imgUrl: "100% 33%",
    pageUrl: "",
    state: 1
  }, {
    id: 13,
    title: "dotnet",
    detail: "",
    imgUrl: "-1% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 14,
    title: "redux",
    detail: "",
    imgUrl: "19.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 15,
    title: "Dart",
    detail: "",
    imgUrl: "39.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 16,
    title: "Flutter",
    detail: "",
    imgUrl: "59.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 17,
    title: "Github",
    detail: "",
    imgUrl: "80.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 18,
    title: "VueJs",
    detail: "",
    imgUrl: "100% 66%",
    pageUrl: "",
    state: 1
  },
  {
    id: 19,
    title: "yarn",
    detail: "",
    imgUrl: "-1% 101%",
    pageUrl: "",
    state: 1
  },
  {
    id: 20,
    title: "WeChat",
    detail: "",
    imgUrl: "19.5% 100.5%",
    pageUrl: "",
    state: 1
  }, {
    id: 21,
    title: "Python",
    detail: "",
    imgUrl: "39.5% 100%",
    pageUrl: "",
    state: 1
  }, {
    id: 22,
    title: "vscode",
    detail: "",
    imgUrl: "60.5% 100%",
    pageUrl: "",
    state: 1
  }, {
    id: 22,
    title: "Docker",
    detail: "",
    imgUrl: "80% 100%",
    pageUrl: "",
    state: 1
  }, {
    id: 22,
    title: "Linux",
    detail: "",
    imgUrl: "100.5% 100%",
    pageUrl: "",
    state: 1
  },
]

export const BlogData = [
  {
    id:1,
    title: "Node.js 事件循环机制",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    dateTime: "2天前",
    blogType: "node",
    state: "1",
    content: `Node.js 采用事件驱动和异步 I/O 的方式，实现了一个单线程、高并发的 JavaScript 运行时环境，而单线程就意味着同一时间只能做一件事，那么 Node.js 如何通过单线程来实现高并发和异步 I/O？本文将围绕这个问题来探讨 Node.js 的单线程模型 。
    Node.js 在主线程里维护了一个事件队列，当接到请求后，就将该请求作为一个事件放入这个队列中，然后继续接收其他请求。当主线程空闲时(没有请求接入时)，就开始循环事件队列，检查队列中是否有要处理的事件，这时要分两种情况：如果是非 I/O 任务，就亲自处理，
    并通过回调函数返回到上层调用；如果是 I/O 任务，就从 线程池 中拿出一个线程来处理这个事件，并指定回调函数，然后继续循环队列中的其他事件。`
  },
  {
    id:2,
    title: "Node.js 深入学之理解Buffer",
    imgUrl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    dateTime: "周一",
    blogType: "Dart",
    state: "1",
    content: `因为在node中需要处理网络协议、操作数据库、处理图片、接受上传文件，因此，需要大量操作二进制数据，
    虽然js对于字符串支持良好，但是由于需要对于字符串进行序列化，因此，就有必要了解一下Buffer，对，没错，
    Buffer其实是二进制数据模块。buffer是一个典型的js与c++结合的模块，将性能相关的部分用c++实现，
    将非性能相关的部分用js实现。同时buffer也是node的核心模块，可以直接使用，并且，
    第五章我们已经知道buffer属于堆外内存，可以通过自己管理其垃圾回收。当然，buffer对象的管理还是在堆内，
    再由这个对象去管理堆外的内存。`
  }
]

export const TypeDetails = [
  {
    type: "Node",
    Introduction: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。",
    apiUrl: "",
    website: "",
    company: "Ryan Dahl",
    protocol: "MIT&BSD",
    version: "14.15.3",
    download: "下载",
    system: "跨平台",
  }
]

export const HomeBannerData = [
  {
    title: "Next.js",
    content: `这是一个用于 生产环境的React 框架,Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。`,
    aboutDate: "nodejs",
    source: "百度百科",
    imgUrl: "@/assets/img/web_developer.svg",
    isShow: 1
  },
  // {
  //   title: "冬至（二十四节气）",
  //   content: "冬至，又称日短至、冬节、亚岁等，兼具自然与人文两大内涵，既是二十四节气中一个重要的节气，也是中国民间的传统节日。冬至是四时八节之一，被视为冬季的大节日，在古代民间有“冬至大如年”的讲法。冬至习俗因地域不同而又存在着习俗内容或细节上的差异。在中国南方地区，有冬至祭祖、宴饮的习俗。在中国北方地区，每年冬至日有吃饺子的习俗。",
  //   aboutDate: "每年公历12月21或22或23日",
  //   source: "百度百科",
  //   imgUrl: "",
  //   isShow: 1
  // },
]