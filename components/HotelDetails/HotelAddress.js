import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconAddress from '../Icon/IconAddress';

const HotelAddress = ({address}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, padding: 15}}>
      <IconAddress />
      <Text>{address}</Text>
    </View>
  );
};

export default HotelAddress;

const styles = StyleSheet.create({});
