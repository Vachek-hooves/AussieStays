import {ScrollView, View} from 'react-native';
import SafeLayout from '../components/Layout/SafeLayout';
import IconReturn from '../components/Icon/IconReturn';
import {
  HotelAddress,
  HotelDiscription,
  HotelImages,
  HotelName,
} from '../components/HotelDetails';
import {CustomCalendar} from '../components/ui';

const HotelDetailsScreen = ({route}) => {
  const hotelData = route.params.hotel;
  const name = hotelData.name;
  const isFavorite = hotelData.isFavorite;
  const address = hotelData.address;
  const latitude = hotelData.coordinates.latitude;
  const longitude = hotelData.coordinates.longitude;
  const description = hotelData.description;
  const hotelId = hotelData.hotelId;
  const images = hotelData.images;

  return (
    <SafeLayout>
      <HotelName name={name} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HotelImages images={images} />
        <HotelAddress
          address={address}
          latitude={latitude}
          longitude={longitude}
          name={name}
        />
        <HotelDiscription text={description} />

        <CustomCalendar />
      </ScrollView>
      <View style={{height: 70}}></View>
      <IconReturn />
    </SafeLayout>
  );
};

export default HotelDetailsScreen;
