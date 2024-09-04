import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconAddress from '../Icon/IconAddress';
import IconMap from '../Icon/IconMap';

const HotelAddress = ({address, name, latitude, longitude}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, padding: 15, maxWidth: '70%'}}>
      <IconAddress />
      <Text>{address}</Text>
      <IconMap latitude={latitude} longitude={longitude} name={name} />
    </View>
  );
};

export default HotelAddress;

const styles = StyleSheet.create({});
