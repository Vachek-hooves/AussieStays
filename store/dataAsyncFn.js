import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async data => {
  try {
    await AsyncStorage.setItem('hotels', JSON.stringify(data));
  } catch (error) {
    throw new Error('Data store failure', error);
    return [];
  }
};

export const getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data !== null ? JSON.parse(data) : [];
  } catch (error) {
    throw new Error(`Data fetching by key ${key} failure`, error);
    return [];
  }
};


