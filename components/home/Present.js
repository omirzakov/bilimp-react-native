import React, { useEffect } from "react";


import { Button, Center, Heading, Image, Stack } from "native-base";
import { getToken } from "../api/token";

const Home = ({ navigation }) => {


  useEffect(() => {
    const tokenResponse = async () => {
        const token = await getToken();

        if(token) {
          navigation.navigate("General")
        }
    }

    tokenResponse();
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
