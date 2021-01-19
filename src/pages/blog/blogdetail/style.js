import styled from "styled-components"

export const BlogdetailWrap = styled.div`
  background-color:#f9f9f9;
  margin-top:76px;
  .page{
    padding:20px;
  }
  .header{
    background-color:white;
    border: 1px solid rgb(235, 237, 240);
  }
  .contents{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
  }
  .left{
    flex-grow:1;
    padding:10px 0px;
    .reactMarkdown{
      margin:0px 20px;
    }
  }
  .left-pc{
    max-width:70%;
  }
  .right{
    width:30%;
  }
`