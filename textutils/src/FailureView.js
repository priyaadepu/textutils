import React from 'react';

const FailureView = ({ onRetry }) => {
  return (
    <div className="failure-view">
      <h2>Failed to fetch lists</h2>
      <p>Please check your internet connection and try again.</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default FailureView;


