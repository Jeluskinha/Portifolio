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
  justify-content: space-between;
  align-items: flex-end;
  padding: 35px;
  
  h2{
    text-align: end;
    font-size: 3.2rem;
  }

  ul {
    height: fit-content;
    max-width: 190px;
    display: flex;
    flex-wrap: wrap-reverse;
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

  
  @media (max-width: 1025px) {
    h2{
      font-size: 2.6rem;
    }
    ul{
      /*  */
      li{
        height: 25px;
        width: 25px;
      }
    }
  }
        /* tamanhos de telas não oficiais */
        @media (max-width: 850px) {
          h2{
            font-size: 2.4rem;
          }
          ul{
            /*  */
            li{
              height: 20px;
              width: 20px;
            }
          }
        }
        @media (max-width: 800px) {
          padding: 25px;
        }
  @media (max-width: 768px) {
  }
  @media (max-width: 426px) {
    padding: 15px;
    h2{
      font-size: 2.1rem;
    }
  }
  @media (max-width: 376px) {
    gap: 1rem;
    h2{
      font-size: 1.7rem;
    }
  }
        /* tamanhos de telas não oficiais */
        @media (max-width: 363px) {
          gap: 1rem;
          h2{
            width: 40%;
            font-size: 1.5rem;
          }
          ul{
            width: 55%;
          }
        }
        @media (max-width: 340px) {
          h2{
            font-size: 1.3rem;
          }  
        }
`;

export default StatusBoxStyle;
