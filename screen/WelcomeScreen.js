import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import {useRef, useEffect, useState} from 'react';
import {Colors} from '../constant/colors';

const WelcomeScreen = ({navigation}) => {
  const animate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 400,
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
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome to{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Aussie Stays</Text>
            </View>
          </Text>
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
    height: '90%',
  },
  // content: {padding: 24},
  header: {paddingHorizontal: 10},
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '500',
    color: Colors.matteYellow,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 20,
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
    // padding: 12,
    height: '100%',
    width: '100%',
    // borderRadius: 12,
    // overflow: 'hidden',
  },
  appName: {
    backgroundColor: Colors.green,
    paddingHorizontal: 8,
    transform: [{rotate: '-10deg'}],
  },
  appNameText: {
    color: Colors.matteYellow,
    fontWeight: '800',
    fontSize: 30,
  },
});
