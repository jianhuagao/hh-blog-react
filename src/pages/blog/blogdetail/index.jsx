import React, { memo, useState, useEffect } from "react";
import { Card, Drawer, Button, Skeleton, Row, Col } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getBlogAction } from "../store/actionCreators";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import BlogBar from "./c-comp/blogbar";
import Comment from "./c-comp/comment";
import Header from "./c-comp/blog-header";
import Replay from "./c-comp/replay";
import { BlogdetailWrap } from "./style";
import { animated } from "react-spring";
import { useFromRight } from "@/hooks/animation";

export default memo(function Blogdetail() {
  const [drawerVis, setDrawerVis] = useState(false);
  const { id } = useParams();
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogAction(id));
  }, [dispatch, id]);

  const { blogContentLoading } = useSelector(
    (state) => ({
      blogContentLoading: state.getIn(["blog", "blogContentLoading"]),
    }),
    shallowEqual
  );

  const { blog } = useSelector(
    (state) => ({
      blog: state.getIn(["blog", "blog"]),
    }),
    shallowEqual
  );
  return (
    <BlogdetailWrap>
      <animated.div className="page" style={useFromRight()}>
        <div className="header">
          <Header blog={blog} />
        </div>
        <div className="contents">
          <Row>
            <Col  xs={24} sm={24} md={17} lg={17} xl={17}>
              <div className="left">
                <Card bordered={false}>
                  <div className="reactMarkdown">
                    <Skeleton
                      avatar
                      active
                      paragraph={{ rows: 4 }}
                      loading={blogContentLoading}
                    >
                      <MdEditor
                        style={{ border: "none" }}
                        value={blog.content}
                        renderHTML={(text) => mdParser.render(text)}
                        readOnly={true}
                        config={{
                          view: { menu: false, md: false, html: true },
                        }}
                      />
                    </Skeleton>
                  </div>
                </Card>
                <Card bordered={false}>
                  <div className="ant-descriptions-title">评论</div>
                  <Comment>
                    <Comment>
                      <Comment />
                      <Comment />
                    </Comment>
                    <Comment />
                  </Comment>
                  <Replay />
                </Card>
              </div>
            </Col>
            <Col  xs={0} sm={0} md={7} lg={7} xl={7}>
              <div className="right">
                <Card bordered={false}>
                  <BlogBar />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </animated.div>
      <Drawer
        placement="right"
        closable={false}
        onClose={(e) => {
          setDrawerVis(false);
        }}
        visible={drawerVis}
      >
        <BlogBar />
      </Drawer>
      {window.innerWidth < 768 && (
        <div className="fix">
          <Button
            type="text"
            icon={<BarsOutlined />}
            onClick={(e) => {
              setDrawerVis(true);
            }}
          />
        </div>
      )}
    </BlogdetailWrap>
  );
});
