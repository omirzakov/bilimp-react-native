import React from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Button,
  NativeBaseProvider,
} from "native-base";
export const Teachers = ({ navigation, teachers }) => {

  return (
    <Box
      w={{
        base: "100%",
        md: "50%",
      }}
    >
      <Heading fontSize="xl" pb="3" marginTop={3}>
        Свободные преподаватели
      </Heading>
        <FlatList
          data={teachers}
          renderItem={({ item }) => {
            return (
              <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.imageUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.name} {item.surname }
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.subjects}
                  </Text>
                </VStack>
                <Spacer />
                <Button onPress={() => navigation.navigate("TeacherInfo", {
                  id: item.id
                })}>
                    Перейти
                </Button>
              </HStack>
            </Box>
            )
          }}
          keyExtractor={(item) => item.id}
        />
    </Box>
  );
};
export default Teachers;
