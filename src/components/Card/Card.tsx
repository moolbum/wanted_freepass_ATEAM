import React from 'react';
import Button from './Button';
import * as S from './Card.style';
import { LIST_DATA } from './Data';

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
        {LIST_DATA.map(data => {
          return (
            <S.InfoWrap key={data.id}>
              <S.InfoTitle>{data.title}</S.InfoTitle>
              <S.Info>{data.info}</S.Info>
            </S.InfoWrap>
          );
        })}
      </S.InfoContainer>
      <Button />
    </S.CardContainer>
  );
};

export default Card;
