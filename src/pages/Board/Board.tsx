import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as S from './Board.style';
import { Root, Request } from './data';

// export interface Root {
//   requests: Request[];
// }

// export interface Request {
//   id: number;
//   title: string;
//   client: string;
//   due: string;
//   count?: number;
//   amount: number;
//   method: string[];
//   material: string[];
//   status: string;
//   docs?: number;
// }

const Board = () => {
  const [cardInfo, setCardInfo] = useState<Request[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/requests')
      .then(res => res.json())
      .then(res => setCardInfo(res));
  }, []);

  // console.log(cardInfo);

  return (
    <div>
      <S.CardWrap>
        {cardInfo.map((requests, id): Request => {
          console.log(requests);
          return <Card key={requests.id} cardData={requests} />;
        })}
      </S.CardWrap>
    </div>
  );
};

export default Board;
