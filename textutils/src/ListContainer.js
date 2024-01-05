import React, { useState } from 'react';

const ListContainer = ({ list, onSelect, isSelected }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onSelect(list.list_number);
  };

  return (
    <li key={list.id} className="list-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <h3>{list.name}</h3>
      <p>{list.description}</p>
      {/* Render list items here */}
    </li>
  );
};

export default ListContainer;
