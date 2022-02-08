import styled from 'styled-components';

export const NoRequest = styled.div`
  max-width: 1130px;
  width: 100%;
  padding: 40px 0;
  border: 1px solid ${props => props.theme.mediumGray};
  color: ${props => props.theme.gray};
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontRegular};
  text-align: center;
`;
