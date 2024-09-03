import {useContext, createContext, useState, useEffect} from 'react';
import {getData, storeData} from './dataAsyncFn';
import {AussieData} from '../data/appData';

export const AussieContext = createContext({
  hotels: [],
  addHotelToFavorite: () => {},
});

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

  const addHotelToFavorite = async (cityId, hotelId) => {
    try {
      // const updatedData = hotels.find(city => city.id === cityId);
      const updatedData = hotels.map(city => {
        if (city.id === cityId) {
          // console.log(city)
          const updatedCityHotel = city.hotels.map(hotel => {
            if (hotel.hotelId === hotelId) {
              console.log(hotel);
              return {...hotel, isFavorite: !hotel.isFavorite};
            }
            console.log(updatedCityHotel);
            return hotel;
          });
          return {...city, hotels: updatedCityHotel};
        }
        return city;
      });
      await storeData(updatedData, 'hotels');
      setHotels(updatedData);
      // console.log(updatedData);
    } catch (error) {}
  };

  const value = {hotels, addHotelToFavorite};
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
