import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';

const IconMap = ({latitude, longitude, name}) => {
  const navigation = useNavigation();
  const position = {latitude, longitude, name};

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MapScreen', position)}
      style={{}}>
      <Image
        source={require('../../assets/icons/map.png')}
        style={{width: 40, height: 40, tintColor: Colors.amethyst}}
      />
    </TouchableOpacity>
  );
};

export default IconMap;

const styles = StyleSheet.create({});
