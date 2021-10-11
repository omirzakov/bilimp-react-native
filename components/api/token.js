import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeToken = async (value) => {
    try {
      await AsyncStorage.setItem('bilim_jwt', value)
    } catch (e) {
      console.log(e)
    }
}
  
export const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('bilim_jwt')
      if(value !== null) {
        return value;
      }
    } catch(e) {
      console.log(e)
    }
}

export const destroyToken = async () => {
    try {
      const value = await AsyncStorage.removeItem('bilim_jwt');

      return value;
    } catch(e) {
      console.log(e)
    }
}