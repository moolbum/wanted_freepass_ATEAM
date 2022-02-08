import React, { useState } from 'react';
import * as S from './Filter.style';

const Filter = (props: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectTag, setSelectTag] = useState('');

  const handleChecked = (e: any) => {
    setIsChecked(e.target.checked);
    setSelectTag(e.target.value);
  };

  console.log(selectTag);

  return (
    <S.Dropbox>
      <S.Description>{props.description}</S.Description>
      <S.OptionBox>
        {props.option.map((element: string) => (
          <S.Option key={element}>
            <S.Text>
              <input
                type="checkbox"
                name="method"
                value={element}
                onChange={handleChecked}
              />
              {element}
            </S.Text>
          </S.Option>
        ))}
      </S.OptionBox>
    </S.Dropbox>
  );
};

export default Filter;
