import React, { memo, useEffect, useState } from "react";
import { PageHeader, Button, Descriptions } from "antd";
import { PageWrap } from "./style";
export default memo(function CoverType(props) {
  const {
    type,
    Introduction,
    company,
    protocol,
    version,
    download,
    system,
  } = props;
  const [columnNum, setColumnNum] = useState(3);
  useEffect(() => {
    window.innerWidth < 620 && setColumnNum(2);
  }, []);
  return (
    <PageWrap>
      <PageHeader
        title={type}
        subTitle={Introduction}
        extra={[
          <Button key="2">api</Button>,
          <Button key="1" type="primary">
            官网
          </Button>,
        ]}
      >
        <Descriptions size="small" column={columnNum}>
          <Descriptions.Item label="作者">{company}</Descriptions.Item>
          <Descriptions.Item label="开源协议">{protocol}</Descriptions.Item>
          <Descriptions.Item label="最新版本">{version}</Descriptions.Item>
          <Descriptions.Item label="安装使用">{download}</Descriptions.Item>
          <Descriptions.Item label="操作系统">{system}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </PageWrap>
  );
});
