import React, { memo } from "react";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { PageWrap } from "./style";
import QueueAnim from "rc-queue-anim";
export default memo(function AboutMe() {
  return (
    <PageWrap>
      <div className="page" style={{ marginTop: "100px" }}>
        <QueueAnim className="page" duration="2000">
          <Result
            key="ret"
            icon={<SmileOutlined />}
            title="欢迎来到我的博客，网站建设中暂无更多内容 :)"
          />
        </QueueAnim>
      </div>
    </PageWrap>
  );
});
