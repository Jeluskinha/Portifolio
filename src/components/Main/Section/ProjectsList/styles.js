import styled from "styled-components";

const ProjectListStyle = styled.section`
  margin-top: 40px;
  height: fit-content;
  height: 300px;
  width: 100%;

  ul{ 
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: ${({numProcjects}) => numProcjects % 3 === 2 && numProcjects > 1 ? "flex-start" : "space-between"};
    flex-flow: wrap;
    gap: 2rem;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: scroll;
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
`;

export default ProjectListStyle;
