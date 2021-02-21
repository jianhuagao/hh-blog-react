import styled from "styled-components"

export const PageWrap = styled.div`
    .page{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-evenly;
      position: relative;

      .left{
      max-width: 500px;
      margin-bottom:20px;
      }
      .right{
        display: flex;
        align-items:center;
        img{
          box-shadow: rgba(0,0,0,0.12) 1px 0px 40px 0px;
          border-radius: 6px;
        }
      }
    }
  
`