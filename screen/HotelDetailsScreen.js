import {StyleSheet, Text, View} from 'react-native';
import SafeLayout from '../components/Layout/SafeLayout';
import IconReturn from '../components/Icon/IconReturn';
import {HotelName} from '../components/HotelDetails';

const HotelDetailsScreen = ({route}) => {
  const hotelData = route.params;
  console.log(route.params);
  const name = hotelData.name;
  const isFavorite = hotelData.isFavorite;
  const address = hotelData.address;
  const latitude = hotelData.coordinates.latitude;
  const longitude = hotelData.coordinates.longitude;
  const description = hotelData.description;
  const hotelId = hotelData.hotelId;
  const images = hotelData.images;

  console.log(images);
  return (
    <SafeLayout>
      <HotelName name={name} />
      <IconReturn />
    </SafeLayout>
  );
};

export default HotelDetailsScreen;

const styles = StyleSheet.create({});
