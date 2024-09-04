import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useAussieContext} from '../store/aussie_context';
import SafeLayout from '../components/Layout/SafeLayout';
import FavHotelsList from '../components/FavHotels/FavHotelsList';
import {useNavigation} from '@react-navigation/native';

const FavoriteHotels = () => {
  const navigation = useNavigation();
  const {hotels} = useAussieContext();

  const favHotels = hotels.reduce((acc, city) => {
    const hotelsList = city.hotels
      .filter(hotel => hotel.isFavorite)
      .map(hotel => ({...hotel, cityId: city.id}));
    return [...acc, ...hotelsList];
  }, []);

  function showHotelDetails(item) {
    navigation.navigate('HotelDetailsScreen', {
      hotel: item,
      cityId: item.cityId,
    });
  }

  return (
    <SafeLayout style={{alignItems: 'center'}}>
      {favHotels.length === 0 ? (
        <Text style={{textAlign: 'center'}}>NO FAVORITE HOTELS</Text>
      ) : (
        <FlatList
          data={favHotels}
          keyExtractor={item => item.hotelId.toString()}
          renderItem={({item}) => (
            <FavHotelsList item={item} showHotel={showHotelDetails} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
      <View style={{height: 70}}></View>
    </SafeLayout>
  );
};

export default FavoriteHotels;

const styles = StyleSheet.create({});
