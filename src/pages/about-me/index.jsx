import React, { memo } from "react";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { PageWrap } from "./style";
import { useSpring as spring, animated } from "react-spring";

export default memo(function AboutMe() {
  const amd = spring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  });
  return (
    <PageWrap>
      <div className="page" style={{ marginTop: "100px" }}>
        <animated.div className="page" style={amd}>
          <Result
            key="ret"
            icon={<SmileOutlined />}
            title="欢迎来到我的博客，网站建设中暂无更多内容 :)"
          />
        </animated.div>
      </div>
    </PageWrap>
  );
});
