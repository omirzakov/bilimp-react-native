import React, { useEffect, useState } from 'react'
import { Box, Heading } from 'native-base';
import Teachers from '../teachers/Teachers';
import Footer from '../footer/Footer';
import { api, BASE_URL } from '../api/index';
import axios from 'axios';



const General = ({ navigation }) => {
    const [teachers, setTeachers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/v3/teachers`);
                const data = [...res.data];
                const newdata = [...data, ...res.data]
                setTeachers(newdata)
            } catch(err) {
                console.log(err)
            }
        }

        fetchData();
    }, [])

    return (
        <Box flex={1}>
            <Heading margin={4}>Главная</Heading>
            <Teachers navigation={navigation} teachers={teachers} />
            <Footer navigation={navigation} />
        </Box>
    )
}
export default General;