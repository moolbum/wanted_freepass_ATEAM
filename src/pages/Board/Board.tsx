import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import * as S from './Board.style';

const Board = () => {
  const [cardInfo, setCardInfo] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3000/requests')
      .then(res => res.json())
      .then(res => setCardInfo(res));
  }, []);

  console.log(cardInfo);

  return (
    <S.Wrapper>
      <S.Title>들어온 요청</S.Title>
      <S.Subtitle>파트너님에게 딱 맞는 요청서를 찾아보세요</S.Subtitle>
      <Filter />
      <Card />
    </S.Wrapper>
  );
};

export default Board;
