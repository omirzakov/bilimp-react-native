import axios from 'axios';
import { Box, Button, FlatList, Heading } from 'native-base';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../api';
import { getAllSubjects, getAllTeachersBySubject } from '../api/subject';
import Loader from '../ui/Loader';
import Teachers from './Teachers';


const TeacherSearch = ({ navigation }) => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [teachers, setTeachers] = useState([]);
    console.log('here')
    useEffect(() => {
        const fetchDataSubjects = async () => {
            const res = await getAllSubjects();
            setSubjects(res.data);
            setLoading(false);
        }

        const fetchDataAllTeachers = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/v3/teachers`);
                console.log(res.data)
                setTeachers(res.data)
            } catch(err) {
                console.log(err)
            }
        }

        fetchDataAllTeachers();
        fetchDataSubjects();
    }, []);


    const onSearchTeachers = async (item) => {
        console.log(item)
        try {
            const { id } = item;
            const res = await getAllTeachersBySubject(id);
            console.log(res, 'res data')
            setTeachers(res.data);
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <Box margin={4}>
            {
                loading ? <Loader /> :
                <>
                    <Heading marginBottom={3}>Поиск преподаватели</Heading>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={subjects}
                        renderItem={({item}) => <Button p="4" shadow={2} height="50" marginRight={3} bg="primary.500" onPress={() => onSearchTeachers(item)}>{item.name}</Button>}
                    />
                </>
            }
            {
                teachers?.length > 0 ?
                <Teachers navigation={navigation} teachers={teachers} />
                : <Heading >По данному предмету пока что нету преподавателей</Heading>
            }
            
            {/* <FormControl marginTop={5}>
                <Input placeholder="Имя преподавателя" padding={4} />
            </FormControl> */}
        </Box>
    )
}
export default TeacherSearch;