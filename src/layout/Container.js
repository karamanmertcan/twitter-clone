import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='flex max-w-7xl min-h-screen border mx-auto'>{children}</div>
  );
};

export default Container;
