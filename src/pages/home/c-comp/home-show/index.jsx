import React, { memo, useRef } from "react";
import { Typography, Carousel, Avatar, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { PageWrap } from "./style";
import { TechnologyStack } from "@/common/virtual-data";

const { Title } = Typography;

export default memo(function HomeShow() {
  //hooks
  const CarouselRef = useRef();
  const avatarSize = {
    xs: 60,
    sm: 70,
    md: 80,
    lg: 90,
    xl: 100,
    xxl: 110,
  };

  const pagesNum = TechnologyStack.length % 6;
  const pArr = Array.from(new Array(pagesNum + 1).keys()).slice(0);
  //TODO:当前有个关于ref的Warning未解决
  return (
    <PageWrap>
      <div className="page con">
        <Title level={3}>博文分类</Title>
        <br />
        <Button
          className="btnLeft"
          type="primary"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={() => {
            CarouselRef.current.prev();
          }}
        />
        <Button
          className="btnRight"
          type="primary"
          shape="circle"
          icon={<RightOutlined />}
          onClick={() => {
            CarouselRef.current.next();
          }}
        />
        <Carousel ref={CarouselRef}>
          {pArr.map((item, index) => {
            return (
              <QueueAnim key={index}>
                <div key={index} className="carouselItem">
                  {TechnologyStack.slice(index * 5, (index + 1) * 5).map(
                    (item2, index2) => {
                      return (
                        <Avatar
                          key={index2}
                          className="avatarItem icon_sprite"
                          style={{ backgroundPosition: item2.imgUrl }}
                          size={avatarSize}
                        />
                      );
                    }
                  )}
                </div>
              </QueueAnim>
            );
          })}
        </Carousel>
      </div>
    </PageWrap>
  );
});
