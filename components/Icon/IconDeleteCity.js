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

const IconDeleteCity = () => {
  return (
    <TouchableOpacity style={styles.rootContainer}>
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
    tintColor: Colors.blueBottle + 90,
    alignSelf: 'flex-end',
    //   margin: 30,
    marginRight: 5,
  },
});
