import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';

const IconAddCity = () => {
  const {createCity} = useAussieContext();
  function addCityCall() {
    createCity('Melbourne');
  }
  return (
    <TouchableOpacity onPress={addCityCall} style={styles.rootContainer}>
      <Image
        source={require('../../assets/icons/city.png')}
        style={styles.image}
      />
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default IconAddCity;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    alignSelf: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    tintColor: Colors.yellow,
    alignSelf: 'flex-end',
    //   margin: 30,
    marginRight: 5,
  },
  text: {fontWeight: '900', fontSize: 32, color: Colors.yellow},
});
