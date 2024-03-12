import React, { useState } from 'react';

export const CustomNotification = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  const notify = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  return (
    <div>
      <button onClick={notify}>Show Notification</button>
      {isVisible && (
        <div
          style={{
            backgroundColor: getColorByType(type),
            padding: '10px',
            marginTop: '10px',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

const getColorByType = type => {
  switch (type) {
    case 'info':
      return 'lightblue';
    case 'success':
      return 'lightgreen';
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return 'lightgrey';
  }
};
