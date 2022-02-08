import { useState } from 'react';

export const useInputChecked = () => {
  const [toggle, setToggle] = useState();

  const inputCheckedValue = (e: React.ChangeEvent<any>): void => {
    const { value, checked } = e.target;
    checked && setToggle(value);
    console.log(checked, 'dd');
  };
  return [toggle, inputCheckedValue];
};
