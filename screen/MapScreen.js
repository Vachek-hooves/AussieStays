import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomMap} from '../components/ui';
import {Colors} from '../constant/colors';
import IconReturn from '../components/Icon/IconReturn';

const MapScreen = ({route}) => {
  console.log(route.params);
  const {latitude, longitude, name} = route.params;
  console.log(latitude, longitude, name);
  return (
    <SafeAreaView style={{backgroundColor: Colors.blueSea, flex: 1}}>
      <Text style={styles.header}>{name}</Text>
      <CustomMap latitude={latitude} longitude={longitude} />
      <IconReturn />
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: Colors.matteYellow,
  },
});
