import styled from 'styled-components';

export const TitleWrap = styled.div`
  max-width: 1300px;
  min-width: 360px;
  margin: 0 auto;
`;

export const TitleSubWrap = styled(TitleWrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardWrap = styled.div`
  ${props => props.theme.flex()}
  flex-wrap: wrap;
  max-width: 1300px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
`;
