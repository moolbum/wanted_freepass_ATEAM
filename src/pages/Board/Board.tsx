import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as S from './Board.style';
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
      <S.CardWrap>
        {cardInfo.map(function (requests, index) {
          return <Card key={index} {...requests} />;
        })}
      </S.CardWrap>
    </div>
  );
};

export default Board;
