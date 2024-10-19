import React from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const contextValue = {
    name: 'John Doe',
    age: 30,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;

