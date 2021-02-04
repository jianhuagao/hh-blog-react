import React, { memo, useRef, useEffect } from "react";
import { Typography, Carousel, Avatar, Button, Tag, Skeleton } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getBlogTypesAction,
  changeSelectBlogTypeAction,
} from "../../store/actionCreators";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { PageWrap } from "./style";
import { animated } from "react-spring";
import { useFromRight, useHov } from "@/hooks/animation";

const { Title } = Typography;
const { CheckableTag } = Tag;

export default memo(function HomeShow(props) {
  //hooks
  const typeNum = window.innerWidth < 620 ? 4 : 5;
  const CarouselRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogTypesAction());
  }, [dispatch]);

  const { blogTypes } = useSelector(
    (state) => ({
      blogTypes: state.getIn(["blog", "blogTypes"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    const { rows } = blogTypes;
    if (rows) {
      dispatch(changeSelectBlogTypeAction(rows[0] && rows[0].id));
    }
  }, [blogTypes, dispatch]);
  
  const { selectBlogType } = useSelector(
    (state) => ({
      selectBlogType: state.getIn(["blog", "selectBlogType"]),
    }),
    shallowEqual
  );
  const avatarSize = {
    xs: 60,
    sm: 70,
    md: 80,
    lg: 90,
    xl: 100,
    xxl: 110,
  };
  const pagesNum = Math.ceil((blogTypes.count || 5) / typeNum);
  const pArr = Array.from(new Array(pagesNum).keys()).slice(0);
  const [tran, setTran, , calc, trans] = useHov();
  const TechnologyStack = blogTypes.rows || [];
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
          <Skeleton active loading={!blogTypes.count}>
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
                              avatarItemSelect: selectBlogType === item2.id,
                            }}
                            onClick={() => {
                              dispatch(changeSelectBlogTypeAction(item2.id));
                            }}
                            src={item2.logo_img}
                            size={avatarSize}
                            alt="T"
                          />
                          <div>
                            <CheckableTag
                              style={{
                                color: "white",
                                fontSize: "17px",
                                marginTop: "5px",
                              }}
                              checked={selectBlogType === item2.id}
                            >
                              {item2.name}
                            </CheckableTag>
                          </div>
                        </animated.div>
                      );
                    })}
                  </div>
                );
              })}
            </Carousel>
          </Skeleton>
        </animated.div>
      </div>
    </PageWrap>
  );
});
