import React, { memo } from "react";
import { PageWrap } from "./style";
import { Card, Divider } from "antd";
import CoverCard from "@c/cover-card";
import CoverType from "@c/cover-type";
import { BlogData } from "@/common/virtual-data";
import { TypeDetails } from "@/common/virtual-data";
import {useSpring as spring, animated} from 'react-spring'

const {
  type,
  Introduction,
  company,
  protocol,
  version,
  download,
  system,
} = TypeDetails[0];
export default memo(function Blog(props) {
  const amd = spring({opacity: 1,transform:"translateX(0px)", from: {opacity: 0,transform:"translateX(40px)"}})
  return (
    <PageWrap className="page">
      <animated.div className="page" style={amd}>
        <Card className="contentCard">
          <div className="contentCardChi">
            <CoverType
              key="1"
              type={type}
              Introduction={Introduction}
              company={company}
              protocol={protocol}
              version={version}
              download={download}
              system={system}
            />
            <Divider />
            <animated.div style={amd}>
              {BlogData.map((item, index) => {
                return (
                  <CoverCard
                    key={item.title + index}
                    title={item.title}
                    dateTime={item.dateTime}
                    content={item.content}
                    imgUrl={item.imgUrl}
                    onClick={e=>{
                      props.history.push(`/Blog/${item.id}`);
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
