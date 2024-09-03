import {StyleSheet, Text, View} from 'react-native';
import {useAussieContext} from '../store/aussie_context';
import SafeLayout from '../components/Layout/SafeLayout';

const FavoriteHotels = () => {
  const {hotels} = useAussieContext();
  //   const favHotels = hotels.filter(city =>
  //     city.hotels.find(hotel => hotel.isFavorite),
  //   );
  const favHotels = hotels.reduce((acc, city) => {
    const hotelsList = city.hotels.filter(hotel => hotel.isFavorite);
    return [...acc, ...hotelsList];
  }, []);

  return <SafeLayout></SafeLayout>;
};

export default FavoriteHotels;

const styles = StyleSheet.create({});
