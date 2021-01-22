import React, { memo, useState } from "react";
import { PageWrap } from "./style";
import BlogType from "./c-comp/blog-type";
import MainCard from "./c-comp/main-card";
import qs from "querystring";

export default memo(function Blog(props) {
  const typeData = Number(
    qs.parse(props.location.search.replace("?", "")).type
  );
  const [type, setType] = useState(typeData || 1);
  return (
    <PageWrap>
        <BlogType data={{ type, setType }} />
        <MainCard data={{ type, history: props.history }} />
    </PageWrap>
  );
});
