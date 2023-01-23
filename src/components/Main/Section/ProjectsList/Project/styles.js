import styled from "styled-components";

const ProjectStyle = styled.li`
  height: 240px;
  width: 315px;
  background-color: var(--Background-Cards);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  h3 {
    font-size: var(--fontSize-Middle);
    color: var(--fontColor-1);
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
`;

export default ProjectStyle;
