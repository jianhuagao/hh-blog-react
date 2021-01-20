import React, { memo } from "react";
// import { Result } from "antd";
// import { SmileOutlined } from "@ant-design/icons";
import FindShow from "./c-comp/find-show";
import { PageWrap } from "./style";
import { animated } from "react-spring";
import { useFromRight } from "@/hooks/animation";

export default memo(function Find() {
  return (
    <PageWrap>
      <div className="page" style={{ marginTop: "100px" }}>
        <animated.div className="page" style={useFromRight()}>
          <FindShow/>
        </animated.div>
      </div>
    </PageWrap>
  );
});
