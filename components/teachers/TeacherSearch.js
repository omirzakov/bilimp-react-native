import { Box, FormControl, Heading, Input, Stack } from 'native-base';
import React from 'react';


const TeacherSearch = () => {


    return (
        <Box flex={1} margin={4}>
            <Heading>Поиск преподаватели</Heading>
            <FormControl marginTop={5}>
                <Input placeholder="Имя преподавателя" padding={4} />
            </FormControl>
        </Box>
    )
}
export default TeacherSearch;