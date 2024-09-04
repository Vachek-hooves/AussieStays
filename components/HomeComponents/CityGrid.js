import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useAussieContext} from '../../store/aussie_context';
import HotelCard from './HotelCard';
import {Colors} from '../../constant/colors';
import {IconDeleteCity} from '../Icon';

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
    </ScrollView>
  );
};

const CityDetails = ({city, cityId}) => {
  return (
    <View
      style={{
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
