import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const TabIconCities = color => {
  return (
    // <View style={styles.rootContainer}>
      <Image
        source={require('../../assets/icons/city.png')}
        style={[styles.image, {tintColor: color}]}
      />
    // </View>
  );
};

export default TabIconCities;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
