import React, { memo } from "react";
import { Tag, Divider, Descriptions, List, Avatar } from "antd";
import { BlogBarWrap } from "./style";

export default memo(function BlogBar(props) {
  const data = [
    {
      title: "（转）nvm:正确的安装和使用node版本管理工具nvm",
    },
    {
      title: "在CentOS7中安装nodejs(npm",
    },
    {
      title: "浏览器和NodeJS中的 Event Loop 事件循环",
    },
    {
      title: "深入理解js 事件循环机制（nodejs篇）",
    },
  ];
  return (
    <BlogBarWrap>
        <div>
          <Descriptions title="About" column={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
            <Descriptions.Item label="阅读时长">10分钟</Descriptions.Item>
            <Descriptions.Item label="有用">9</Descriptions.Item>
            <Descriptions.Item label="语言">JavaScript</Descriptions.Item>
            <Descriptions.Item label="备注">empty</Descriptions.Item>
          </Descriptions>
        </div>
        <Divider orientation="left">标签</Divider>
        <div>
          <Tag color="green">NodeJs</Tag>
          <Tag color="blue">原创</Tag>
          <Tag color="geekblue">JavaScript</Tag>
        </div>
        <br />
        <div className="ant-descriptions-title">推荐阅读</div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg" />
                }
                title={<a href="#/Blog">{item.title}</a>}
                description="Note that the development build is not optimized.
                To create a production build, use yarn build."
              />
            </List.Item>
          )}
        />
    </BlogBarWrap>
  );
});
