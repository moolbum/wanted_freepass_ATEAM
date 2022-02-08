import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

const Board = () => {
  const [cardInfo, setCardInfo] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:4000/requests')
      .then(res => res.json())
      .then(res => setCardInfo(res));
  }, []);

  console.log(cardInfo);

  return (
    <div>
      <Card />
    </div>
  );
};

export default Board;
