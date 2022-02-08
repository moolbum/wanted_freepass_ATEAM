import React from 'react';
import * as S from './Nav.style';

const Nav = (): JSX.Element => {
  return (
    <S.NavWrapper>
      <S.NavWrap>
        <S.LogoImg src="/images/logo.png" />
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
