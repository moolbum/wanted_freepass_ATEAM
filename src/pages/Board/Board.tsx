import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import * as S from './Board.style';
import Toggle from '../../components/Toggle/Toggle';
import { Request } from './data';
import NoRequest from './NoRequest/NoRequest';

const Board = () => {
  const [cardInfo, setCardInfo] = useState<Request[]>([]);
  const [filterInfo, setFilterInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetch('https://wantedateam.herokuapp.com/')
      .then(res => res.json())
      .then(res => setCardInfo(res));
  }, []);

  useEffect(() => {
    fetch('./data/filterSetData.json')
      .then(res => res.json())
      .then(res => setFilterInfo(res));
  }, []);

  console.log(cardInfo);

  return (
    <S.Wrapper>
      <S.Title>들어온 요청</S.Title>
      <S.Subtitle>파트너님에게 딱 맞는 요청서를 찾아보세요</S.Subtitle>
      <S.FilterContainer>
        {filterInfo.map(({ id, description, option }) => (
          <Filter key={id} description={description} option={option} />
        ))}
        <S.Button>필터링 리셋</S.Button>
      </S.FilterContainer>
      <div>
        <Toggle />
        상담 중인 요청만 보기
      </div>
      <S.CardWrap>
        {cardInfo.map(function (requests, index) {
          return <Card key={index} {...requests} />;
        })}
        {cardInfo.length === 0 && <NoRequest />}
      </S.CardWrap>
    </S.Wrapper>
  );
};

export default Board;
