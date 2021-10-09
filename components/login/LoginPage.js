
import { Box, Button, Center, FormControl, Input, Stack, Text, useToast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { loginInit } from '../api/user';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const toast = useToast();

    const handleLogin = async () => {

        try {
            const user = {
                email,
                password
            }
            const res = await loginInit(user);
            const jwt = res.data.jwtToken;
            console.log(jwt)

            if(jwt) {
                // await AsyncStorage.setItem("jwt", jwt);
                toast.show({title: "Добро пожаловать"});
                navigation.navigate("General")
            }


        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <>
        <Box flex={1} marginTop={2}>
            <FormControl marginBottom={3}>
                <Stack mx="4">
                    <FormControl.Label>Электронная почта</FormControl.Label>
                    <Input type="text" placeholder="Электронная почта"  value={email} onChangeText={(val) => setEmail(val)} />
                </Stack>
                </FormControl>
                <FormControl marginBottom={3}>
                <Stack mx="4">
                    <FormControl.Label>Пароль</FormControl.Label>
                    <Input type="password" placeholder="Пароль" value={password} onChangeText={(val) => setPassword(val)} />
                </Stack>
                </FormControl>
                <FormControl marginTop={2}>
                <Stack mx="4">
                    <Button onPress={handleLogin}>Войти</Button>
                    <Text marginTop={3} marginBottom={2} textAlign="center"> Нету аккаунта? </Text>
                    <Button onPress={() => navigation.navigate("RegisterAccount")}> Создать аккаунт </Button>
                </Stack>
            </FormControl>
        </Box>
        </>
    );
};
export default LoginPage;
