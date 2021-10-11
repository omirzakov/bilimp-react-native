
import { Box, Button, Center, FormControl, Input, Stack, Text, useToast } from "native-base";
import React, { useContext, useState } from "react";
import { loginInit } from '../api/user';
import { storeToken } from "../api/token";
import { AuthContext } from "../../App";

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const toast = useToast();
    const { setIsSignedIn } = useContext(AuthContext);
    

    const handleLogin = async () => {

        try {
            const user = {
                email,
                password
            }
            const res = await loginInit(user);
            const jwt = res.data.jwtToken;

            if(jwt) {
                const res = await storeToken(jwt);
                toast.show({title: "Добро пожаловать"});
                setIsSignedIn(true);
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
