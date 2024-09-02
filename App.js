import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {View} from 'react-native';
import {AussieProvider} from './store/aussie_context';
import {WelcomeScreen} from './screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <AussieProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'flip'}}>
          <Stack.Screen name="WelcomeScree" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AussieProvider>
  );
}

export default App;
