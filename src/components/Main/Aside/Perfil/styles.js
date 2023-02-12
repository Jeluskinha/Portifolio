import styled from "styled-components";

const PerfilStyle = styled.div`
  height: 290px;
  width: inherit;
  background: var(--Background-Cards);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  figure {
    height: 90px;
    width: 90px;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  h1 {
    color: var(--fontColor-1);
    font-weight: var(--fontWeight-Strong);
    text-align: center;
    font-size: 1.8rem;
  }
  span {
    color: var(--fontColor-2);
    font-weight: var(--fontWeight-Soft);
    text-align: center;
    font-size: var(--fontSize-Small);
  }
`;

export default PerfilStyle;
