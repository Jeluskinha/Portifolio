import styled from "styled-components";

const ProjectListStyle = styled.section`
  height: 60%;
  width: 100%;
  position: relative;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: ${({ numProcjects }) =>
      numProcjects % 3 === 2 && numProcjects > 1
        ? "space-between"
        : "flexstart"};
    flex-flow: row wrap;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: scroll;
    gap: 2rem;
    &::-webkit-scrollbar {
      width: 8px;
      background-color: var(--fontColor-2);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--fontColor-1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--fontColor-3);
    }
  }

  /* tamanhos de telas não oficiais */
  @media (max-width: 1377px) {
    ul {
      justify-content: center;
    }
  }
  @media (max-width: 1024px) {
    ul {
      justify-content: ${({ numProcjects }) =>
        numProcjects % 3 === 2 && numProcjects > 1
          ? "space-between"
          : "flexstart"};
    }
  }
  @media (max-width: 769px) {
    ul {
      justify-content: center;
    }
  }
`;

export default ProjectListStyle;
