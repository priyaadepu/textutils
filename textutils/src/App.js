import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import FailureView from './FailureView';
import AllListsView from './AllListsView';
import ListCreation from './ListCreation';

function App() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailure, setIsFailure] = useState(false);
  const [selectedLists, setSelectedLists] = useState([]);
  const [isCreatingList, setIsCreatingList] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/textutils')
      .then((response) => response.json())
      .then((data) => {
        setLists(data.lists);
        setIsLoading(false);
      })
      .catch(() => {
        setIsFailure(true);
      });
  }, []);

  const handleRetry = () => {
    setIsFailure(false);
    setIsLoading(true);
    // Refetch data
  };

  const handleListSelect = (listNumber) => {
    setSelectedLists((prevSelectedLists) => {
      const updatedLists = [...prevSelectedLists];
      const index = updatedLists.indexOf(listNumber);
      if (index !== -1) {
        updatedLists.splice(index, 1);
      } else {
        updatedLists.push(listNumber);
      }
      return updatedLists;
    });
  };

  const handleCreateList = () => {
    if (selectedLists.length !== 2) {
      alert('You should select exactly 2 lists to create a new list');
    } else {
      setIsCreatingList(true);
    }
  };

  const handleCancelListCreation = () => {
    setIsCreatingList(false);
  };

  // ... other functions for handling list item movement, API calls, etc. (details omitted for brevity)

  return (
    <div>
      {isLoading && <Loader />}
      {isFailure && <FailureView onRetry={handleRetry} />}
      {!isLoading && !isFailure && !isCreatingList && (
        <AllListsView
          lists={lists}
          onSelect={handleListSelect}
          isSelected={(list) => selectedLists.includes(list.list_number)}
          onCreateList={handleCreateList}
        />
      )}
      {isCreatingList && (
        <ListCreation
          selectedLists={selectedLists}
          onCancel={handleCancelListCreation}
          // ... other props for fetching and updating lists
        />
      )}
    </div>
  );
}

export default App;
