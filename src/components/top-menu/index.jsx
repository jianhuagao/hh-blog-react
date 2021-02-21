import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Avatar, Divider, Button, Tooltip } from "antd";
import {
  HomeOutlined,
  GiftOutlined,
  BookOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
  RocketOutlined
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
      <div className="content page">
        <div>
          <Avatar
            size={44}
            icon={<UserOutlined />}
            src="https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg"
          />
          <Divider type="vertical" style={{ fontSize: 30 }} />
          <span>imjianhua blog</span>
        </div>
        <div className="c_right">
          <div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={selectKeys}
              selectedKeys={selectKeys}
            >
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
                <Link to="/AboutMe">Hello</Link>
              </Menu.Item>
              <Menu.Item key="/Admin" icon={<RocketOutlined />}>
                <a href="http://admin.gaojianhua.top" target="blank">Admin</a>
              </Menu.Item>
            </Menu>
          </div>
          <div className="top-btn">
            <Tooltip
              title="源码在这里~"
              placement="bottomRight"
              color="#108ee9"
              defaultVisible
            >
              <Button
                shape="circle"
                icon={<GithubOutlined />}
                href="https://github.com/jianhuagao/hh-blog-react"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </PageWrap>
  );
});
