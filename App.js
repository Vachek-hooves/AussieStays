import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {View} from 'react-native';
import {AussieProvider} from './store/aussie_context';
import {FavoriteHotels, HomeScreen, WelcomeScreen} from './screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <AussieProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            animationDuration: 500,
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
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="FavoriteHotels" component={FavoriteHotels} />
        </Stack.Navigator>
      </NavigationContainer>
    </AussieProvider>
  );
}

export default App;
