import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const CustomMap = ({latitude, longitude}) => {
  return (
    <MapView
      style={styles.rootContainer}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.922,
        longitudeDelta: 0.421,
      }}>
      <Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
    </MapView>
  );
};

export default CustomMap;

const styles = StyleSheet.create({
  rootContainer: {
    height: 1,
    height: 300,
    marginHorizontal: 10,
    borderRadius: 12,
  },
});
