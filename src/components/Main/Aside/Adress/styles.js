import styled from "styled-components";

const AdressStyle = styled.div`
  width: 90%;
  height: fit-content;
  align-self: center;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--Underline);
  box-sizing: border-box;

  ul{
    list-style: none;
    li{
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      h6{
        font-size: var(--fontSize-Small);
        color: var(--fontColor-1);
        line-height: 1.7;
      }
      span{
        font-size: var(--fontSize-Small);
        color: var(--fontColor-2);
        line-height: 1.7;
      }
    }
  }

`;

export default AdressStyle;
