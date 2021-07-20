import React from 'react';

const LoggingButtonFn = (props) => {
  const handleClick = (e) => {
    console.log('this is:', this);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default LoggingButtonFn;
