import React, { memo, useEffect } from "react";
import { PageWrap } from "./style";
import { Card, Divider,Skeleton } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getBlogListAction } from "../../store/actionCreators";
import CoverCard from "@c/cover-card";
import CoverType from "@c/cover-type";
import { useFromRight } from "@/hooks/animation";
import { animated } from "react-spring";

export default memo(function Blog(props) {
  const { type: selectType, history } = props.data;
  const { blogTypes } = useSelector(
    (state) => ({
      blogTypes: state.getIn(["blog", "blogTypes"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogListAction(selectType));
  }, [dispatch, selectType]);

  const { blogList } = useSelector(
    (state) => ({
      blogList: state.getIn(["blog", "blogList"]),
    }),
    shallowEqual
  );
  const selectTypeDetail =
    blogTypes.rows &&
    blogTypes.rows.filter((item) => {
      return item.id === selectType;
    });
  return (
    <PageWrap className="page">
      <animated.div className="page" style={useFromRight()}>
        <Card className="contentCard">
          <div className="contentCardChi">
            <CoverType
              type={selectTypeDetail && selectTypeDetail[0].name}
              Introduction={
                selectTypeDetail && selectTypeDetail[0].introduction
              }
              company={selectTypeDetail && selectTypeDetail[0].inventor}
              protocol={selectTypeDetail && selectTypeDetail[0].protocol}
              version={selectTypeDetail && selectTypeDetail[0].version}
              download={selectTypeDetail && selectTypeDetail[0].download}
              system={selectTypeDetail && selectTypeDetail[0].system}
            />
            <Divider />
            <animated.div style={useFromRight()}>
              <Skeleton active loading={!blogList.rows}>
                <CoverCard
                  data={blogList.rows}
                  history={history}
                />
              </Skeleton>
            </animated.div>
          </div>
        </Card>
      </animated.div>
    </PageWrap>
  );
});
