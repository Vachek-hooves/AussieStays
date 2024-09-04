import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';

const IconDeleteCity = ({cityId}) => {
  const {deleteCity} = useAussieContext();

  function cityDeleteCall() {
    deleteCity(cityId);
  }

  return (
    <TouchableOpacity style={styles.rootContainer} onPress={cityDeleteCall}>
      <Image
        source={require('../../assets/icons/remove.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default IconDeleteCity;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    tintColor: Colors.red + 50,
  },
});
