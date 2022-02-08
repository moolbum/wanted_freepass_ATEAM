import styled from 'styled-components';

export const Select = styled.select`
  width: 98px;
  height: 32px;
  padding: 4px 12px;
  margin: 0px 16px;
  outline: ${props => props.theme.borderLightGray};
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: url('assets/arrowDropDown.png') no-repeat 95% 50%;

  &:hover {
    outline: ${props => props.theme.borderBlue};
    transition: 0.2s;
  }

  &::-ms-expand {
    display: none;
  }
`;
