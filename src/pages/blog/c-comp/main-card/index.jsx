import React, { memo } from "react";
import { PageWrap } from "./style";
import { Card, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
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
        </Card>
      </QueueAnim>
    </PageWrap>
  );
});
