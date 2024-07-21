import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key: string): Promise<any> => {
  try {
    const res = await AsyncStorage.getItem(key);
    return res != null ? JSON.parse(res) : null;
  } catch (e) {
    console.error('Failed to fetch the data from storage', e);
    return null;
  }
};

export const setItem = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Failed to save the data to the storage', e);
  }
};
