import { Box, Button, Center, FormControl, Input, Stack, Text, useToast } from "native-base";
import React, { useState } from "react";

const LoginPage = ({ navigation }) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const toast = useToast();

    const handleLogin = () => {

        if(login === "madi" && password === "123") {
            navigation.navigate("General")
        } else {
            toast.show({
                description: "Неправильный логин или пароль, повторите еще раз"
            })
        }
    }
    
    return (
        <>
        <Center flex={1}>
            <FormControl marginBottom={3}>
                <Stack mx="4">
                    <FormControl.Label>Логин</FormControl.Label>
                    <Input type="text" placeholder="Логин"  value={login} onChangeText={(val) => setLogin(val)} />
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
                </Stack>
            </FormControl>
        </Center>
        </>
    );
};
export default LoginPage;
