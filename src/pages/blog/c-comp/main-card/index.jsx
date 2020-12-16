import React, { memo } from "react";
import { PageWrap } from "./style";
import { Card } from "antd";
import QueueAnim from "rc-queue-anim";
import CoverCard from "@c/cover-card";
import CoverType from "@c/cover-type";
import { BlogData } from "@/common/virtual-data";
import { TypeDetails } from "@/common/virtual-data";
//   type: "Dart",
//   Introduction: "Dart是谷歌开发的计算机编程语言",
//   apiUrl: "",
//   website: "",
//   company: "Google",
//   protocol: "BSD",
//   version: "2.2.0",
//   download: "下载",
//   system: "跨平台",
const {
  type,
  Introduction,
  company,
  protocol,
  version,
  download,
  system,
} = TypeDetails[0];
export default memo(function Blog() {
  return (
    <PageWrap className="page">
      <QueueAnim
        className="page"
        duration="1000"
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
      >
        <Card key="mainCard" className="contentCard">
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
            <br />
            {BlogData.map((item, index) => {
              return (
                <CoverCard
                  key={item.title + index}
                  title={item.title}
                  dateTime={item.dateTime}
                  content={item.content}
                  imgUrl={item.imgUrl}
                />
              );
            })}
          </div>
        </Card>
      </QueueAnim>
    </PageWrap>
  );
});
