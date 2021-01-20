import React, { memo, useState, useEffect } from "react";
import { Card, Drawer,Button } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { useParams } from "react-router-dom";
import BlogBar from "./c-comp/blogbar";
import Comment from "./c-comp/comment";
import Header from "./c-comp/blog-header";
import Replay from "./c-comp/replay";
import { BlogdetailWrap } from "./style";
import { useSpring as spring, animated } from "react-spring";
import ReactMarkdown from "react-markdown";

export default memo(function Blogdetail(props) {
  const amd = spring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  });
  const [blogId, setBlogId] = useState();
  const [drawerVis, setDrawerVis] = useState(false);
  const [rightShow, setRightShow] = useState(true);
  const { id } = useParams();
  const content = `
  # Happy hacking Blog
#### 之前有朋友提到，博客用前端渲染不利于SEO优化，后面我向NextJs版本移植，[移植地址](https://github.com/jianhuagao/hh-blog-next) （暂未完全完成移植，移植后会在此进行标注）
# 目标
打造一个完整的博客系统，包括以下四部分\\
1.博客前端展示（React+antd）\\
2.后台数据管理系统（Vue3+element(vuetify)）\\
3.后端接口（nodejs）\\
4.微信小程序
# 使用方法
1.在根目录 yarn install or  npm install\\
2.执行  yarn start or  npm run start

# 技术栈
使用Flex进行布局\\
配置路径别名使用: carco\\
路由使用react-router来管理\\
使用react-router-config集中式路径映射表管理\\
使用styled-components+普通的css编写样式\\
使用axios发送网络请求\\
项目全面拥抱React Hooks\\
项目组件库使用: ant design\\
使用immutable对项目reducer中state进行管理\\
使用redux-immtable对根目录reducer中state进行管理\\
项目使用redux-thunk中间件\\
使用propType校验props类型及默认值\\
使用motion.ant.design添加过渡动画效果\\
项目中的优化: 函数式组件全部采用memo、路由懒加载、函数防抖
# 文件目录
│─src\\
  ├─assets 公共资源css和图片\\
    ├─css  全局css\\
    ├─img   图片\\
  ├─common  公共常量以及模拟数据\\
  ├─components 公共组件\\
  ├─pages   页面\\
  ├─router  路由配置\\
  ├─service 网络配置和请求\\
  └─store   全局的store配置\\
  └─utils   工具\\
  └─hooks   自定义hooks
  `;
  useEffect(() => {
    window.innerWidth < 620 && setRightShow(false);
  }, []);
  useEffect(() => {
    setBlogId(id);
  }, [id]);
  return (
    <BlogdetailWrap>
      <animated.div className="page" style={amd}>
        <div className="header">
          <Header rightShow={rightShow} setDrawerVis={setDrawerVis} />
        </div>
        <div className="contents">
          <div className={classnames({ left: true, "left-pc": rightShow })}>
            <Card>
              <div className="reactMarkdown">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </Card>
            <Card>
              <div className="ant-descriptions-title">评论</div>
              <Comment>
                <Comment>
                  <Comment />
                  <Comment />
                </Comment>
                <Comment />
              </Comment>
              <Replay />
            </Card>
          </div>
          {rightShow && (
            <div className="right">
              <Card>
                <BlogBar />
              </Card>
            </div>
          )}
        </div>
      </animated.div>
      <Drawer
        placement="right"
        closable={false}
        onClose={(e) => {
          setDrawerVis(false);
        }}
        visible={drawerVis}
      >
        <BlogBar />
      </Drawer>
      {rightShow || (
        <div className="fix">
          <Button
            type="text"
            icon={<BarsOutlined />}
            onClick={(e) => {
              setDrawerVis(true);
            }}
          />
        </div>
      )}
    </BlogdetailWrap>
  );
});
