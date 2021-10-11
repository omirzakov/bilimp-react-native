import React, { createContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import LoginPage from "./components/login/LoginPage";
import Present from "./components/home/Present";
import General from "./components/general/General";
import TeacherInfo from "./components/teachers/TeacherInfo";
import TeacherSearch from "./components/teachers/TeacherSearch";
import Profile from "./components/profile/Profile";
import History from "./components/history/History";
import RegisterAccount from "./components/login/RegisterAccount";
import { getToken } from "./components/api/token";

const Stack = createNativeStackNavigator();
export const AuthContext = createContext(null);

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const tokenResponse = async () => {
      const token = await getToken();

      if (token) {
        setIsSignedIn(true);
      }
    };

    tokenResponse();
  }, []);

  return (
    <AuthContext.Provider value={{setIsSignedIn}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {isSignedIn ? (
              <>
                <Stack.Screen
                  name="General"
                  component={General}
                  options={{ title: "Главная" }}
                />
                <Stack.Screen
                  name="TeacherInfo"
                  component={TeacherInfo}
                  options={{ title: "Информация" }}
                />
                <Stack.Screen
                  name="TeacherSearch"
                  component={TeacherSearch}
                  options={{ title: "Поиск" }}
                />
                <Stack.Screen
                  name="History"
                  component={History}
                  options={{ title: "История" }}
                />
                <Stack.Screen
                  name="Profile"
                  component={Profile}
                  options={{ title: "Профиль" }}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={Present} />
                <Stack.Screen
                  name="RegisterAccount"
                  component={RegisterAccount}
                />
                <Stack.Screen name="Login" component={LoginPage} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
}
