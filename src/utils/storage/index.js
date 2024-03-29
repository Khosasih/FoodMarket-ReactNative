import AsyncStorage from '@react-native-async-storage/async-storage';
import showMessage from '../showMessage';
export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(storageKey, jsonValue)
  } catch (e) {
    showMessage('Gagal Menyimpan localStorage');
  }
  console.log('Set.Done.')
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    showMessage('Gagal Mengambil data localStorage');
  }

  console.log('Get.Done: ', jsonValue)
};
