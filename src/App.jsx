import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { router } from "./router";
import TopMenu from "./components/top-menu";
//骨架屏
import SkeletonComp from "@c/skeleton";
//TOP按钮
import { BackTop } from "antd";
//css
import { PageWrap } from "./app-style";

export default memo(function App() {
  return (
    <HashRouter>
      <PageWrap>
        <BackTop />
        <div className="main-top home-page-wrapper">
          <TopMenu />
        </div>
        <div className="main-content home-page-wrapper">
          <Suspense fallback={<SkeletonComp />}>
            {renderRoutes(router)}
          </Suspense>
        </div>
      </PageWrap>
    </HashRouter>
  );
});
