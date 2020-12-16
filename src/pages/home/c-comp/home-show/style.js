import styled from "styled-components"

export const PageWrap = styled.div`
  background-color:#3d6fd3;
  background:url(${require("@/assets/img/bluebg.png").default})  no-repeat  10% 19%;
  padding:70px 0px;
  .con{
    padding:30px 0px;
    text-align:center;
    position:relative;
    .btnLeft{
      position: absolute;
      left:3px;
      top:60%;
      z-index:1000;
    }
    .btnRight{
      position: absolute;
      right:3px;
      top:60%;
      z-index:1000;
    }
    h3{
      color: white;
      margin-bottom:18px;
    }

    .carouselItem{
      display:flex !important;
      justify-content:space-evenly;
      width:100%;
    }
    //隐藏轮播图的指示标
    .slick-dots-bottom {
    display: none !important;
    }
    .avatarItem{
      background-color:white;
      cursor: pointer;
      position:relative;
    }
    .avatarItemSelect:before{
      position: absolute;
      bottom: 0;
      left: 0px;
      right: 0px;
      background:url(${require("@/assets/img/avatarbg.png").default})  no-repeat ;
      content:"";height: 100%;
      background-size: auto 100%;
    }
  }
`