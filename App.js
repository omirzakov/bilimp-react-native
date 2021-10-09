import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import LoginPage from "./components/login/LoginPage";
import Present from "./components/home/Present";
import General from "./components/general/General";
import TeacherInfo from "./components/teachers/TeacherInfo";
import TeacherSearch from "./components/teachers/TeacherSearch";
import Profile from "./components/profile/Profile";
import History from "./components/history/History";
import RegisterAccount from "./components/login/RegisterAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Stack = createNativeStackNavigator();

export default function App({ navigation }) {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Present} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="General" component={General} />
          <Stack.Screen name="TeacherInfo" component={TeacherInfo} />
          <Stack.Screen name="TeacherSearch" component={TeacherSearch} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
