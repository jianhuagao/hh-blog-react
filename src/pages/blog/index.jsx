import React, { memo } from "react";
import { PageWrap } from "./style";
import HomeShow from "../home/c-comp/home-show";
import MainCard from "./c-comp/main-card";

export default memo(function Blog(props) {
  return (
    <PageWrap>
      <HomeShow />
      <MainCard history={props.history}/>
    </PageWrap>
  );
});
