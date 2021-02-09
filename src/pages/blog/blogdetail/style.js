import styled from "styled-components"

export const BlogdetailWrap = styled.div`
  box-shadow: inset 0 8px 16px 0 rgba(28,31,33,.1); 
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
    /* display:flex;  */
    /* flex-wrap:wrap;*/
    /* justify-content:space-evenly; */
  }
  .left{
    .reactMarkdown{
      margin:0px 20px;
    }
  }
  /* .left-pc{
    width:70%;
  }
  .right{
    width:30%;
    flex-grow:1;
  }  */
  .comment{
    background-color:white;
  }
  .fix{
    position:fixed;
    top:20%;
    right:0px;
    background-color:white;
    box-shadow: -6px 8px 16px 0 rgba(28,31,33,.1);
  }
`