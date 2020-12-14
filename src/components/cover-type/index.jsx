import React, { memo, useEffect, useState } from "react";
import { PageHeader, Button, Descriptions } from "antd";
import { PageWrap } from "./style";
export default memo(function CoverType(props) {
  //   type: "Dart",
  //   Introduction: "Dart是谷歌开发的计算机编程语言",
  //   apiUrl: "",
  //   website: "",
  //   company: "Google",
  //   protocol: "BSD",
  //   version: "2.2.0",
  //   download: "下载",
  //   system: "跨平台",
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
      <div className="site-page-header-ghost-wrapper">
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
            <Descriptions.Item label="公司">{company}</Descriptions.Item>
            <Descriptions.Item label="开源协议">{protocol}</Descriptions.Item>
            <Descriptions.Item label="最新版本">{version}</Descriptions.Item>
            <Descriptions.Item label="安装使用">{download}</Descriptions.Item>
            <Descriptions.Item label="操作系统">{system}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
    </PageWrap>
  );
});
