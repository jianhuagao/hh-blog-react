import styled from "styled-components"

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
      color: #9fbfff !important;
      border-bottom: 2px solid #9fbfff !important;
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