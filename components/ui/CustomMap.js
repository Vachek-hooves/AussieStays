import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Colors} from '../../constant/colors';
import {useState} from 'react';

const {height} = Dimensions.get('screen');
const MAP_HEIGHT = height * 0.7;

const CustomMap = ({latitude, longitude}) => {
  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.052,
    longitudeDelta: 0.051,
  });

  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const zoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };
  return (
    <MapView
      style={styles.rootContainer}
      // initialRegion={{
      //   latitude: latitude,
      //   longitude: longitude,
      //   latitudeDelta: 0.052,
      //   longitudeDelta: 0.051,
      // }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}>
      <Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={zoomIn}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={zoomOut}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </MapView>
  );
};

export default CustomMap;

const styles = StyleSheet.create({
  rootContainer: {
    height: 1,
    height: MAP_HEIGHT,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'column',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: Colors.blueSea,
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.matteYellow,
  },
});
