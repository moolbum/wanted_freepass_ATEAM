import React, { useState } from 'react';
import * as S from './Toggle.style';
import { useInputChecked } from '../../hooks/useChecked';

const Toggle = () => {
  interface FilterPropsType {
    handleCounseling?(): void;
    toggleState?: boolean;
  }

  // const [selected, setSelected] = useInputChecked();
  const [isToggled, setIsToggled] = useState<any>(false);

  return (
    <S.ToggleWrapper>
      <S.ToggleInput id="checkbox" type="checkbox" onChange={isToggled} />
      <S.ToggleLabel htmlFor="checkbox" />
    </S.ToggleWrapper>
  );
};

export default Toggle;
