import React, { memo, useEffect } from "react";
import { Typography ,Skeleton } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getAreasAction } from "../../store/actionCreators";
import { PageWrap, ButtonWrap } from "./style";
import { animated } from "react-spring";
import { useFromBottom } from "@/hooks/animation";

const { Title, Text } = Typography;

export default memo(function Second() {
  const { areas } = useSelector(
    (state) => ({
      areas: state.getIn(["home", "areas"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAreasAction());
  }, [dispatch]);

  return (
    <PageWrap>
      <animated.div style={useFromBottom()}>
        <div className="page midCardContent">
          <Skeleton active loading={!areas[0]}>
            {areas.map((items) => {
              return (
                <div className="midCard" key={items.id}>
                  <Link to="/Blog">
                    <div className="top">
                      <Title level={4}>{items.title}</Title>
                      <Text type="secondary">{items.second_title}</Text>
                    </div>
                    <ButtonWrap>
                      <img src={items.img} alt="" />
                    </ButtonWrap>
                  </Link>
                </div>
              );
            })}
          </Skeleton>
        </div>
      </animated.div>
    </PageWrap>
  );
});
