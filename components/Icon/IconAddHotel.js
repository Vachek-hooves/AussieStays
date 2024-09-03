import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';

const IconAddHotel = () => {
  function addHotelCall() {
    console.log('create new hotel');
  }
  return (
    <TouchableOpacity onPress={addHotelCall} style={styles.rootContainer}>
      <Image
        source={require('../../assets/icons/hotel.png')}
        style={styles.image}
      />
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default IconAddHotel;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    // tintColor: Colors.yellow,
    // alignSelf: 'flex-end',
    //   margin: 30,
    marginRight: 5,
  },
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // margin: 20,
    // alignSelf: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  text: {fontWeight: '900', fontSize: 32, color: Colors.blueSea},
});
