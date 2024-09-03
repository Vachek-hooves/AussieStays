import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HotelName = ({name}) => {
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default HotelName;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 2,
  },
});
