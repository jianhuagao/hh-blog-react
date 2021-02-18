import React, { memo } from "react";
import {PageHeader, Button,Tag } from "antd";
import { HeartTwoTone,LikeTwoTone,BuildTwoTone } from "@ant-design/icons";
import { BlogHeaderWrap } from "./style";

export default memo(function BlogHeader({blog}) {
  return (
    <BlogHeaderWrap>
      <PageHeader
          title={blog && blog.title}
          subTitle="2021年1月20日"
          tags={<Tag color="blue">原创</Tag>}
          avatar={{ src: 'https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg' }}
          
        >
          <Button type="text" size="small" icon={<LikeTwoTone />} >点赞(73)</Button>
          <Button type="text" size="small" icon={<HeartTwoTone />} >收藏(15)</Button>
          <Button type="text" size="small" icon={<BuildTwoTone />} >转发(11)</Button>
        </PageHeader>
    </BlogHeaderWrap>
  );
});
