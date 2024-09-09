import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconAddress from '../Icon/IconAddress';
import IconMap from '../Icon/IconMap';
import {Colors} from '../../constant/colors';

const HotelAddress = ({address, name, latitude, longitude}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, padding: 15, maxWidth: '70%'}}>
      <IconAddress />
      <View
        style={{
          backgroundColor: Colors.white + 90,
          padding: 5,
          borderRadius: 12,
        }}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>{address}</Text>
      </View>
      <IconMap latitude={latitude} longitude={longitude} name={name} />
    </View>
  );
};

export default HotelAddress;

const styles = StyleSheet.create({});
