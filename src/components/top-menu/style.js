import styled from "styled-components"

//TODO:mix-blend-mode: difference属性可以反转文字颜色，这样就不用传参数来显示文字颜色了，待完成...
export const PageWrap = styled.div`
  color: ${props => props.page === "/Blog" ? "white" : "black"};
  width: 100%;
  height: 64px;
  margin-top:20px;
  a{
    text-decoration:none;
  }
  .content{
    display:flex;
    justify-content:space-between;
    font-size:14px;
    .c_right{
    display:flex;
    justify-content:space-between;
      .top-btn{
        display: flex;
        align-items:center;
      }
  }
  }

  
  //重写menu
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected{
      color: ${props => props.page === "/Blog" && "#9fbfff !important"};
      border-bottom:${props => props.page === "/Blog" && "2px solid #9fbfff !important"}; 
      a{
        color:${props => props.page === "/Blog" || "#3d6fd3 !important"};
      }
    }
  .ant-menu{
    color: ${props => props.page === "/Blog" ? "white !important" : "black !important"};
    background: transparent;
    a{
      color: ${props => props.page === "/Blog" ? "white !important" : "black !important"};
    }
    
  }
  .ant-menu-horizontal {
    border-bottom: none;
    font-size:15px;
  } 
    .ant-menu-item-icon{
      font-size:18px;
  }

  
`