import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  View,
} from 'react-native';
import {IconAddHotel, IconFavorite} from '../Icon';
import {Colors} from '../../constant/colors';
const {height, width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = height * 0.15;

const HotelCard = ({data, cityId, onAddHotel}) => {
  function hotelCard({item}) {
    const minPrice = item.price.min;
    const maxPrice = item.price.max;
    const HOTEL_IMG = item.images[0];
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
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
            <Text>from ${minPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderAddHotelCard() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.container,
          {
            // height: ITEM_HEIGHT,
            backgroundColor: Colors.white + 80,
            minHeight: ITEM_HEIGHT,
          },
        ]}
        onPress={onAddHotel}>
        <IconAddHotel />
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={[...data, {isAddButton: true}]} // Додаємо фіктивний об'єкт в кінець списку
        keyExtractor={(item, index) =>
          item.hotelId?.toString() || index.toString()
        }
        renderItem={({item}) =>
          item.isAddButton ? renderAddHotelCard() : hotelCard({item})
        }
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  addHotelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  container: {
    // borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 10,
    // padding: 20,
    marginVertical: 20,
    width: ITEM_WIDTH,
    // padding:3
  },
  image: {
    height: ITEM_HEIGHT,
    padding: 5,
    overflow: 'hidden',
    borderRadius: 12,
    marginBottom: 3,
  },
  hotelName: {
    textAlign: 'center',
    paddingVertical: 3,
  },
});
