import React, { memo } from "react";
import { Avatar, Divider } from "antd";
import { FooterWrap } from "./style";

export default memo(function Footer(props) {
  return (
    <FooterWrap>
      <div className="left">
        <Avatar
          size={30}
          src="https://himg.bdimg.com/sys/portraitn/item/b566d1f3d0a1f6cf159b"
        />
        <Divider type="vertical" style={{ fontSize: 30, color: "#999999" }} />
        <span style={{ color: " rgb(255, 255, 255)" }}>❤</span>
        <a href="https://github.com/jianhuagao">by jianhuagao</a>
      </div>
      <div className="right">
        <a href="http://beian.miit.gov.cn">湘ICP备2021000846号</a>
      </div>
    </FooterWrap>
  );
});
