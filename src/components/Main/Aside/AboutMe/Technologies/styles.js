import styled from "styled-components";

const TechStyle = styled.div`
  width: 90%;
  height: fit-content;
  align-self: center;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--Underline);
  box-sizing: border-box;

  ul{
    list-style: none;
    h4{
      text-align: center;
      color: var(--fontColor-1);
      opacity: 0.9;
      margin-bottom: 5px;
    }
    li{
      margin-bottom: 5px;
      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        h6{
          font-size: var(--fontSize-Small);
          color: var(--fontColor-1);
          line-height: 1.7;
        }
        span{
          font-size: var(--fontSize-Small);
          color: var(--fontColor-1);
          opacity: 0.8;
          line-height: 1.7;
          text-align: end;
        }
      }
      #JavaScript { 
        min-height: 8px;
        padding: 2px 2px;
        background-color: var(--BorderColor-1);
        display: flex;
         --progress: ${({JavaScript}) => JavaScript};     
         &::before{
             content: "";
             width: calc(var(--progress) * 1%);
             background-color: var(--fontColor-3);
         }
      }
      #TypeScript { 
        min-height: 8px;
        padding: 2px 2px;
        background-color: var(--BorderColor-1);
        display: flex;
         --progress: ${({TypeSCript}) => TypeSCript};     
         &::before{
             content: "";
             width: calc(var(--progress) * 1%);
             background-color: var(--fontColor-3);
         }
      }
      #Python { 
        min-height: 8px;
        padding: 2px 2px;
        background-color: var(--BorderColor-1);
        display: flex;
         --progress: ${({Python}) => Python};     
         &::before{
             content: "";
             width: calc(var(--progress) * 1%);
             background-color: var(--fontColor-3);
         }
      }
    }
  }

`;

export default TechStyle;
 /* display: flex; --progress: ${({Language, Experience}) => {
          for(let value of Language){
            let match = Experience.find(e => e.tech === value)
              console.log(match.level)
              return match.level
          }
        }}       */