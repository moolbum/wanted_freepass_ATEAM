import styled from 'styled-components';

export const Dropbox = styled.div`
  width: 98px;
  height: 32px;
  padding: 4px 12px;
  margin-right: 15px;
  outline: ${props => props.theme.borderLightGray};
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('assets/arrowDropDown.png') no-repeat 95% 50%;
  position: relative;

  &:hover {
    outline: ${props => props.theme.borderBlue};
    transition: 0.2s;
    cursor: pointer;
  }
`;

export const Description = styled.span`
  line-height: 1.5;
`;

export const OptionBox = styled.ul`
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 9;
  border-radius: ${props => props.theme.borderRadius};
  outline: ${props => props.theme.borderLightGray};
  width: 100%;
  background-color: white;
`;

export const Option = styled.li`
  display: flex;
`;

export const Text = styled.div`
  margin: 8px 4px;
`;
