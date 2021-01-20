import styled from "styled-components"

export const PageWrap = styled.div`
  position:relative;
  .main-top{
    /* position: fixed; */
    z-index: 100;
    /* background-color: rgb(255 255 255 / 69%);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);  */
  }
  .main-content{
    position: absolute;
    top: 0px;
  }
  .topMenuShow{
    background-color:black;
    color:red;
  }
`