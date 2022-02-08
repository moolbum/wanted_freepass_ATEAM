import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0 0 -20px;
`;

export const ToggleLabel = styled.label`
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #aaa;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: -3px;
    background: ${props => props.theme.lightGray};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${ToggleLabel} {
    background-color: ${({ theme }) => theme.toggle};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin-left: 21px;
      transition: 0.2s;
      background-color: ${({ theme }) => theme.blue};
    }
  }
`;
