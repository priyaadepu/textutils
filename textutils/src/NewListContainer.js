import React, { useState } from 'react';

const NewListContainer = ({ listItems, onMoveItem }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleItemClick = (itemId) => {
    setIsEditing(true);
    // Focus on the input field for editing
  };

  const handleMoveItem = (itemId, direction) => {
    onMoveItem(itemId, direction);
    setIsEditing(false); // Close editing mode after moving
  };

  const handleItemEdit = (itemId, newText) => {
    // Update the item in the listItems array
    setIsEditing(false); // Close editing mode after updating
  };

  return (
    <ul className="new-list-container">
      {listItems.map((item) => (
        <li key={item.id}>
          {isEditing && item.id === editedItemId ? (
            <input
              type="text"
              value={item.text}
              onChange={(e) => handleItemEdit(item.id, e.target.value)}
            />
          ) : (
            <>
              {item.text}
              <button onClick={() => handleMoveItem(item.id, 'left')}>
                <img src="left-arrow.png" alt="Move left" />
              </button>
              <button onClick={() => handleMoveItem(item.id, 'right')}>
                <img src="right-arrow.png" alt="Move right" />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NewListContainer;

