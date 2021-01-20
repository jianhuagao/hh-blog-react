import React, { memo } from "react";
import { Comment as Comm, Avatar } from "antd";
import { CommentWrap } from "./style";

export default memo(function Comment({children}) {
  return (
    <CommentWrap>
      <Comm
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a href="#/">Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comm>
    </CommentWrap>
  );
});
