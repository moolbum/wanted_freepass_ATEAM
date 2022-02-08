import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 400px;
  padding: 24px 16px;
  margin: 9px 9px;
  outline: ${props => props.theme.borderLightGray};
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.2s;

  &:hover {
    outline: ${props => props.theme.borderBlue};
    transition: 0.2s;
  }
`;

export const TitleWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
`;

export const Title = styled.h1`
  margin-bottom: 4px;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontMedium};
`;

export const Consult = styled.p`
  padding: 7px 8px 4px 8px;
  border: 1px solid ${props => props.theme.orange};
  border-radius: 16px;
  color: ${props => props.theme.orange};
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontSmall};
  vertical-align: text-bottom;
`;

export const Customer = styled.p`
  margin-bottom: 24px;
  font-weight: ${props => props.theme.weightSemiBold};
  font-size: ${props => props.theme.fontRegular};
`;

export const Date = styled.p`
  color: ${props => props.theme.gray};
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontRegular};
`;

export const Line = styled.div`
  margin: 16px 0 32px 0;
  border-bottom: ${props => props.theme.borderLightGray};
`;

export const InfoContainer = styled.ul`
  ${props => props.theme.flex('center', 'flex-start')}
  margin: 32px 0;
`;

export const InfoWrap = styled.li`
  ${props => props.theme.flex('flex-start', 'center', 'column')}
  margin: 8px 0;
`;

export const InfoTitle = styled.p`
  width: 70px;
  margin: 8px 32px 8px 0;
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontRegular};
`;

export const Info = styled.span`
  margin: 8px 32px 8px 0;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontRegular};
`;

export const InfoContent = styled.div`
  display: flex;
`;

export const InfoCon = styled.span`
  margin: 8px 0px 8px 0;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontRegular};
`;
