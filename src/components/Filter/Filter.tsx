import React, { useState } from 'react';

const Filter = () => {
  const [select, setSelect] = useState('');

  const handleSelect = event => {
    setSelect(event.target.select);
  };

  return (
    <div>
      <select name="method" id="method" onChange={handleSelect} value={select}>
        <option value="milling">밀링</option>
        <option value="lathe">선반</option>
      </select>
    </div>
  );
};

export default Filter;
