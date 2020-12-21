import React, { memo } from "react";
import { Typography, Image, Button } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { HomeBannerData } from "@/common/virtual-data";
import { PageWrap } from "./style";

const { Title, Paragraph } = Typography;
export default memo(function index() {
  return (
    <PageWrap>
      <QueueAnim
        className="page"
        duration="500"
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
      >
        <div key="left" className="left">
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
        <div></div>
        <div key="fight" className="right">
          <Image
            width={400}
            src={require("@/assets/img/web_developer.svg").default}
          />
        </div>
      </QueueAnim>
    </PageWrap>
  );
});
