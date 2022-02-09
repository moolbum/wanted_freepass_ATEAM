import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import * as S from './Board.style';
import Toggle from '../../components/Toggle/Toggle';
import { Request } from './data';
import NoRequest from './NoRequest/NoRequest';

function Board(): JSX.Element {
  const [cardInfo, setCardInfo] = useState<Request[]>([]);
  const [filterInfo, setFilterInfo] = useState([]);
  const [isToggled, setIsToggled] = useState<any>(false);
  const [filteredData, setFilteredData] = useState<any>([]);

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

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setFilteredData([]);
  };

  const IsShownData = () => {
    const statusFiltered = cardInfo.filter(el => el.status === '상담중');
    setFilteredData(statusFiltered);
    console.log(statusFiltered);
  };

  useEffect(() => {
    isToggled ? IsShownData() : setFilteredData([]);
  }, [cardInfo]);

  return (
    <S.Wrapper>
      <S.FilterWrap>
        <S.Filter>
          <S.Title>들어온 요청</S.Title>
          <S.Subtitle>파트너님에게 딱 맞는 요청서를 찾아보세요</S.Subtitle>
          <S.FilterContainer>
            {filterInfo.map(({ id, description, option }) => (
              <Filter key={id} description={description} option={option} />
            ))}
            <S.Button>필터링 리셋</S.Button>
          </S.FilterContainer>
        </S.Filter>
        <S.ToggleContainer>
          <S.ToggleWrapper>
            <S.ToggleInput
              id="checkbox"
              type="checkbox"
              checked={isToggled}
              onChange={handleToggle}
            />
            <S.ToggleLabel htmlFor="checkbox" />
          </S.ToggleWrapper>
          <S.ToggleText>상담 중인 요청만 보기</S.ToggleText>
        </S.ToggleContainer>
      </S.FilterWrap>
      <S.CardWrap>
        {isToggled
          ? filteredData?.map(function (requests: any, index: any) {
              return <Card key={index} {...requests} />;
            })
          : cardInfo?.map(function (requests: any, index: any) {
              return <Card key={index} {...requests} />;
            })}
      </S.CardWrap>
    </S.Wrapper>
  );
}

export default Board;
