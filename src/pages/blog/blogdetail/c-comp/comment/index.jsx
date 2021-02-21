import React, { memo } from "react";
import { Comment as Comm, Avatar } from "antd";
import { CommentWrap } from "./style";

export default memo(function Comment({children}) {
  return (
    <CommentWrap>
      <Comm
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a href="#/">Jianhua Gao</a>}
        avatar={
          <Avatar
            src="https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg"
            alt="Han Solo"
          />
        }
        content={
          <p>
            You can now view hh-blog in the browser. Note that the development build is not optimized.
To create a production build, use yarn build.(yarn or npm).
          </p>
        }
      >
        {children}
      </Comm>
    </CommentWrap>
  );
});
