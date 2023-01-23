import styled from "styled-components";

const ProjectListStyle = styled.section`
  margin-top: 40px;
  height: fit-content;
  width: 100%;

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 2rem;
  }
`;

export default ProjectListStyle;
