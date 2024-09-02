import {StyleSheet, Text} from 'react-native';
import SafeLayout from '../components/Layout/SafeLayout';
import CityGrid from '../components/HomeComponents/CityGrid';

const HomeScreen = () => {
  return (
    <SafeLayout>
      <CityGrid />
    </SafeLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
