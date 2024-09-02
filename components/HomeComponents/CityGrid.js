import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useAussieContext} from '../../store/aussie_context';
import HotelCard from './HotelCard';
const {height, width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;

const CityGrid = () => {
  const {hotels} = useAussieContext();

  return (
    <ScrollView>
      {hotels.map((city, i) => (
        <View key={i}>
          <CityDetails city={city.city} />
          <HotelCard data={city.hotels} />
        </View>
      ))}
    </ScrollView>
  );
};

const CityDetails = ({city}) => {
  function cityDetails() {
    console.log('This city-', city);
  }
  return (
    <TouchableOpacity onPress={cityDetails}>
      <Text>{city}</Text>
    </TouchableOpacity>
  );
};

export default CityGrid;

const styles = StyleSheet.create({});
