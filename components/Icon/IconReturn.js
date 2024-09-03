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

const {height, width} = Dimensions.get('screen');
const MARGIN_BOTTOM = height * 0.1;
const RIGHT_MARGIN = width * 0.1;

const IconReturn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: 'absolute',
        bottom: MARGIN_BOTTOM,
        right: RIGHT_MARGIN,
      }}>
      <Image
        source={require('../../assets/icons/backward.png')}
        style={{width: 60, height: 60, tintColor: Colors.amethyst}}
      />
    </TouchableOpacity>
  );
};

export default IconReturn;

const styles = StyleSheet.create({});
