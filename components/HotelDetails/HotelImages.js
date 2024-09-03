import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const HotelImages = ({images}) => {
  function renderImages({item}) {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  }
  return (
    <View>
      <Carousel
        data={images}
        renderItem={renderImages}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8}
        layout={'default'}
      />
    </View>
  );
};

export default HotelImages;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
});
