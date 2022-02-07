import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background: ${props => props.theme.navy};
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

export const LogoImg = styled.img`
  width: 153px;
  padding: 23px 0;
`;

export const RightMenuBox = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.white};
`;

export const RightMenu = styled.span`
  display: block;
  padding-right: 32px;
  line-height: 1.2;
`;

export const LogOutMenu = styled.span`
  display: block;
  padding-left: 32px;
  line-height: 1.2;
  border-left: 2px solid ${props => props.theme.white};
`;

export const EnterpriseImg = styled.img`
  width: 16.67px;
  margin-right: 8px;
`;
