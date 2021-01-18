import styled from "styled-components"

export const PageWrap = styled.div`
  background: url(${require("@/assets/img/bigbg.svg").default}) no-repeat top;
  background-size: cover;
  padding:5px;
  .midCardContent{
    display:flex;
    flex-wrap:wrap;
    margin: 219px auto 50px;
    justify-content: center;

    .midCard{
      background: linear-gradient(180deg,#2469f4,#113bbf);
      box-shadow: 0 16px 40px #0f2da0;
      transition: transform .3s cubic-bezier(.645,.045,.355,1),box-shadow .3s cubic-bezier(.645,.045,.355,1);
      position: relative;
      height: 350px;
      width:250px;
      border-radius: 4px;
      margin:10px;
      cursor: pointer;
      .top{
        width: 100%;
        height:50%;
        text-align:center;
        h4{
          color:#e8e8e8;
          margin-bottom: 24px;
          font-size: 24px;
          line-height: 28px;
          text-shadow: 0 8px 12px #194ec1;
          margin:30px 0px 0px 0px;
        }
        span{
          color: hsla(0,0%,100%,.7);
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
    .midCard:hover {
      box-shadow: 0 20px 40px #0f2da0;
      transform: translateY(-50px);
      img{
        opacity:1;
      }
    }
  }
  
`
export const ButtonWrap = styled.div`
  width: 100%;
  height:42%;
  text-align:center;
  position:relative;
  img{
    transition:all 1.4s;
    opacity:0.5;
    position:absolute;
    bottom:0;
    display:block;
  }
`