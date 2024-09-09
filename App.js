// import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Animated} from 'react-native';
import {AussieProvider} from './store/aussie_context';
import {
  FavoriteHotels,
  HomeScreen,
  HotelDetailsScreen,
  MapScreen,
  ProfileScreen,
  WelcomeScreen,
} from './screen';
import {Colors} from './constant/colors';
import TabIconCities from './components/Icon/TabIconCities';
import TabIconFavorite from './components/Icon/TabIconFavorite';
import TabIconProfile from './components/Icon/TabIconProfile';
import {useEffect, useRef, useState} from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const images = [
  require('./assets/img/Loader1.png'),
  require('./assets/img/Loader2.png'),
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.matteYellow,
        tabBarInactiveTintColor: Colors.matteYellow + 20,
        headerShown: false,
        title: '',
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}>
      <Tab.Screen
        name="MainScreen"
        component={HomeScreen}
        options={{
          // title: 'home',
          tabBarIcon: ({color}) => TabIconCities(color),
        }}
      />
      <Tab.Screen
        name="FavoriteHotels"
        component={FavoriteHotels}
        options={{tabBarIcon: ({color}) => TabIconFavorite(color)}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{tabBarIcon: ({color}) => TabIconProfile(color)}}
      />
    </Tab.Navigator>
  );
};

function App() {
  const [id, setItem] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeStart();
    const timeOut = setTimeout(() => {
      navigateToMenu();
    }, 6000);
    return () => clearTimeout(timeOut);
  }, []);
  const fadeStart = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => fadeFinish());
  };

  const fadeFinish = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setItem(prevState => prevState + 1);
      fadeStart();
    });
  };
  const navigateToMenu = () => {
    setItem(2);
  };

  return (
    <AussieProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            animationDuration: 1000,
          }}>
          {id < 2 ? (
            <Stack.Screen name="Welcome" options={{headerShown: false}}>
              {() => (
                <View style={{flex: 1}}>
                  <Animated.Image
                    source={images[id]}
                    style={[
                      {width: '100%', flex: 1},
                      {opacity: animation},
                    ]}></Animated.Image>
                </View>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="HomeScreen" component={TabNavigator} />
          )}
          {/* <Stack.Screen name="WelcomeScree" component={WelcomeScreen} /> */}
          {/* <Stack.Screen name="TabNavigation" component={TabNavigator} /> */}
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen
            name="HotelDetailsScreen"
            component={HotelDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AussieProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  tabBarStyle: {
    // backgroundColor: Colors.matteYellow,
    backgroundColor: Colors.green,
    borderRadius: 32,
    height: 110,
    padding: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20,
    marginHorizontal: 5,
    // marginBottom: 5,
    backgroundColor: 'transparent',
    // backgroundColor: Colors.white + 90,
  },
  tabBarItemStyle: {
    flex: 1,
    backgroundColor: Colors.amethyst,
    borderRadius: 22,
    margin: 5,
  },
});
