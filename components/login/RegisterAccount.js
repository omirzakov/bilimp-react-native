import { Box, Button, Center, FormControl, Input, Stack, Text, useToast } from "native-base";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { storeToken } from "../api/token";
import { registerAccount } from "../api/user";

const RegisterAccount = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullname] = useState("");
    const toast = useToast();
    const { setIsSignedIn } = useContext(AuthContext);

    const handleRegister = async () => {

        try {
            const user = {
                email,
                password,
                fullName
            }

            const res = await registerAccount(user);

            if(res.status) {
                const jwt = res.data.jwtToken;
                const storeJWT = await storeToken(jwt);
                setIsSignedIn(true);
                // toast.show({title: "Аккаунт успешно создан"})
                // setTimeout(() => {
                //     navigation.navigate("Login");
                // }, 2500);
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
                        <FormControl.Label>ФИО</FormControl.Label>
                        <Input type="text" placeholder="ФИО"  value={fullName} onChangeText={(val) => setFullname(val)} />
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
                    <Button onPress={handleRegister}>Зарегестрироваться</Button>
                </Stack>
            </FormControl>
        </Box>
        </>
    );
};
export default RegisterAccount;
