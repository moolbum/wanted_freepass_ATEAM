import React from 'react';
import Button from './Button';
import * as S from './Card.style';
import { LIST_DATA, ListData } from './data';

const Card = () => {
  return (
    <S.CardContainer>
      <S.TitleWrap>
        <S.Title>자동차 시제품 제작</S.Title>
        <S.Consult>상담중</S.Consult>
      </S.TitleWrap>
      <S.Customer>A 고객사</S.Customer>
      <S.Date>2020.12.14까지 납기</S.Date>
      <S.Line />
      <S.InfoContainer>
        <S.InfoWrap>
          {LIST_DATA.map(({ id, title }: ListData) => {
            return <S.InfoTitle key={id}>{title}</S.InfoTitle>;
          })}
        </S.InfoWrap>
        <S.InfoWrap>
          <S.Info>2개</S.Info>
          <S.Info>100개</S.Info>
          <S.Info>밀링, 선반</S.Info>
          <S.Info>알루미늄</S.Info>
        </S.InfoWrap>
      </S.InfoContainer>
      <Button />
    </S.CardContainer>
  );
};

export default Card;
