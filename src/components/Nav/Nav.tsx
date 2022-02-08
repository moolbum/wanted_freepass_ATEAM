import React, { useState } from 'react';
import * as S from './Nav.style';

const Nav = (): JSX.Element => {
  const [sideMenu, setSideMenu] = useState(false);

  const showSideMenu = () => {
    setSideMenu(true);
  };

  const hideSideMenu = () => {
    if (sideMenu === true) return setSideMenu(false);
  };

  return (
    <S.NavWrapper>
      {sideMenu && <S.MenuSlideBg onClick={hideSideMenu} />}
      <S.NavWrap>
        <S.HamburgerMenu src="/images/menu.png" onClick={showSideMenu} />

        <S.LogoImg src="/images/logo.png" />
        {sideMenu ? (
          <>
            <S.MenuSlide>
              <S.LogoWrap>
                <S.MenuLogoBlue src="/images/logoBlue.png" />
              </S.LogoWrap>

              <S.MenuWrap>
                <S.MenuContent>
                  <S.MenuEnterpriseImg src="/images/buildingGray.png" />
                  파트너 정밀가공
                </S.MenuContent>
                <S.MenuContent>로그아웃</S.MenuContent>
              </S.MenuWrap>
            </S.MenuSlide>
          </>
        ) : (
          ''
        )}
        <S.RightMenuBox>
          <S.RightMenu>
            <S.EnterpriseImg src="/images/building.png" />A 가공업체
          </S.RightMenu>
          <S.LogOutMenu>로그아웃</S.LogOutMenu>
        </S.RightMenuBox>
      </S.NavWrap>
    </S.NavWrapper>
  );
};

export default Nav;
