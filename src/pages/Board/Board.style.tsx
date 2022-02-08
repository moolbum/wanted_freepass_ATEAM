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

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardWrap = styled.div`
  ${props => props.theme.flex()}
  flex-wrap: wrap;
  max-width: 1300px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
`;

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
