import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as S from './Board.style';
// import { Root, Request } from './data';

const Board = () => {
  interface Request {
    id: number;
    title: string;
    client: string;
    due: string;
    count?: number;
    amount: number;
    method: string[];
    material: string[];
    status: string;
    docs?: number;
  }
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
          console.log(requests);
          return <Card key={index} {...requests} />;
        })}
      </S.CardWrap>
    </div>
  );
};

export default Board;
