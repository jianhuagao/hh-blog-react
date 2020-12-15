import React, { memo } from "react";
import { PageWrap } from "./style";

export default memo(function ColorWindows(props) {
  const detail = `
  这是一个自定义组件,它的名字叫做ColorWindow,
  属性和用法与div一致当你看到这段对话时说明你未传子元素。--
  This is a custom component, its name is ColorWindow,
  and its properties and usage are the same as div. When you see this dialog, 
  it means you haven't passed the child element.`;
  return (
    <PageWrap padding={props.padding} margin={props.margin}>
      <div className="color-window-top"></div>
      <div className="color-window-content" {...props}>
        {props.children || detail}
      </div>
    </PageWrap>
  );
});
