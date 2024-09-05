import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';
import {useState} from 'react';
import {CreateNewCityModal} from '../HomeComponents';

const IconAddCity = () => {
  const {createCity} = useAussieContext();
  const [isNewCity, setIsNewCity] = useState(false);
  const [cityName, setCityName] = useState('New City');
  const [isActive, setIsActive] = useState(false);

  function closeModal() {
    setIsActive(false);
  }

  function createNewCity() {
    if (!cityName.trim()) {
      Alert.alert('Wrong input', 'City name should not be empty');
      return;
    }
    createCity(cityName);
    setIsActive(false);
  }
  return (
    <TouchableOpacity
      // onPress={createNewCity}
      // onPress={() => setIsNewCity(true)}
      onPress={() => setIsActive(true)}
      style={styles.rootContainer}>
      <Image
        source={require('../../assets/icons/city.png')}
        style={styles.image}
      />
      <Text style={styles.text}>+</Text>
      <Modal visible={isActive} animationType="slide" transparent={false}>
        <CreateNewCityModal
          closeModal={closeModal}
          cityName={cityName}
          setCityName={setCityName}
          createCity={createNewCity}
        />
      </Modal>
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
    tintColor: Colors.blueBottle + 90,
    alignSelf: 'flex-end',
    //   margin: 30,
    marginRight: 5,
  },
  text: {fontWeight: '900', fontSize: 32, color: Colors.blueBottle + 90},
});
