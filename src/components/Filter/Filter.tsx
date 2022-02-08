import React, { useState } from 'react';
import * as S from './Filter.style';

const Filter = () => {
  const [optionList, setOptionList] = useState([]);
  const [select, setSelect] = useState('');

  const handleSelect = () => {
    setSelect('dd');
  };

  return (
    <S.Select>
      <option>
        <input type="checkbox" name="method" value="milling" />
      </option>
      <option>
        <form>
          <input type="checkbox" name="method" value="lathe" />
        </form>
      </option>
    </S.Select>
  );
};

export default Filter;
