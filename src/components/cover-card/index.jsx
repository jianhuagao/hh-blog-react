import React, { memo } from "react";
import { PageWrap } from "./style";

export default memo(function CoverCard(props) {
  return (
    <PageWrap>
      <div className="coverCardTitle">{props.title}</div>
      <div className="coverCardContent">
        <div className="coverCardImg">
          <img alt="example" src={props.imgUrl} />
        </div>
        <div className="coverCardText">
          <div className="text">{props.content}</div>
          <div className="bottom">{props.dateTime}</div>
        </div>
      </div>
    </PageWrap>
  );
});
