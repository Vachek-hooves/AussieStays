import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconAddress from '../Icon/IconAddress';
import IconMap from '../Icon/IconMap';

const HotelAddress = ({address}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, padding: 15, maxWidth: '80%'}}>
      <IconAddress />
      <Text>{address}</Text>
      <IconMap />
    </View>
  );
};

export default HotelAddress;

const styles = StyleSheet.create({});
