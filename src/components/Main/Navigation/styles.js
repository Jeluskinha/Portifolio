import styled from 'styled-components';

const NavigationStyle = styled.div`
  height: 100%;
  width: 80px;
  background-color: var(--Background-Info);
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default NavigationStyle;