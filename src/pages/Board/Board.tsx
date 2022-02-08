import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as S from './Board.style';
import Toggle from '../../components/Toggle/Toggle';
import { Request } from './data';

const Board = () => {
  const [cardInfo, setCardInfo] = useState<Request[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/requests')
      .then(res => res.json())
      .then(res => setCardInfo(res));
  }, []);

  return (
    <div>
      <S.TitleWrap>
        <S.TitleSubWrap>
          <div>가공방식, 재료</div>
          <div>
            <Toggle />
            상담 중인 요청만 보기
          </div>
        </S.TitleSubWrap>
      </S.TitleWrap>
      <S.CardWrap>
        {cardInfo.map(function (requests, index) {
          return <Card key={index} {...requests} />;
        })}
      </S.CardWrap>
    </div>
  );
};

export default Board;
