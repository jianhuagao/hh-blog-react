import React, { memo } from "react";
import { Skeleton } from "antd";

export default memo(function SkeletonComp() {
  return (
    <div className="page" style={{ marginTop: "90px",marginBottom:"20px"}}>
      <Skeleton active avatar paragraph={{ rows: 8 }} />
    </div>
  );
});
