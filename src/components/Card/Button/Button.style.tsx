import styled from 'styled-components';

export const ButtonBlue = styled.p`
  display: inline-block;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  font-weight: ${props => props.theme.weightSemiBold};
  font-size: ${props => props.theme.fontRegular};
`;

export const ButtonWhite = styled(ButtonBlue)`
  margin-left: 10px;
  border: ${props => props.theme.borderBlue};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blue};
`;
