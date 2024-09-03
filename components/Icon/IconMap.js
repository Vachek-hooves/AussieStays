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

const IconMap = ({latitude, longitude}) => {
  const navigation = useNavigation();
  const position = {latitude, longitude};

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MapScreen', position)}
      style={{}}>
      <Image
        source={require('../../assets/icons/map.png')}
        style={{width: 60, height: 60, tintColor: Colors.matteYellow}}
      />
    </TouchableOpacity>
  );
};

export default IconMap;

const styles = StyleSheet.create({});
