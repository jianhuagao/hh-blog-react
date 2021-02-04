import React, { memo } from "react";
import { PageWrap } from "./style";
import BlogType from "./c-comp/blog-type";
import MainCard from "./c-comp/main-card";

export default memo(function Blog(props) {
  return (
    <PageWrap>
        <BlogType />
        <MainCard data={{  history: props.history }} />
    </PageWrap>
  );
});
