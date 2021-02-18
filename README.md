# Happy hacking Blog
[预览地址](https://www.gaojianhua.top)
# 目标
💜打造一个完整的博客系统，包括以下四部分\
1.博客前端（React+antd）◼️◼️◼️◼️◼️◼️◼️◻️◻️◻️已完成70% [项目地址](https://github.com/jianhuagao/hh-blog-react)  [预览地址](https://www.gaojianhua.top)\
2.后台管理系统（React+antd）◼️◼️◼️◻️◻️◻️◻️◻️◻️◻️已完成30% [项目地址](https://github.com/jianhuagao/hh-blog-admin)  [预览地址](http://admin.gaojianhua.top)\
3.后端接口api（nodejs）◼️◼️◼️◼️◼️◼️◻️◻️◻️◻️已完成60% [项目地址](https://github.com/jianhuagao/hh-blog-api)\
4.微信小程序 正在做了...◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️(新建文件夹)\
4.顺便推荐一下自己写的react脚手架 🤩 [项目地址](https://github.com/jianhuagao/quick-react-app)
# 使用方法
1.在根目录 `yarn install` or  `npm install`\
2.执行  `yarn start` or  `npm run start`

使用Flex进行布局\
webpack配置使用: carco\
路由使用react-router\
使用react-router-config集中式路径映射表管理\
使用styled-components编写样式\
使用axios发送网络请求\
React Hooks\
项目组件库使用: ant design\
使用immutable对项目state进行管理\
项目使用redux-thunk中间件\
使用propType校验props类型及默认值\
使用react spring添加过渡动画效果\
项目中的优化: 函数式组件全部采用memo、路由懒加载、函数防抖
# 文件目录
│─src\
  ├─assets 公共资源css和图片\
    ├─css  全局css\
    ├─img   图片\
  ├─common  公共常量以及模拟数据\
  ├─components 公共组件\
  ├─pages   页面\
  ├─router  路由配置\
  ├─service 网络配置和请求\
  └─store   全局的store配置\
  └─utils   工具\
  └─hooks   自定义hooks

# Getting Started with Create React App(react官方说明)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
