import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
from {
  transform: translateX(-280px);
} to {
  transform: translateX(0px);
}
`;

export const NavWrapper = styled.nav`
  background: ${props => props.theme.navy};

  @media ${({ theme }) => theme.mobileL} {
    height: 48px;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;

  @media ${({ theme }) => theme.mobileL} {
    justify-content: flex-start;
    margin: 0 20px;
  }
`;

export const HamburgerMenu = styled.img`
  display: none;

  @media ${({ theme }) => theme.mobileL} {
    display: block;
    width: 18px;
    margin-right: 19px;
    cursor: pointer;
  }
`;

export const MenuSlide = styled.div`
  /* visibility: hidden;
  position: absolute;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100%;
  background: ${props => props.theme.white};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 1; */

  @media ${({ theme }) => theme.mobileL} {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    background: ${props => props.theme.white};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    z-index: 1;
    animation-name: ${slideRight};
    animation-duration: 0.5s;
  }
`;

export const LogoWrap = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

export const MenuLogoBlue = styled.img`
  display: none;
  @media ${({ theme }) => theme.mobileL} {
    display: block;
    width: 91.52px;
    margin: 16px 20px;
  }
`;

export const MenuWrap = styled.div`
  display: none;
  @media ${({ theme }) => theme.mobileL} {
    display: block;
    margin: 38.5px 32px;
  }
`;

export const MenuContent = styled.div`
  @media ${({ theme }) => theme.mobileL} {
    display: flex;
    align-items: baseline;
    margin-bottom: 26.5px;
    color: ${props => props.theme.darkGray};
    font-weight: ${props => props.theme.weightSemiBold};
    cursor: pointer;
  }
`;

export const MenuEnterpriseImg = styled.img`
  display: none;

  @media ${({ theme }) => theme.mobileL} {
    display: block;
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }
`;

export const MenuSlideBg = styled.div`
  display: none;

  @media ${({ theme }) => theme.mobileL} {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 153px;
  padding: 23px 0;

  @media ${({ theme }) => theme.mobileL} {
    width: 91.8px;
    padding: 18px 0;
  }
`;

export const RightMenuBox = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.white};

  @media ${({ theme }) => theme.mobileL} {
    display: none;
  }
`;

export const RightMenu = styled.span`
  display: block;
  padding-right: 32px;
  line-height: 1.2;

  @media ${({ theme }) => theme.tablet} {
    padding-right: 20px;
  }
`;

export const LogOutMenu = styled.span`
  display: block;
  padding-left: 32px;
  line-height: 1.2;
  border-left: 2px solid ${props => props.theme.white};

  @media ${({ theme }) => theme.tablet} {
    padding-left: 20px;
  }
`;

export const EnterpriseImg = styled.img`
  width: 16.67px;
  margin-right: 8px;
`;
