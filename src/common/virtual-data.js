// 虚拟数据
export const TechnologyStack = [
  {
    id: 1,
    title: "C#",
    detail: "dot-net",
    imgUrl: "0% -1%",
    pageUrl: "",
    state: 1
  },
  {
    id: 2,
    title: "CSS3",
    detail: "",
    imgUrl: "19.5% -2%",
    pageUrl: "",
    state: 1
  }, {
    id: 3,
    title: "Dart",
    detail: "",
    imgUrl: "39.5% -2%",
    pageUrl: "",
    state: 1
  },
  {
    id: 4,
    title: "eslint",
    detail: "",
    imgUrl: "59.5% -2%",
    pageUrl: "",
    state: 1
  },
  {
    id: 5,
    title: "Git",
    detail: "",
    imgUrl: "80.5% -2%",
    pageUrl: "",
    state: 1
  },
  {
    id: 6,
    title: "Flutter",
    detail: "",
    imgUrl: "101.5% -2%",
    pageUrl: "",
    state: 1
  },
  {
    id: 7,
    title: "node",
    detail: "",
    imgUrl: "-1% 33%",
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
    title: "Js",
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
    title: "npm",
    detail: "",
    imgUrl: "100.5% 33%",
    pageUrl: "",
    state: 1
  }, {
    id: 13,
    title: "Python",
    detail: "",
    imgUrl: "-1% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 14,
    title: "React",
    detail: "",
    imgUrl: "19.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 15,
    title: "Redux",
    detail: "",
    imgUrl: "39.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 16,
    title: "Ts",
    detail: "",
    imgUrl: "59.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 17,
    title: "VS",
    detail: "",
    imgUrl: "80.5% 67%",
    pageUrl: "",
    state: 1
  }, {
    id: 18,
    title: "VSCode",
    detail: "",
    imgUrl: "100.5% 67%",
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
    title: "Vue",
    detail: "",
    imgUrl: "39.5% 99%",
    pageUrl: "",
    state: 1
  }, {
    id: 22,
    title: "WebPack",
    detail: "",
    imgUrl: "60.5% 100%",
    pageUrl: "",
    state: 1
  },
]

export const BlogData = [
  {
    title: "Dart的消息循环和消息队列",
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    dateTime: "2天前",
    blogType: "Dart",
    state: "1",
    content: `一个Dart应用有一个消息循环和两个消息队列-- event队列和microtask队列。
    event队列包含所有外来的事件：I/O，mouse events，drawing events，timers，isolate之间的message等。
    microtask 队列在Dart中是必要的，因为有时候事件处理想要在稍后完成一些任务但又希望是在执行下一个事件消息之前。event队列包含Dart和来自系统其它位置的事件。但microtask队列只包含来自当前isolate的内部代码。
    正如下面的流程图，当main方法退出后，event循环就开始它的工作。首先它会以FIFO的顺序执行micro task，当所有micro task执行完后它会从event 队列中取事件并执行。如此反复，直到两个队列都为空。`
  },
  {
    title: "Dart学习之环境搭建",
    imgUrl: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    dateTime: "周一",
    blogType: "Dart",
    state: "1",
    content: `Dart 语言在2011年10月由 Google 发布，并在2012年10月发布第一个里程碑版本 M1。
    Dart 作为一种结构化的Web开发语言，既让人感觉熟悉，又足够灵活。既适用于快速原型开发，
    又适用于组织大型的代码库。既可以用在桌面版和移动版的浏览器中，也可以在服务器端使用。
    总体上说，Dart 语言是感觉熟悉的并且符合程序员的直觉，特别是你已经掌握了 Java、JavaScript 
    等语言的话。Dart 是一门很特别的语言。我觉得最有特色的特性是可选类型，他在动态语言的基础上，结合了静态语
    言的优点。另一个特色是，Dart中的类和接口是统一的，类即接口，你可以继承一个类，也可以实现一个类（接口）。`
  }
]

export const TypeDetails = [
  {
    type: "Dart",
    Introduction: "Dart是谷歌开发的计算机编程语言",
    apiUrl: "",
    website: "",
    company: "Google",
    protocol: "BSD",
    version: "2.2.0",
    download: "下载",
    system: "跨平台",
  }
]