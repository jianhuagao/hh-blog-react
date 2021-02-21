import styled from 'styled-components'

export const PageWrap = styled.div`
    .list{
      transition: all 0.3s ease;
      border-radius:8px;
      cursor: pointer;
      img{
        border-radius: 6px;
      }
    }
    .list:hover {
      transform: scale(1.02);
      background-color:white;
      box-shadow: 0px 11px 56px rgba(100,100,136,0.15);
    }
`