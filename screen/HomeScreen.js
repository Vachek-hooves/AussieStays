import {StyleSheet, Text} from 'react-native';
import SafeLayout from '../components/Layout/SafeLayout';
import CityGrid from '../components/HomeComponents/CityGrid';
import {IconAddCity} from '../components/Icon';

const HomeScreen = () => {
  return (
    <SafeLayout>
      <IconAddCity />
      <CityGrid />
    </SafeLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
