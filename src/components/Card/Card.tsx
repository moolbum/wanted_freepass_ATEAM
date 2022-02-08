import React from 'react';
import Button from './Button';
import * as S from './Card.style';
import { LIST_DATA, ListData } from './data';

const Card = ({ ...requests }) => {
  const isValueWaiting = requests.status.includes('대기중');
  return (
    <S.CardContainer>
      <S.TitleWrap>
        <S.Title>{requests.title}</S.Title>
        {!isValueWaiting && <S.Consult>{requests.status}</S.Consult>}
      </S.TitleWrap>
      <S.Customer>{requests.client}</S.Customer>
      <S.Date>{requests.due}까지 납기</S.Date>
      <S.Line />
      <S.InfoContainer>
        <S.InfoWrap>
          {LIST_DATA.map(({ id, title }: ListData) => {
            return <S.InfoTitle key={id}>{title}</S.InfoTitle>;
          })}
        </S.InfoWrap>
        <S.InfoWrap>
          <S.Info>{requests.count}개</S.Info>
          <S.Info>{requests.amount}개</S.Info>
          {requests.material.map((item: any, index: number) => {
            return (
              <div key={index}>
                <S.InfoContent>{item.toString()}</S.InfoContent>
              </div>
            );
          })}
          {requests.method.map((item: any, index: number) => {
            return (
              <div key={index}>
                <S.InfoContent>{item.toString()}</S.InfoContent>
              </div>
            );
          })}
        </S.InfoWrap>
      </S.InfoContainer>
      <Button />
    </S.CardContainer>
  );
};

export default Card;
