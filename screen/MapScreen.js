import {StyleSheet, Text, View} from 'react-native';
import {CustomMap} from '../components/ui';

const MapScreen = ({route}) => {
  console.log(route.params);
  const {latitude, longitude} = route.params;
  console.log(latitude, longitude);
  return (
    <View>
      <Text>MapScreen</Text>
      <CustomMap latitude={latitude} longitude={longitude} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
