import React, { memo, useState, useEffect } from "react";
import { Card, Drawer, Button,Skeleton } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getBlogAction } from "../store/actionCreators";
import BlogBar from "./c-comp/blogbar";
import Comment from "./c-comp/comment";
import Header from "./c-comp/blog-header";
import Replay from "./c-comp/replay";
import { BlogdetailWrap } from "./style";
import { animated } from "react-spring";
import ReactMarkdown from "react-markdown";
import { useFromRight } from "@/hooks/animation";

export default memo(function Blogdetail() {
  const [drawerVis, setDrawerVis] = useState(false);
  const [rightShow, setRightShow] = useState(true);
  const { id } = useParams();

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

  useEffect(() => {
    window.innerWidth < 620 && setRightShow(false);
  }, []);
  return (
    <BlogdetailWrap>
      <animated.div className="page" style={useFromRight()}>
        <div className="header">
          <Header blog={blog} />
        </div>
        <div className="contents">
          <div className={classnames({ left: true, "left-pc": rightShow })}>
            <Card>
              <div className="reactMarkdown">
                <Skeleton avatar active paragraph={{ rows: 4 }} loading={blogContentLoading}>
                  <ReactMarkdown>{blog.content}</ReactMarkdown>
                </Skeleton>
              </div>
            </Card>
            <Card>
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
          {rightShow && (
            <div className="right">
              <Card>
                <BlogBar />
              </Card>
            </div>
          )}
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
      {rightShow || (
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
