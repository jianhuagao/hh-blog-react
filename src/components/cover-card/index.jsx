import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PageWrap } from "./style";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

export default memo(function CoverCard({ data, history }) {
  const { blogLoading } = useSelector(state=>({
    blogLoading:state.getIn(["blog","blogLoading"])
  }), shallowEqual);
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <PageWrap>
      <List
        loading={blogLoading}
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
              avatar={<Avatar src="https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg"/>}
              title={item.title}
              description={item.udate}
            />
            {item.resume}
          </List.Item>
        )}
      />
    </PageWrap>
  );
});
