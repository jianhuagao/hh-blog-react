import React, { memo } from "react";
import { Typography, Image, Button } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { HomeBannerData } from "@/common/virtual-data";
import { PageWrap } from "./style";
import { animated } from 'react-spring'
import { useFromRight } from "@/hooks/animation";



const { Title, Paragraph } = Typography;

export default memo(function Banner() {

  return (
    <PageWrap>
      <animated.div style={useFromRight()}>
        <div className="page">
          <div className="left">
            <Title>{HomeBannerData[0].title}</Title>
            <Paragraph
              style={{
                lineHeight: "2em",
                fontSize: 19,
                fontWeight: 600,
                color: "#5d5d5d",
              }}
            >
              {HomeBannerData[0].content}
            </Paragraph>
            <Button shape="round" icon={<HeartOutlined />}>
              <Link to="/Find"> 手气不错</Link>
            </Button>
          </div>
          <div className="right">
            <Image
              width={400}
              src={require("@/assets/img/web_developer.png").default}
            />
          </div>
        </div>
      </animated.div>
    </PageWrap>
  );
});
