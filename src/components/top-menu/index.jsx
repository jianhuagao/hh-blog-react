import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Avatar, Divider, Button } from "antd";
import QueueAnim from "rc-queue-anim";
import {
  HomeOutlined,
  GiftOutlined,
  BookOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PageWrap } from "./style";

export default memo(function TopMenu() {
  //hooks
  //当前页面路径
  const [selectKeys, setSelectKeys] = useState("/Home");
  //router hooks
  let location = useLocation();
  useEffect(() => {
    setSelectKeys(location.pathname);
  }, [location]);
  return (
    <PageWrap page={location.pathname}>
      <QueueAnim className="content">
        <div key="left" className="c_left">
          <Avatar
            size={44}
            icon={<UserOutlined />}
            src="https://himg.bdimg.com/sys/portraitn/item/b566d1f3d0a1f6cf159b"
          />
          <Divider type="vertical" style={{ fontSize: 30 }} />
          <span>Happy hacking Blog</span>
        </div>
        <div key="right" className="c_right">
          <div>
            <Menu mode="horizontal" defaultSelectedKeys={selectKeys}>
              <Menu.Item key="/Home" icon={<HomeOutlined />}>
                <Link to="/Home">Home</Link>
              </Menu.Item>
              <Menu.Item key="/Blog" icon={<BookOutlined />}>
                <Link to="/Blog">Blog</Link>
              </Menu.Item>
              <Menu.Item key="/Find" icon={<GiftOutlined />}>
                <Link to="/Find">Find</Link>
              </Menu.Item>
              <Menu.Item key="/AboutMe" icon={<SketchOutlined />}>
                <Link to="/AboutMe">AboutMe</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="top-btn">
            <Button
              shape="circle"
              icon={<GithubOutlined />}
              href="https://github.com/jianhuagao"
            />
          </div>
        </div>
      </QueueAnim>
    </PageWrap>
  );
});
