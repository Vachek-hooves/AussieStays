import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import {useRef, useEffect,} from 'react';
import {Colors} from '../constant/colors';

const {height} = Dimensions.get('screen');

const NAME_HEIGHT = height * 0.1;

const WelcomeScreen = ({navigation}) => {
  const animate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => navigation.navigate('TabNavigation'));
  }, [animate]);

  return (
    <View style={{backgroundColor: Colors.blueSea, padding: 10, flex: 1}}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <Image
            source={require('../assets/img/kangaroo.png')}
            style={styles.heroImg}
            resizeMode="contain"
            imageStyle={styles.heroImg}
          />
        </View>
        
        <View
          style={{
            position: 'absolute',
            top: NAME_HEIGHT,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 36,
              lineHeight: 40,
              fontWeight: '700',
              color: Colors.green,
           
              marginLeft: 30,
            }}>
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 36,
              lineHeight: 40,
              fontWeight: '700',
              color: Colors.blueSea,
              textAlign: 'center',
          
            }}>
            to
          </Text>
          <View style={styles.appName}>
            <Text style={styles.appNameText}>Teasury & Other Hotels Guide</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: Colors.matteYellow,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    height: '100%',
  },
  header: {paddingHorizontal: 10, position: 'absolute'},
  title: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '700',
    color: Colors.green,
    textAlign: 'center',
    width: '80%',
    top: NAME_HEIGHT,
    right: 0,
  },
  message: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: Colors.amethyst,
    textAlign: 'center',
    marginTop: 20,
  },
  hero: {
    backgroundColor: Colors.matteYellow,
    padding: 12,
    borderRadius: 16,
    margin: 12,
    height: '100%',
  },
  heroImg: {
    height: '100%',
    width: '100%',
  },
  appName: {
    backgroundColor: Colors.green,
    paddingHorizontal: 8,
    transform: [{rotate: '-10deg'}],
    width: '90%',

    marginHorizontal: 20,
  },
  appNameText: {
    color: Colors.matteYellow,
    fontWeight: '900',
    fontSize: 36,
    letterSpacing: 3,
    textAlign: 'center',
  },
});
