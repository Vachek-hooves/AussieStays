import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomMap} from '../components/ui';

const MapScreen = ({route}) => {
  console.log(route.params);
  return (
    <View>
      <Text>MapScreen</Text>
      <CustomMap latitude={latitude} longitude={longitude} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
