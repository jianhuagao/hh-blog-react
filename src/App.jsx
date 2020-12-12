import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { router } from "./router";
import TopMenu from "./components/top-menu";
//动画
import { Parallax } from "rc-scroll-anim";
//骨架屏
import SkeletonComp from "@c/skeleton";
//css
import { PageWrap } from "./app-style";

export default memo(function App() {
  return (
    <HashRouter>
      <PageWrap>
        <Parallax
          // animation={{
          //   backgroundColor: "red",
          //   playScale: [0.9, 1],
          // }}
          className="top home-page-wrapper"
        >
          <TopMenu />
        </Parallax>
        <div className="home-page-wrapper">
          <Suspense fallback={<SkeletonComp />}>
            {renderRoutes(router)}
          </Suspense>
        </div>
      </PageWrap>
    </HashRouter>
  );
});
