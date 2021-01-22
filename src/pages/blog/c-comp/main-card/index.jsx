import React, { memo } from "react";
import { PageWrap } from "./style";
import { Card, Divider } from "antd";
import CoverCard from "@c/cover-card";
import CoverType from "@c/cover-type";
import { BlogData } from "@/common/virtual-data";
import { TypeDetails } from "@/common/virtual-data";
import { useFromRight } from "@/hooks/animation";
import { animated} from 'react-spring'

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
  const {type : selectType,history} = props.data;
  return (
    <PageWrap className="page">
      <animated.div className="page" style={useFromRight()}>
        <Card className="contentCard">
          {selectType}
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
            <animated.div style={useFromRight()}>
              {BlogData.map((item, index) => {
                return (
                  <CoverCard
                    key={item.title + index}
                    title={item.title}
                    dateTime={item.dateTime}
                    content={item.content}
                    imgUrl={item.imgUrl}
                    onClick={e=>{
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
