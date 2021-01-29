import React, { memo } from "react";
import { PageWrap } from "./style";
import { Card, Divider } from "antd";
import { useSelector, shallowEqual } from "react-redux";
import CoverCard from "@c/Terminate batch job Terminate batch job -card";
import CoverType from "@c/cover-type";
import { BlogData } from "@/common/virtual-data";
import { useFromRight } from "@/hooks/animation";
import { animated } from "react-spring";

export default memo(function Blog(props) {
  const { type: selectType, history } = props.data;
  const { blogTypes } = useSelector(
    (state) => ({
      blogTypes: state.getIn(["blog", "blogTypes"]),
    }),
    shallowEqual
  );
  const selectTypeDetail = blogTypes.rows&&blogTypes.rows.filter((item) => {
    return item.id === selectType;
  });
  return (
    <PageWrap className="page">
      <animated.div className="page" style={useFromRight()}>
        <Card className="contentCard">
          <div className="contentCardChi">
            <CoverType
              type={selectTypeDetail&&selectTypeDetail[0].name}
              Introduction={selectTypeDetail&&selectTypeDetail[0].introduction}
              company={selectTypeDetail&&selectTypeDetail[0].inventor}
              protocol={selectTypeDetail&&selectTypeDetail[0].protocol}
              version={selectTypeDetail&&selectTypeDetail[0].version}
              download={selectTypeDetail&&selectTypeDetail[0].download}
              system={selectTypeDetail&&selectTypeDetail[0].system}
            />
            <Divider />
            <animated.div style={useFromRight()}>
              {BlogData.map((item, index) => {
                return (
                  <CoverCard
                    key={item.title + index}
                    title={item.title}
                    dateTime={item.dateTime}
                    content={item.content}
                    imgUrl={item.imgUrl}
                    onClick={(e) => {
                      history.push(`/Blog/${item.id}`);
                    }}
                  />
                );
              })}
            </animated.div>
          </div>
        </Card>
      </animated.div>
    </PageWrap>
  );
});
