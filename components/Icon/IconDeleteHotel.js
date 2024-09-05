import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';

const IconDeleteHotel = ({cityId, hotelId}) => {
  const {deleteHotel} = useAussieContext();
  function cityHotelCall() {
    deleteHotel(cityId, hotelId);
  }
  return (
    <TouchableOpacity style={styles.rootContainer} onPress={cityHotelCall}>
      <Image
        source={require('../../assets/icons/remove.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default IconDeleteHotel;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    tintColor: Colors.red + 50,
    alignSelf: 'flex-end',
  },
});
