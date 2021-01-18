import React, { memo } from "react";
import { PageWrap } from "./style";
import HomeBanner from "./c-comp/home-banner";
import HomeSecond from "./c-comp/home-second";

export default memo(function HomePage() {
  return (
    <PageWrap>
      <div className="home-page-wrapper cpm1">
        <HomeBanner />
      </div>
      <div className="home-page-wrapper cpm2">
        <HomeSecond />
      </div>
      <div className="home-page-wrapper cpm">
      </div>
    </PageWrap>
  );
});
