import React, { useEffect, useState } from 'react';
import * as S from './Filter.style';

const Filter = (props: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked((prev: boolean) => !prev);
  };

  return (
    <S.Dropbox>
      <S.Description>{props.description}</S.Description>
      <S.OptionBox>
        {props.option.map((element: string) => (
          <S.Option key={element} onClick={handleChecked}>
            <S.Text>
              <input
                type="checkbox"
                name="method"
                value={element}
                checked={isChecked}
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
