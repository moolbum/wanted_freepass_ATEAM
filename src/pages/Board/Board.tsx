import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';

const Board = () => {
  useEffect(() => {
    fetch('http://localhost:4000/requests')
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);

  return (
    <div>
      보드
      <Card />
    </div>
  );
};

export default Board;
