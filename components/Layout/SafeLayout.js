import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constant/colors';

const SafeLayout = ({children, style}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.blueSea, padding: 10}}>
      <SafeAreaView
        style={[
          style,
          {
            // backgroundColor: Colors.matteYellow,
            height: '100%',
            borderRadius: 22,
          },
        ]}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default SafeLayout;

const styles = StyleSheet.create({});
