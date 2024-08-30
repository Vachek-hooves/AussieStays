import {useContext, createContext, useState, useEffect} from 'react';

export const AussieContext = createContext({});

export const AussieProvider = ({children}) => {
    
  const value = {};
  return (
    <AussieContext.Provider value={value}>{children}</AussieContext.Provider>
  );
};

export const useAussieContext = () => {
  const aussieContext = useContext(AussieContext);
  if (!aussieContext) {
    throw new Error('useAussieContext place in AussieProvider');
  }
};
