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
`;
