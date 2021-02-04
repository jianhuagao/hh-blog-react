import React, { memo, useEffect } from "react";
import { PageWrap } from "./style";
import { Card, Divider, Skeleton } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getBlogListAction } from "../../store/actionCreators";
import CoverCard from "@c/cover-card";
import CoverType from "@c/cover-type";
import { useFromRight } from "@/hooks/animation";
import { animated } from "react-spring";

export default memo(function Blog(props) {
  const { history } = props.data;
  //从reducer获取所有类型
  const { blogTypes } = useSelector(
    (state) => ({
      blogTypes: state.getIn(["blog", "blogTypes"]),
    }),
    shallowEqual
  );
  //从reducer获取当前选中的类型
  const { selectBlogType } = useSelector(
    (state) => ({
      selectBlogType: state.getIn(["blog", "selectBlogType"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  //当当前选中的类型不是空时,通过类型请求blog列表
  useEffect(() => {
    selectBlogType && dispatch(getBlogListAction(selectBlogType));
  }, [dispatch, selectBlogType]);

  //从reducer获取刚才请求的blog列表
  const { blogList } = useSelector(
    (state) => ({
      blogList: state.getIn(["blog", "blogList"]),
    }),
    shallowEqual
  );

  //这个列表是给类型描述用的,和blog列表无关,筛选当前选中的类型的详情
  //当类型和当前选中都不为空时才能筛选,否则报错
  const selectTypeDetail =
    blogTypes.rows &&
    selectBlogType &&
    blogTypes.rows.filter((item) => {
      return item.id === selectBlogType;
    });

  return (
    <PageWrap className="page">
      <animated.div className="page" style={useFromRight()}>
        <Card className="contentCard">
          <div className="contentCardChi">
            <CoverType
              type={selectTypeDetail &&selectTypeDetail[0]&& selectTypeDetail[0].name}
              Introduction={
                selectTypeDetail && selectTypeDetail[0]&& selectTypeDetail[0].introduction
              }
              company={selectTypeDetail &&selectTypeDetail[0]&& selectTypeDetail[0].inventor}
              protocol={selectTypeDetail &&selectTypeDetail[0]&& selectTypeDetail[0].protocol}
              version={selectTypeDetail &&selectTypeDetail[0]&&  selectTypeDetail[0].version}
              download={selectTypeDetail &&selectTypeDetail[0]&&  selectTypeDetail[0].download}
              system={selectTypeDetail &&selectTypeDetail[0]&&  selectTypeDetail[0].system}
            />
            <Divider />
            <animated.div style={useFromRight()}>
              <Skeleton active loading={!blogList.rows}>
                <CoverCard data={blogList.rows} history={history} />
              </Skeleton>
            </animated.div>
          </div>
        </Card>
      </animated.div>
    </PageWrap>
  );
});
