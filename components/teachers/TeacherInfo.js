import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  Stack,
  Button,
  FlatList,
  Alert,
} from "native-base";
import { Linking, ScrollView } from "react-native";
import Footer from "../footer/Footer";
import axios from "axios";
import { BASE_URL } from "../api";

function TeacherInfo({ navigation, route }) {
  const { id } = route.params;
  const [teacher, setTeacher] = useState();
  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v3/teachers/dto/${id}`);
        if (res.status) {
          setTeacher(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTeachFeedback = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/v3/teachers/feedbacks/${id}`
        );

        if (res.status) {
          console.log(res.data, "responseeeeee");
          setFeedbacks(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeachFeedback();
    fetchData();
  }, [id]);

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="100%"
      flex={1}
      shadow={1}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
    >
      <ScrollView>
        <Box>
          <Center
            bg="violet.500"
            _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
            position="absolute"
            bottom={0}
            px="3"
            py="1.5"
          >
            Профиль
          </Center>
        </Box>

        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading>
              {teacher?.name} {teacher?.surname} {teacher?.patronymic}
            </Heading>
            <Text
              fontSize="xs"
              _light={{ color: "violet.500" }}
              _dark={{ color: "violet.300" }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {teacher?.subjects}
            </Text>
          </Stack>

          <Text fontWeight="400">Опыт работы: {teacher?.story}</Text>
          <Text fontWeight="400">
            Возможность обучать онлайн: {teacher?.onlineEnabled ? "Да" : "Нет"}
          </Text>
          {teacher?.subjects && teacher?.subjects.length > 0 && (
            <>
              <Heading size="md">Предметы</Heading>
              <FlatList
                data={teacher?.teacherSubjects}
                renderItem={({ item }) => <Text> {item.name}</Text>}
              />
            </>
          )}
          {teacher?.experiences && teacher?.experiences.length > 0 && (
            <>
              <Heading size="md">Опыт работы</Heading>
              <FlatList
                data={teacher.experiences}
                renderItem={({ item }) => <Text>{item.experienceTitle}</Text>}
              />
            </>
          )}
          {teacher?.educations && teacher?.educations.length > 0 && (
            <>
              <Heading size="md">Образование</Heading>
              <FlatList
                data={teacher.educations}
                renderItem={({ item }) => (
                  <Text key={item}>
                    {item.universityName} {item.dateStart} - {item.dateEnd}
                  </Text>
                )}
              />
            </>
          )}
          <Heading size="md">Контакты</Heading>
          <Text> Электронная почта: {teacher?.email} </Text>
          <Text> Номер телефона: {teacher?.phoneNumber} </Text>
          <Text> Город: {teacher?.city?.city} </Text>
          <Button
            onPress={() => Linking.openURL(`tel:${teacher?.phoneNumber}`)}
          >
            Позвонить
          </Button>
          <Heading size="md">Отзывы</Heading>
          {feedbacks &&
            feedbacks.map((item) => (
              <Alert>

                <Text justifyContent={'flex-start'}>
                  Плюсы: { item?.pluses }
                </Text>
                <Text>
                  Минусы: { item?.minuses }
                </Text>
              </Alert>
            ))}
        </Stack>
      </ScrollView>
      <Footer navigation={navigation} />
    </Box>
  );
}
export default TeacherInfo;
