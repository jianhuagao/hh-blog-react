import React, { memo, useEffect } from "react";
import { Typography, Image, Button, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getTopBannersAction } from "../../store/actionCreators";
import { HeartOutlined } from "@ant-design/icons";
import { PageWrap } from "./style";
import { animated } from "react-spring";
import { useFromRight } from "@/hooks/animation";

const { Title, Paragraph } = Typography;

export default memo(function Banner() {
  const { banners } = useSelector(
    (state) => ({
      banners: state.getIn(["home", "banners"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  return (
    <PageWrap>
      <animated.div style={useFromRight()}>
        <div className="page">
          <Skeleton active loading={!banners[0]}>
            <div className="left">
              <Title>{banners[0] && banners[0].title}</Title>
              <Paragraph
                style={{
                  lineHeight: "2em",
                  fontSize: 19,
                  fontWeight: 600,
                  color: "#5d5d5d",
                }}
              >
                {banners[0] && banners[0].content}✨
              </Paragraph>
              <Button shape="round" icon={<HeartOutlined />}>
                <Link to="/Find"> 手气不错</Link>
              </Button>
            </div>
            <div className="right">
              <Image preview={false} width={400} src={banners[0] && banners[0].img} />
            </div>
          </Skeleton>
        </div>
      </animated.div>
    </PageWrap>
  );
});
