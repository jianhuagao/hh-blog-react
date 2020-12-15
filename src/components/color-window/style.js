import styled from "styled-components"

export const PageWrap = styled.div`
  background-color:white;
  margin:${props => props.margin || "5px"};
  border-radius:7px;
  -webkit-box-shadow: 0px 11px 20px rgba(100,100,136,0.15);
  box-shadow: 0px 11px 20px rgba(100,100,136,0.15);
  .color-window-top{
    border-radius:7px 7px 0px 0px;
    background-color:#ededed;
    height:30px;
    position:relative;
  }
  .color-window-top::before{
    position: absolute;
    top: 1em;
    left: 1em;
    display: block;
    width: .5em;
    height: .5em;
    background-color: #f44;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
    content: "";
  }

  .color-window-content{
    padding:${props => props.padding || "5px"};
  }
`