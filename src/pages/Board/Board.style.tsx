import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 155px 0 110px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fontMedium};
  line-height: 24px;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 30px;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.blue};
`;

export const CardWrap = styled.div`
  ${props => props.theme.flex()}
  flex-wrap: wrap;
  max-width: 1300px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
`;
