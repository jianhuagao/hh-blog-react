import React, { memo } from "react";
import { PageWrap } from "./style";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

export default memo(function CoverCard({ data, history }) {
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <PageWrap>
      <List
        dataSource={data}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        footer={
          <div>
            <b>hh-blog</b> by Gaojianhua
          </div>
        }
        renderItem={(item) => (
          <List.Item
            onClick={(e) => {
              history.push(`/Blog/${item.id}`);
            }}
            className="list"
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text={item.good}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="logo" src={item.showimg} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.udate}
            />
            {item.content}
          </List.Item>
        )}
      />
    </PageWrap>
  );
});
