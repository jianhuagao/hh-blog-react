import React, { memo } from "react";
import { PageWrap } from "./style";
import HomeBanner from "./c-comp/home-banner";
import HomeShow from "./c-comp/home-show";

export default memo(function HomePage() {
  return (
    <PageWrap>
      <div className="home-page-wrapper cpm">
        <HomeBanner />
      </div>
      <div className="home-page-wrapper cpm">
        <HomeShow />
      </div>
      <div className="home-page-wrapper cpm">
        <div className="page"></div>
      </div>
    </PageWrap>
  );
});
