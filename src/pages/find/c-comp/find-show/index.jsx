import React, { memo } from "react";
import { Card } from "antd";
import { FindShowWrap } from "./style";

export default memo(function FindShow(props) {
  return (
    <FindShowWrap>
      <Card hoverable>✨发现Github</Card><br/>
      <Card hoverable>✨发现npm</Card><br/>
      <Card hoverable>✨网址</Card><br/>
      <Card hoverable>✨vscode插件</Card><br/>
      <Card hoverable>✨开发者工具</Card><br/>
      <Card hoverable>✨奇怪的知识</Card><br/>
      <Card hoverable>✨发现Github</Card><br/>
      <Card hoverable>✨发现npm</Card><br/>
      <Card hoverable>✨网址</Card><br/>
      <Card hoverable>✨vscode插件</Card><br/>
      <Card hoverable>✨开发者工具</Card><br/>
      <Card hoverable>✨奇怪的知识</Card><br/>
    </FindShowWrap>
  );
});
