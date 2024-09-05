import {Image, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import {Colors} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {CreateNewHotel} from '../HomeComponents';
import {useAussieContext} from '../../store/aussie_context';

const IconAddHotel = ({data, cityId}) => {
  const {createHotel} = useAussieContext();
  const [isNewHotel, setIsNewHotel] = useState(false);

  const handleCreateHotel = newHotel => {
    setIsNewHotel(false);
    createHotel(cityId, newHotel);
  };

  return (
    <TouchableOpacity
      onPress={() => setIsNewHotel(true)}
      style={styles.rootContainer}>
      <Image
        source={require('../../assets/icons/hotel.png')}
        style={styles.image}
      />
      <Text style={styles.text}>+</Text>
      <Modal visible={isNewHotel} animationType="slide" transparent={false}>
        <CreateNewHotel
          closeModal={() => setIsNewHotel(false)}
          onSubmit={handleCreateHotel}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export default IconAddHotel;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {fontWeight: '900', fontSize: 32, color: Colors.blueSea},
});
