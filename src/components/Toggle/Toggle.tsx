import React from 'react';
import * as S from './Toggle.style';
import { useInputChecked } from '../../hooks/useChecked';

const Toggle = () => {
  interface FilterPropsType {
    handleCounseling?(): void;
    toggleState?: boolean;
  }

  const [selected, setSelected] = useInputChecked();

  return (
    <S.ToggleWrapper>
      <S.ToggleInput id="checkbox" type="checkbox" onChange={setSelected} />
      <S.ToggleLabel htmlFor="checkbox" />
    </S.ToggleWrapper>
  );
};

export default Toggle;
