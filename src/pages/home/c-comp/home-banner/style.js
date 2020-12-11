import styled from "styled-components"

export const PageWrap = styled.div`
  padding-top:100px;
    .page{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-evenly;
      position: relative;

      .left{
      max-width: 500px;
      }
      .right{
        display: flex;
        align-items:center;
      }
    }
  
`