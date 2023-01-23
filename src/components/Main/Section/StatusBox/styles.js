import styled from "styled-components";
import anonimous from '../../../../assets/anonimous.png'

const StatusBoxStyle = styled.div`
  height: 300px;
  width: 100%;
  background-color: var(--Background-Cards);
  background-image: url(${anonimous});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat, repeat;
  display: flex;
  flex-direction: column-reverse;
  padding: 35px;
  
  h2{
    display: flex;
    text-align: end;
    position: absolute;
    top: 300px;
    right: 140px;
    font-size: 4rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    li {
      height: 30px;
      width: 30px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export default StatusBoxStyle;
