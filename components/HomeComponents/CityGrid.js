import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useAussieContext} from '../../store/aussie_context';
import HotelCard from './HotelCard';
const {height, width} = Dimensions.get('screen');

const CityGrid = () => {
  const {hotels} = useAussieContext();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {hotels.map((city, i) => (
        <View key={i}>
          <CityDetails city={city.city} />
          <HotelCard data={city.hotels} cityId={city.id} />
        </View>
      ))}
    </ScrollView>
  );
};

const CityDetails = ({city}) => {
  function cityDetails() {
    // console.log('This city-', city);
  }
  return (
    <TouchableOpacity onPress={cityDetails}>
      <Text>{city}</Text>
    </TouchableOpacity>
  );
};

export default CityGrid;

const styles = StyleSheet.create({});
