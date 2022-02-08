import styled from 'styled-components';

export const CardWrap = styled.div`
  ${props => props.theme.flex()}
  flex-wrap: wrap;
  max-width: 1300px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
`;
