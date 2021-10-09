import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Button, FormControl, Heading, Input, Stack } from 'native-base';
import React from 'react';


const Profile = ({ navigation }) => {

    const handleLogout = async () => {
        // console.log(await AsyncStorage.getAllKeys())
    }


    return (
        <Box flex={1} margin={4}>
            <Heading>Профиль</Heading>
            <Button marginTop={3} colorScheme="secondary" onPress={handleLogout}>Выйти</Button>
        </Box>
    )
}
export default Profile;