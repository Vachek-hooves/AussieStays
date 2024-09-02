import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = height * 0.2;

const HotelCard = ({data}) => {
  function hotelCard({item}) {
    const HOTEL_IMG = item.images[0];
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <ImageBackground
          source={{uri: HOTEL_IMG}}
          style={styles.image}
          // resizeMode="contain"
        >
          <Text>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.hotelId.toString()}
      renderItem={hotelCard}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 10,
    // padding: 20,
    marginVertical: 20,
    width: ITEM_WIDTH,
  },
  image: {
    height: ITEM_HEIGHT,
    padding: 5,
    overflow: 'hidden',
    borderRadius: 12,
  },
});
