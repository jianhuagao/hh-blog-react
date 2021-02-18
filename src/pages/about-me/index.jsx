import React, { memo } from "react";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { PageWrap } from "./style";
import { useFromRight } from "@/hooks/animation";
import { animated } from "react-spring";

export default memo(function AboutMe() {

  return (
    <PageWrap>
      <div className="page" style={{ marginTop: "100px" }}>
        <animated.div className="page" style={useFromRight()}>
          <Result
            icon={<SmileOutlined />}
            title="欢迎来到我的网站~ 建设中暂无更多内容 :)"
          />
        </animated.div>
      </div>
    </PageWrap>
  );
});
