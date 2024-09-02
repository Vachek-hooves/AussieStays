import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAussieContext} from '../store/aussie_context';

const WelcomeScreen = () => {
  const {hotels} = useAussieContext();
  console.log(hotels);

  return (
    <View>
      <SafeAreaView>
        <Text>WelcomeScreen</Text>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
