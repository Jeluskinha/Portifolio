import styled from "styled-components";

const ProjectStyle = styled.li`
  height: 240px;
  width: 315px;
  background-color: var(--Background-Cards);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 1rem;
  h3 {
    font-size: var(--fontSize-Middle);
    color: var(--fontColor-3);
    text-align: center;
    font-weight: var(--fontWeight-Strong);
  }
  figure {
    height: 140px;
    width: 80%;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
    }
  }
  nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    a {
      text-decoration: none;
      color: var(--fontColor-2);
      font-size: var(--fontSize-Middle);
      font-weight: var(--fontWeight-Strong);
      align-self: center;
      &:hover {
        color: var(--fontColor-1);
      }
    }
    svg:hover {
      color: var(--fontColor-1);
    }
  }
        /* tamanhos de telas não oficiais */
        @media (max-width: 1483px) {
          width: 300px;
        }
  @media (max-width: 1440px) {
    width: 280px;
  }
        /* tamanhos de telas não oficiais */
        @media (max-width: 1377px) {
          width: 350px;
        }
        @media (max-width: 1192px) {
          width: 265px;
        }
  @media (max-width: 1024px) {
    width: 265px;
    h3{
      font-size: 2rem;
    }
  }
        /* tamanhos de telas não oficiais */
        @media (max-width: 968px) {
          width: 40%;
        }
        @media (max-width: 800px) {
          width: 320px;
        }
 
`;

export default ProjectStyle;
