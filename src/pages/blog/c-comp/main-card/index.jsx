import React, { memo } from "react";
import { PageWrap } from "./style";
import { Card, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import ColorWindow from "@c/color-window";
export default memo(function Blog() {
  return (
    <PageWrap className="page">
      <QueueAnim
        className="page"
        duration="1000"
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
      >
        <Card key="mainCard" className="contentCard">
          <Result
            icon={<SmileOutlined />}
            title="欢迎来到我的博客，网站建设中暂无更多内容 :)"
          />
          <ColorWindow></ColorWindow>
          <br />
          <ColorWindow>测试返回顶部按钮,请继续往下滑...</ColorWindow>
          <br />
          <ColorWindow>
            <ul>
              <li>继续</li>
              <li>继续</li>
              <li>继续</li>
              <li>继续</li>
              <li>继续</li>
              <li>继续</li>
              <li>继续</li>
            </ul>
          </ColorWindow>
          <br />
          <ColorWindow>手机端应该差不多出来了，pc估计还得继续滑</ColorWindow>
          <br />
          <ColorWindow>
            <ul>
              <li>PC继续</li>
              <li>PC继续</li>
              <li>PC继续</li>
              <li>PC继续</li>
              <li>PC继续</li>
              <li>PC继续</li>
              <li>PC继续</li>
            </ul>
          </ColorWindow>
          <br />
          <ColorWindow style={{ textAlign: "right" }}>
            应该差不多出来了，在这里是不是↘
          </ColorWindow>
        </Card>
      </QueueAnim>
    </PageWrap>
  );
});
