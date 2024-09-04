import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.blueSea,
        tabBarInactiveTintColor: Colors.matteYellow + 80,
        headerShown: false,
        title: '',
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}>
      <Tab.Screen
        name="HomeScreen"
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
  return (
    <AussieProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            animationDuration: 1000,
          }}>
          <Stack.Screen
            name="WelcomeScree"
            component={WelcomeScreen}
            // options={{
            //   animation: 'fade',
            //   animationDuration: 500,
            //   headerShown: false,
            // }}
          />
          <Stack.Screen name="TabNavigation" component={TabNavigator} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen
            name="HotelDetailsScreen"
            component={HotelDetailsScreen}
          />
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          {/* <Stack.Screen name="FavoriteHotels" component={FavoriteHotels} /> */}
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
  },
  tabBarItemStyle: {
    flex: 1,
    backgroundColor: Colors.green,
    borderRadius: 22,
    margin: 5,
  },
});
