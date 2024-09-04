import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import HotelCard from '../HomeComponents/HotelCard';
import {Colors} from '../../constant/colors';
import {IconFavorite} from '../Icon';

const {height, width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.15;

const FavHotelsList = ({item, showHotel}) => {
  const cityId = item.cityId;
  const minPrice = item.price.min;
  const HOTEL_IMG = item.images[0];
  return (
    <TouchableOpacity
      onPress={() => showHotel(item)}
      style={styles.container}
      activeOpacity={0.7}>
      <Text style={styles.hotelName}>{item.name}</Text>
      <ImageBackground
        source={{uri: HOTEL_IMG}}
        style={styles.image}></ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <IconFavorite
          isFavorite={item.isFavorite}
          hotelId={item.hotelId}
            cityId={cityId}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.green}}>from ${minPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavHotelsList;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 10,
    // padding: 20,
    marginVertical: 20,
    width: ITEM_WIDTH,
    padding: 5,
    // backgroundColor: Colors.matteYellow,
    backgroundColor: Colors.white + 90,
  },
  hotelName: {
    textAlign: 'center',
    paddingVertical: 3,
    fontWeight: '600',
    fontSize: 16,
    color: Colors.blueSea,
  },
  image: {
    height: ITEM_HEIGHT,
    padding: 5,
    overflow: 'hidden',
    borderRadius: 12,
    marginBottom: 3,
  },
});
