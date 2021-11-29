import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Box, Button, FormControl, Heading, Input, Stack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { BASE_URL } from '../api';
import { destroyToken, getToken } from '../api/token';
import Loader from '../loader/Loader';


const Profile = ({ navigation }) => {
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(true);
    const { setIsSignedIn } = useContext(AuthContext);

    const handleLogout = async () => {
        const data = await destroyToken();
        setIsSignedIn(false);
        navigation.navigate("Home");
    }

    useEffect(() => {
        const fetchData = async () => {
            const jwt = await getToken();

            const res = await axios.get(`${BASE_URL}/profile`, {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            });

            setProfile(res.data);
            setLoading(false);
        }

        fetchData();
    }, [])


    return (
        <Box flex={1} margin={4}>
            <Heading marginBottom={4}>Профиль</Heading>
            {
                loading ? <Loader /> :
                <>
                    <Heading size="md" marginBottom={3}>{ profile?.fullName }</Heading>
                    <Heading size="sm" marginBottom={3}> { profile?.email } </Heading>
                    <Button marginTop={3} colorScheme="secondary" onPress={handleLogout}>Выйти</Button>
                </>
            }
        </Box>
    )
}
export default Profile;