import React from 'react';
import ListContainer from './ListContainer';

const AllLists = ({ lists, onListSelect, selectedLists, onCreateNewList }) => {
  return (
    <div className="all-lists">
      <h2>All Lists</h2>
      <ul>
        {lists.map((list) => (
          <ListContainer
            key={list.id}
            list={list}
            onSelect={onListSelect}
            isSelected={selectedLists.includes(list.list_number)}
          />
        ))}
      </ul>
      <button onClick={onCreateNewList}>Create a new list</button>
    </div>
  );
};

export default AllLists;

