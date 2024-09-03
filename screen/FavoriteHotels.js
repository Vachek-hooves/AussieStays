import {StyleSheet, Text, View} from 'react-native';
import {useAussieContext} from '../store/aussie_context';

const FavoriteHotels = () => {
  const {hotels} = useAussieContext();
  //   const favHotels = hotels.filter(city =>
  //     city.hotels.find(hotel => hotel.isFavorite),
  //   );
  const favHotels = hotels.reduce((acc, city) => {
    const hotelsList = city.hotels.filter(hotel => hotel.isFavorite);
    return [...acc, ...hotelsList];
  }, []);
  console.log(favHotels.length);

  return (
    <View>
      <Text>FavoriteHotels</Text>
    </View>
  );
};

export default FavoriteHotels;

const styles = StyleSheet.create({});
