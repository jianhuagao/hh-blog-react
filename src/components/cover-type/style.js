import Styled from "styled-components"

export const PageWrap = Styled.div`
  width: 100%;
  background-color:white;
  background:url(${require("@/assets/img/cardbg1.png").default})  no-repeat center right;
  background-size:auto 100%; 
  box-shadow: -3px -5px 38px 0px rgba(100,100,136,0.15);
  border-radius: 6px;
  .ant-page-header-heading-left{
    flex-wrap:wrap;
  }
`