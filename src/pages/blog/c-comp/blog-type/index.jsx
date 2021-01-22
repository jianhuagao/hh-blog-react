import React, { memo, useRef, useState, useEffect } from "react";
import { Typography, Carousel, Avatar, Button, Tag } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { PageWrap } from "./style";
import { TechnologyStack } from "@/common/virtual-data";
import { animated } from "react-spring";
import { useFromRight, useHov } from "@/hooks/animation";

const { Title } = Typography;
const { CheckableTag } = Tag;

export default memo(function HomeShow(props) {
  //hooks
  const {type,setType}=props.data;
  const [typeNum, setTypeNum] = useState(5);
  const CarouselRef = useRef();
  const avatarSize = {
    xs: 60,
    sm: 70,
    md: 80,
    lg: 90,
    xl: 100,
    xxl: 110,
  };
  useEffect(() => {
    window.innerWidth < 620 && setTypeNum(4);
  }, []);
  const pagesNum = Math.ceil(TechnologyStack.length / typeNum);
  const pArr = Array.from(new Array(pagesNum).keys()).slice(0);
  const [tran,setTran,,calc,trans] = useHov();

  return (
    <PageWrap>
      <div className="page con">
        <Title level={3}>My Blog</Title>
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
        <animated.div style={useFromRight()}>
          <Carousel ref={CarouselRef}>
            {pArr.map((item, index) => {
              return (
                <div className="carouselItem" key={index}>
                  {TechnologyStack.slice(
                    index * typeNum,
                    (index + 1) * typeNum
                  ).map((item2, index2) => {
                    return (
                      <animated.div
                        key={index2}
                        onMouseMove={({ clientX: x, clientY: y }) =>
                          setTran({ xys: calc(x, y) })
                        }
                        onMouseLeave={() => setTran({ xys: [0, 0, 1] })}
                        style={{ transform: tran.xys.interpolate(trans) }}
                      >
                        <Avatar
                          className={{
                            avatarItem: true,
                            icon_sprite: true,
                            avatarItemSelect: type === item2.id,
                          }}
                          onClick={() => {
                            setType(item2.id);
                          }}
                          style={{
                            backgroundPosition: item2.imgUrl,
                          }}
                          size={avatarSize}
                        />
                        <div>
                          <CheckableTag
                            style={{
                              color: "white",
                              fontSize: "17px",
                              marginTop: "5px",
                            }}
                            checked={type === item2.id}
                          >
                            {item2.title}
                          </CheckableTag>
                        </div>
                      </animated.div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </animated.div>
      </div>
    </PageWrap>
  );
});
