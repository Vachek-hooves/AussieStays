import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {useAussieContext} from '../../store/aussie_context';
import HotelCard from './HotelCard';
import {Colors} from '../../constant/colors';
import {IconDeleteCity} from '../Icon';
const {height, width} = Dimensions.get('screen');

const CityGrid = () => {
  const {hotels} = useAussieContext();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {hotels.map((city, i) => (
        <View key={i}>
          <CityDetails city={city.city} cityId={city.id} />
          <HotelCard data={city.hotels} cityId={city.id} />
        </View>
      ))}
      {/* <View style={{height: 200}}></View> */}
    </ScrollView>
  );
};

const CityDetails = ({city, cityId}) => {
  return (
    <View
      style={{
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
      }}>
      <Text
        style={{
          fontWeight: '800',
          color: Colors.blueBottle + 90,
          fontSize: 22,
        }}>
        {city}
      </Text>
      <IconDeleteCity cityId={cityId} />
    </View>
  );
};

export default CityGrid;

const styles = StyleSheet.create({});
