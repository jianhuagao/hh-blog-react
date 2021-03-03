import styled from "styled-components"

export const BlogdetailWrap = styled.div`
  box-shadow: inset 0 8px 16px 0 rgba(28,31,33,.1); 
  background-color:#f9f9f9;
  margin-top:76px;
  .page{
    padding:20px;
    .contents{
      .ant-card{
        margin:5px;
        border-radius:12px;
      }
    }
  }
  .header{
    background-color:white;
    border-radius:12px;
    margin:5px 5px;
  }
  .comment{
    background-color:white;
  }
  .fix{
    position:fixed;
    top:20%;
    right:0px;
    background-color:white;
    border-radius: 25px;
    box-shadow: -6px 8px 16px 0 rgba(28,31,33,.1);
  }
`