import styled from "styled-components";

const AsideStyle = styled.aside`
  height: 100%;
  width: 290px;
  background-color: var(--Background-Info);
  display: flex;
  flex-direction: column;

  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  @media (max-width: 800px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export default AsideStyle;
