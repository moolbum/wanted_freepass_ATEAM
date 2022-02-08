import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import * as S from './Board.style';
import Toggle from '../../components/Toggle/Toggle';
import { Request } from './data';

const Board = () => {
  const [cardInfo, setCardInfo] = useState<Request[]>([]);
  const [filterInfo, setFilterInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/requests')
      .then(res => res.json())
      .then(res => setCardInfo(res));
  }, []);

  useEffect(() => {
    fetch('./data/filterSetData.json')
      .then(res => res.json())
      .then(res => setFilterInfo(res));
  }, []);

  console.log(filterInfo);

  return (
<<<<<<< HEAD
    <S.Wrapper>
      <S.Title>들어온 요청</S.Title>
      <S.Subtitle>파트너님에게 딱 맞는 요청서를 찾아보세요</S.Subtitle>
      <S.FilterContainer>
        {filterInfo.map(({ id, description, option }) => (
          <Filter key={id} description={description} option={option} />
        ))}
        <S.Button>필터링 리셋</S.Button>
      </S.FilterContainer>
=======
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
>>>>>>> main
      <S.CardWrap>
        {cardInfo.map(function (requests, index) {
          return <Card key={index} {...requests} />;
        })}
      </S.CardWrap>
    </S.Wrapper>
  );
};

export default Board;
