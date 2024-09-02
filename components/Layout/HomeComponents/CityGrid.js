import {StyleSheet, Text, View} from 'react-native';
import {useAussieContext} from '../../../store/aussie_context';

const CityGrid = () => {
  const {hotels} = useAussieContext();

  return (
    <View>
      <Text>CityGrid</Text>
    </View>
  );
};

export default CityGrid;

const styles = StyleSheet.create({});
