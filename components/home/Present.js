import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Center, Heading, Image, Stack, Text } from "native-base";
import Storage from 'react-native-storage';
import React, { useEffect } from "react";

const Home = ({ navigation }) => {


  useEffect(async () => {

    if(jwt) {

      }
  }, [])




  return (
    <>
      <Center flex={1} px={3}>
        <Stack direction="column">
            <Heading textAlign="center" marginBottom={5}>Study community</Heading>
            <Center marginBottom={3}>
                <Image
                marginTop={3}
                source={{
                    uri: "https://cdn-icons.flaticon.com/png/512/3145/premium/3145755.png?token=exp=1633761520~hmac=a90f02a1ed2217c132e213c07c2a73a7",
                }}
                alt="Alternate Text"
                size="xl"
                />
            </Center>
            <Button marginTop={3} onPress={() => navigation.navigate("Login")}>Войти</Button>
        </Stack>
      </Center>
    </>
  );
};
export default Home;
