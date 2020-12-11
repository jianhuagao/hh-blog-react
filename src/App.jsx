import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import TopMenu from "./components/top-menu";
import { router } from "./router";
import SkeletonComp from "@c/skeleton";

export default memo(function App() {
  return (
    <HashRouter>
      <div
        className="home-page-wrapper"
        style={{ position: "fixed", zIndex: "100" }}
      >
        <div className="page">
          <TopMenu />
        </div>
      </div>
      <div className="home-page-wrapper">
        <Suspense fallback={<SkeletonComp />}>{renderRoutes(router)}</Suspense>
      </div>
    </HashRouter>
  );
});
