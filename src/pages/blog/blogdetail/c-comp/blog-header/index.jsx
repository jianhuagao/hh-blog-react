import React, { memo } from "react";
import { PageHeader, Button, Tag,Tooltip } from "antd";
import { HeartTwoTone, LikeTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import zhcn from "dayjs/locale/zh-cn";
import { BlogHeaderWrap } from "./style"; 

const dayjsfor = dayjs.extend(relativeTime);
export default memo(function BlogHeader({ blog }) {
  return (
    <BlogHeaderWrap>
      <PageHeader
        title={blog && blog.title}
        subTitle={
          blog && (
            <Tooltip title={dayjs(blog.udate).format("YYYY-MM-DD HH:mm:ss")}>
              <span>{dayjsfor(blog.udate).locale(zhcn).toNow()}</span>
            </Tooltip>
          )
        }
        tags={<Tag color="blue">原创</Tag>}
        avatar={{
          src:
            "https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg",
        }}
      >
        <Button type="text" size="small" icon={<LikeTwoTone />}>
          点赞({blog && blog.good})
        </Button>
        <Button type="text" size="small" icon={<HeartTwoTone />}>
          在看({blog && blog.read})
        </Button>
      </PageHeader>
    </BlogHeaderWrap>
  );
});
