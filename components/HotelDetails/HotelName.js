import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constant/colors';

const HotelName = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default HotelName;

const styles = StyleSheet.create({
  container: {marginVertical: 4},
  text: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 2,
    color: Colors.matteYellow,
  },
});
