import React, { memo } from "react";
import {PageHeader, Button,Tag } from "antd";
import { HeartTwoTone,LikeTwoTone,BuildTwoTone } from "@ant-design/icons";
import { BlogHeaderWrap } from "./style";

export default memo(function BlogHeader({blogId}) {
  return (
    <BlogHeaderWrap>
      <PageHeader
          title={`quick-react-app${blogId}`}
          subTitle="2021年1月20日"
          tags={<Tag color="blue">原创</Tag>}
          avatar={{ src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
          
        >
          <Button type="text" size="small" icon={<LikeTwoTone />} >点赞(73)</Button>
          <Button type="text" size="small" icon={<HeartTwoTone />} >收藏(15)</Button>
          <Button type="text" size="small" icon={<BuildTwoTone />} >转发(11)</Button>
        </PageHeader>
    </BlogHeaderWrap>
  );
});
