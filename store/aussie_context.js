import {useContext, createContext, useState, useEffect} from 'react';
import {getData, storeData} from './dataAsyncFn';
import {AussieData} from '../data/appData';

export const AussieContext = createContext({hotels: []});

export const AussieProvider = ({children}) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    saveInitialHotelsData();
  }, []);

  const saveInitialHotelsData = async () => {
    try {
      let data = await getData('hotels');
      if (data.length === 0) {
        await storeData(AussieData, 'hotels');
        data = await getData('hotels');
      }
      setHotels(data);
    } catch (error) {
      throw new error('Hotels wasnt saved', error);
    }
  };

  const value = {hotels};
  return (
    <AussieContext.Provider value={value}>{children}</AussieContext.Provider>
  );
};

export const useAussieContext = () => {
  const aussieContext = useContext(AussieContext);
  if (!aussieContext) {
    throw new Error('useAussieContext place in AussieProvider');
  }
  return aussieContext;
};
