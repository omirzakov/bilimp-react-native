import React from 'react'
import { Box, Container, Heading } from 'native-base';
import Teachers from '../teachers/Teachers';
import Footer from '../footer/Footer';



const General = ({ navigation }) => {
    


    return (
        <Box flex={1}>
            <Heading margin={4}>Главная</Heading>
            <Teachers navigation={navigation} />
            <Footer navigation={navigation} />
        </Box>
    )
}
export default General;