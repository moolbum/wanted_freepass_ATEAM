import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as S from './Board.style';
import { Root, Request } from './data';

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
        {cardInfo.map((requests: Request): Request => {
          console.log(requests);
          return <Card key={requests.id} cardData={requests} />;
        })}
      </S.CardWrap>
    </div>
  );
};

export default Board;
