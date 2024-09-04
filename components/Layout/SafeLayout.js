import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../constant/colors';

const SafeLayout = ({children, style}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/img/citybg.jpg')}
        imageStyle={{flex: 1}}
        style={{padding: 10}}>
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
      </ImageBackground>
    </View>
  );
};

export default SafeLayout;

const styles = StyleSheet.create({});
