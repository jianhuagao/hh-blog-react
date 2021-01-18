import React, { memo } from "react";
import { Typography } from "antd";
import { PageWrap, ButtonWrap } from "./style";
import {useSpring as spring, animated} from 'react-spring'

const { Title, Text } = Typography;

export default memo(function index() {
  const amd = spring({opacity: 1,transform:"translateY(0px)", from: {opacity: 0,transform:"translateY(40px)"}})
  return (
    <PageWrap>
      <animated.div style={amd}>
        <div className="page midCardContent">
          <div className="midCard">
            <div className="top">
              <Title level={4}>原创</Title>
              <Text type="secondary">Original Blog</Text>
            </div>
            <ButtonWrap>
              <img
                src={require("@/assets/img/home-Original.svg").default}
                alt=""
              />
            </ButtonWrap>
          </div>
          <div className="midCard">
            <div className="top">
              <Title level={4}>转载</Title>
              <Text type="secondary">Reprinted blog</Text>
            </div>
            <ButtonWrap>
              <img
                src={require("@/assets/img/home-Reprinted.svg").default}
                alt=""
              />
            </ButtonWrap>
          </div>
          <div className="midCard">
            <div className="top">
              <Title level={4}>资源</Title>
              <Text type="secondary">Resources</Text>
            </div>
            <ButtonWrap>
              <img
                src={require("@/assets/img/home-Resources.svg").default}
                alt=""
              />
            </ButtonWrap>
          </div>
          <div className="midCard">
            <div className="top">
              <Title level={4}>生活</Title>
              <Text type="secondary">Life</Text>
            </div>
            <ButtonWrap>
              <img src={require("@/assets/img/home-Life.svg").default} alt="" />
            </ButtonWrap>
          </div>
        </div>
      </animated.div>
    </PageWrap>
  );
});
