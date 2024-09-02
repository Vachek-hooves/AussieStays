import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAussieContext} from '../store/aussie_context';

const WelcomeScreen = () => {

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
