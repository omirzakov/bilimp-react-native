import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Spinner } from 'native-base';
import Teachers from '../teachers/Teachers';
import Footer from '../footer/Footer';
import { api, BASE_URL } from '../api/index';
import axios from 'axios';
import Loader from '../loader/Loader';
import { FontAwesome5 } from '@expo/vector-icons';



const General = ({ navigation }) => {
    const [teachers, setTeachers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/v3/teachers`);
                const data = [...res.data];
                const newdata = [...data, ...res.data]
                setTeachers(newdata)
                setLoading(false)
            } catch(err) {
                console.log(err)
            }
        }

        fetchData();
    }, [])

    return (
        <Box flex={1} padding={3}>
            <Button onPress={() => navigation.navigate('Courses')} leftIcon={<FontAwesome5 name='hotjar' size={24} color='red' />} variant='subtle' colorScheme='secondary'>Курсы</Button>
            <Teachers navigation={navigation} teachers={teachers} />
            <Footer navigation={navigation} />
        </Box>
    )
}
export default General;