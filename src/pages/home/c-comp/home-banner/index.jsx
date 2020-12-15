import React, { memo } from "react";
import { Typography, Image } from "antd";
import QueueAnim from "rc-queue-anim";
import { PageWrap } from "./style";

const { Title, Paragraph } = Typography;
const blockContent = `圣诞节（Christmas）亦称耶稣圣诞节、主降生节，天主教亦称耶稣圣诞瞻礼。译名为“基督弥撒”，它源自古罗马人迎接新年的农神节，与基督教本无关系。在基督教盛行罗马帝国后，教廷随波逐流地将这种民俗节日纳入基督教体系，同时以庆祝耶稣的降生。但在圣诞节这天不是耶稣的生辰，因为《圣经》未有记载耶稣具体生于哪天，同样没提到过有此种节日，是基督教吸收了古罗马神话的结果。`;
export default memo(function index() {
  return (
    <PageWrap>
      <QueueAnim
        className="page"
        duration="500"
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
      >
        <div key="left" className="left">
          <Title>圣诞节（Christmas）</Title>
          <Paragraph
            style={{
              lineHeight: "2em",
              fontSize: 19,
              fontWeight: 600,
              color: "#5d5d5d",
            }}
          >
            {blockContent}
          </Paragraph>
        </div>
        <div></div>
        <div key="fight" className="right">
          <Image
            width={400}
            src={require("@/assets/img/web_developer.svg").default}
          />
        </div>
      </QueueAnim>
    </PageWrap>
  );
});
