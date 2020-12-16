import styled from 'styled-components'

export const PageWrap = styled.div`
  /* :hover{
    box-shadow: 0px 11px 56px rgba(100,100,136,0.15);
    transition: box-shadow 0.8s ease;
  } */
  cursor: pointer;
  font-family: Avenir, -apple-system, BlinkMacSystemFont, segoe ui, pingfang sc, hiragino sans gb, microsoft yahei, helvetica neue, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, sans-serif;
  width:100%;
  margin-bottom:22px;
  border: 1px solid #f0f0f0;
  
  .coverCardTitle{
    height:55px;
    line-height:55px;
    padding:0px 20px;
    font-size:20px;
    font-weight:bold;
  }
  .coverCardContent{
    display:flex;
    flex-wrap:wrap;
  }
  .coverCardImg{
    background-color:#e0e0e0;
    height:200px;
    width:300px;
    overflow:hidden;
    img{
      height:100%;
      width:100%;
      object-fit: cover;
    }
    img:hover {
      transform: scale(1.2);
      transition: transform 0.4s ease;
    }
  }
  .coverCardText{
    position: relative;
    padding:20px;
    border-top: 1px solid #f0f0f0;
    flex-grow:1;
    min-height:60px;
    width:1px;
    max-height:200px;
    .text{
      overflow: hidden;
      height:135px;
      line-height:27px;
    }
    .bottom{
      position:absolute;
      bottom:20px;
      color: rgba(0,0,0,.45);
    }
  }
  @media screen and (max-width: 620px) {
  .coverCardImg{
    width:100%;
  }
  .coverCardText{
    height:120px;
    .text{
      line-height:20px;
      height:40px;
    }
  }
} 

`