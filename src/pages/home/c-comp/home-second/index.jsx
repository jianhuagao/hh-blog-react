import React, { memo } from "react";
import QueueAnim from "rc-queue-anim";
import { Typography } from "antd";
import { PageWrap } from "./style";

const { Title, Text } = Typography;

export default memo(function index() {
  return (
    <PageWrap>
      <QueueAnim className="page midCardContent" duration="1000">
        <div className="midCard">
          <div className="top">
            <Title level={4}>原创</Title>
            <Text type="secondary">Original Blog</Text>
          </div>
          <div className="button"></div>
        </div>
        <div className="midCard">
          <div className="top">
            <Title level={4}>转载</Title>
            <Text type="secondary">Reprinted blog</Text>
          </div>
          <div className="button"></div>
        </div>
        <div className="midCard">
          <div className="top">
            <Title level={4}>资源</Title>
            <Text type="secondary">Resources</Text>
          </div>
          <div className="button"></div>
        </div>
        <div className="midCard">
          <div className="top">
            <Title level={4}>生活</Title>
            <Text type="secondary">Life</Text>
          </div>
          <div className="button"></div>
        </div>
      </QueueAnim>
    </PageWrap>
  );
});
