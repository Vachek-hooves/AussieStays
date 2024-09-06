import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomMap} from '../components/ui';
import {Colors} from '../constant/colors';
import IconReturn from '../components/Icon/IconReturn';
import SafeLayout from '../components/Layout/SafeLayout';

const MapScreen = ({route}) => {
  const {latitude, longitude, name} = route.params;
  return (
    <SafeLayout>
      {/* <SafeAreaView style={{flex: 1}}> */}
        <Text style={styles.header}>{name}</Text>
        <CustomMap latitude={latitude} longitude={longitude} />
        <IconReturn />
      {/* </SafeAreaView> */}
    </SafeLayout>
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
    marginHorizontal: 20,
  },
});
