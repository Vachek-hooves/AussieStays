import {useContext, createContext, useState, useEffect} from 'react';
import {getData, storeData} from './dataAsyncFn';
import {AussieData} from '../data/appData';

export const AussieContext = createContext({
  hotels: [],
  addHotelToFavorite: () => {},
  createCity: () => {},
  createHotel: () => {},
  deleteCity: () => {},
  deleteHotel: () => {},
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
      const updatedData = hotels.map(city => {
        if (city.id === cityId) {
          const updatedCityHotel = city.hotels.map(hotel => {
            if (hotel.hotelId === hotelId) {
              return {...hotel, isFavorite: !hotel.isFavorite};
            }

            return hotel;
          });
          return {...city, hotels: updatedCityHotel};
        }
        return city;
      });
      await storeData(updatedData, 'hotels');
      setHotels(updatedData);
    } catch (error) {
      throw new Error('Hotel favorite fn error', error);
    }
  };

  const createCity = async name => {
    const id = new Date().toString();

    const newCity = {
      id: id,
      city: name,
      hotels: [],
    };

    try {
      const updatedHotels = [newCity, ...hotels];
      setHotels(updatedHotels);
      await storeData(updatedHotels, 'hotels');
    } catch (error) {}
  };

  const createHotel = async (cityId, newHotel) => {


    try {
      const updatedData = hotels.map(city => {
        if (city.id === cityId) {
          return {
            ...city,
            hotels: [newHotel, ...city.hotels],
          };
        }
        return city;
      });
      await storeData(updatedData, 'hotels');
      setHotels(updatedData);
    } catch (error) {
      throw new Error('create hotel error', error);
    }
  };

  const deleteCity = async cityId => {
    try {
      const updatedData = hotels.filter(city => city.id !== cityId);
      await storeData(updatedData, 'hotels');
      setHotels(updatedData);
    } catch (error) {
      throw new Error('Delete city error', error);
    }
  };
  const deleteHotel = async (cityId, hotelId) => {
    try {
      const updatedData = hotels.map(city => {
        if (city.id === cityId) {
          return {
            ...city,
            hotels: city.hotels.filter(hotel => hotel.hotelId !== hotelId),
          };
        }
        return city;
      });
      await storeData(updatedData, 'hotels');
      setHotels(updatedData);
    } catch (error) {
      throw new Error('Delete hotel error', error);
    }
  };

  const value = {
    hotels,
    addHotelToFavorite,
    createCity,
    createHotel,
    deleteCity,
    deleteHotel,
  };
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
