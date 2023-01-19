import styled from "styled-components";

const MediaStyle = styled.div`
  height: 80px;
  width: 290px;
  background-color: var(--Background-Cards);
  display: flex;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  a{
    svg{
      height: 18px;
      width: 18px;
      color: var(--fontColor-2);
      &:hover{
        color: var(--fontColor-1);
      }
    }
  }
`;

export default MediaStyle;
